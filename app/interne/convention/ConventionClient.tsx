"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculerEcheancier,
  rendreEcheancierTexte,
  rendreConditionsTarifaires,
  eurosVersCentimes,
  formaterEuros,
  plafondAcompteCentimes,
  acompteParDefautCentimes,
} from "../../../lib/echeancier";
import {
  ACOMPTE_DEFAUT,
  REGLEMENTS_MAX_DEFAUT,
  DELAI_RETRACTATION_JOURS,
  specialitesPour,
  natureVoie,
  familleVoie,
  type ConditionsConvention,
} from "../../formations/conventions";

type Formation = {
  slug: string;
  titre: string;
  duree: string;
  session: string | null;
  demarrage: string | null;
  voies: string[];
  convention: ConditionsConvention;
};
type Contact = { id: string; nom: string; email: string | null; phone: string | null };

// Modes de règlement de la convention d'octobre 2026 (le prélèvement SEPA
// GoCardless n'y figure plus).
const MODES_PAIEMENT = ["Chèque", "Virement", "Espèces", "Carte bancaire"];

/** Valeurs préremplies quand on choisit une formation. */
function valeursFormation(f: Formation | undefined) {
  const c = f?.convention ?? {};
  const prixCentimes = (c.prix ?? 0) * 100;
  const reglementsMax = c.reglementsMax ?? REGLEMENTS_MAX_DEFAUT;
  const acompteCentimes = prixCentimes > 0
    ? acompteParDefautCentimes(prixCentimes, (c.acompte ?? ACOMPTE_DEFAUT) * 100)
    : (c.acompte ?? ACOMPTE_DEFAUT) * 100;
  return {
    prix: c.prix !== undefined ? String(c.prix) : "",
    acompte: String(acompteCentimes / 100),
    nombreEcheances: Math.max(1, reglementsMax - 1),
    joursCours: c.joursCours ?? "",
    voie: f?.voies[0] ?? "",
    concours: c.concours?.[0]?.libelle ?? "",
  };
}

/** Date AAAA-MM-JJ du jour + n jours, en heure locale. */
function dansNJours(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const champ: React.CSSProperties = {
  width: "100%", padding: "10px 12px", border: "1px solid #D6E4F0",
  borderRadius: 8, fontSize: 15, background: "white",
};
const label: React.CSSProperties = {
  display: "block", fontSize: 12, fontWeight: 700, color: "#5a6f8f",
  textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6,
};

export default function ConventionClient({ formations }: { formations: Formation[] }) {
  const [recherche, setRecherche] = useState("");
  const [resultats, setResultats] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [chargeRecherche, setChargeRecherche] = useState(false);
  const [erreurRecherche, setErreurRecherche] = useState<string | null>(null);
  const [creation, setCreation] = useState(false);
  const [nouveau, setNouveau] = useState({ prenom: "", nom: "", email: "", telephone: "" });
  const [erreurCreation, setErreurCreation] = useState<string | null>(null);
  const [enCreation, setEnCreation] = useState(false);

  const initiale = valeursFormation(formations[0]);
  const [formationSlug, setFormationSlug] = useState(formations[0]?.slug ?? "");
  const [concours, setConcours] = useState(initiale.concours);
  const [voieConcours, setVoieConcours] = useState(initiale.voie);
  const [option, setOption] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [optionSpecialite, setOptionSpecialite] = useState("");
  const [dureeSaisie, setDureeSaisie] = useState<string | null>(null);
  const [joursCours, setJoursCours] = useState(initiale.joursCours);
  const [prix, setPrix] = useState(initiale.prix);
  const [remise, setRemise] = useState("0");
  const [acompte, setAcompte] = useState(initiale.acompte);
  const [nombreEcheances, setNombreEcheances] = useState(initiale.nombreEcheances);
  const [premiereEcheance, setPremiereEcheance] = useState("");
  const [modePaiement, setModePaiement] = useState(MODES_PAIEMENT[0]);

  const [envoi, setEnvoi] = useState(false);
  // Récapitulatif affiché avant d'envoyer la convention à signer.
  const [confirmation, setConfirmation] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "ko"; texte: string } | null>(null);

  // Par défaut : le 5 du mois suivant la fin du délai de rétractation, une date
  // d'encaissement conforme à la convention (« entre le 1er et le 5 du mois »).
  useEffect(() => {
    const fin = new Date();
    fin.setDate(fin.getDate() + DELAI_RETRACTATION_JOURS);
    const prochain = new Date(fin.getFullYear(), fin.getMonth() + 1, 5);
    setPremiereEcheance(
      `${prochain.getFullYear()}-${String(prochain.getMonth() + 1).padStart(2, "0")}-05`
    );
  }, []);

  function choisirFormation(slug: string) {
    const f = formations.find((x) => x.slug === slug);
    const v = valeursFormation(f);
    setFormationSlug(slug);
    setDureeSaisie(null);
    setConcours(v.concours);
    setVoieConcours(v.voie);
    setOption("");
    setSpecialite("");
    setOptionSpecialite("");
    setJoursCours(v.joursCours);
    setPrix(v.prix);
    setRemise("0");
    setAcompte(v.acompte);
    setNombreEcheances(v.nombreEcheances);
  }

  // Recherche de contacts, avec un délai pour ne pas appeler GHL à chaque frappe.
  useEffect(() => {
    if (recherche.trim().length < 2) { setResultats([]); setErreurRecherche(null); return; }
    const t = setTimeout(async () => {
      setChargeRecherche(true);
      setErreurRecherche(null);
      try {
        const res = await fetch(`/api/interne/contacts?q=${encodeURIComponent(recherche.trim())}`);
        const body = await res.json().catch(() => ({}));
        if (res.ok) {
          setResultats(body.contacts ?? []);
        } else {
          // Un échec doit se voir : sans ça, une variable d'environnement
          // manquante ressemblerait à « ce candidat n'existe pas » et on
          // créerait des doublons de gens déjà inscrits.
          setResultats([]);
          setErreurRecherche(body.erreur ?? "La recherche a échoué.");
        }
      } catch {
        setResultats([]);
        setErreurRecherche("La recherche n'a pas abouti (réseau).");
      } finally {
        setChargeRecherche(false);
      }
    }, 400);
    return () => clearTimeout(t);
  }, [recherche]);

  const formation = formations.find((f) => f.slug === formationSlug);
  const conv = formation?.convention ?? {};
  const reglementsMax = conv.reglementsMax ?? REGLEMENTS_MAX_DEFAUT;
  const concoursChoisi = conv.concours?.find((c) => c.libelle === concours);
  const avecOptions = !!conv.options?.length && (concoursChoisi ? concoursChoisi.options : true);
  // Les spécialités peuvent dépendre de la voie (agent de maîtrise : concours
  // seulement, et une spécialité réservée au concours interne).
  const specialites = specialitesPour(conv, voieConcours);
  const avecSpecialites = specialites.length > 0;
  const famille = familleVoie(voieConcours);
  const premiereMin = dansNJours(DELAI_RETRACTATION_JOURS + 1);

  const apercu = useMemo(() => {
    try {
      if (!premiereEcheance) return null;
      if (!prix.trim()) throw new Error("Saisissez le prix de la formation (aucun prix catalogue pour celle-ci).");
      const prixCentimes = eurosVersCentimes(prix);
      const remiseCentimes = eurosVersCentimes(remise || "0");
      const conditions = rendreConditionsTarifaires(prixCentimes, remiseCentimes);
      const total = prixCentimes - remiseCentimes;
      const acompteCentimes = eurosVersCentimes(acompte || "0");
      const reglements = nombreEcheances + (acompteCentimes > 0 ? 1 : 0);
      if (reglements > reglementsMax) {
        throw new Error(`Pas plus de ${reglementsMax} règlements, acompte compris, pour cette formation.`);
      }
      if (premiereEcheance < premiereMin) {
        throw new Error("La 1re échéance doit tomber après la fin du délai de rétractation de 10 jours.");
      }
      const [a, m, j] = premiereEcheance.split("-").map(Number);
      const lignes = calculerEcheancier({
        montantTotalCentimes: total,
        acompteCentimes,
        nombreEcheances,
        premiereEcheance: new Date(a, m - 1, j),
      });
      return {
        texte: rendreEcheancierTexte(lignes, total),
        conditions,
        net: total,
        erreur: null as string | null,
      };
    } catch (e) {
      return { texte: "", conditions: "", net: 0, erreur: e instanceof Error ? e.message : "Échéancier incalculable." };
    }
  }, [prix, remise, acompte, nombreEcheances, premiereEcheance, reglementsMax, premiereMin]);

  async function creerCandidat() {
    setEnCreation(true);
    setErreurCreation(null);
    try {
      const res = await fetch("/api/interne/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nouveau),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErreurCreation(body.erreur ?? "Création impossible.");
        return;
      }
      setContact(body.contact);
      setCreation(false);
      setResultats([]);
      // GHL rapproche sur l'e-mail OU le téléphone : une fiche reprise par le
      // téléphone garde son ancien e-mail, et c'est là que la convention partira.
      const saisi = nouveau.email.trim().toLowerCase();
      const fiche = (body.contact.email ?? "").toLowerCase();
      if (!body.nouveau && saisi && fiche !== saisi) {
        setMessage({ type: "ko", texte: `Attention : ${body.contact.nom} existait déjà dans GHL avec l'e-mail ${body.contact.email ?? "(aucun)"}, et non ${nouveau.email.trim()}. La convention partira à l'adresse de la fiche : corrigez-la dans GHL avant l'envoi si elle n'est pas bonne.` });
      } else {
        setMessage(body.nouveau
          ? { type: "ok", texte: `Fiche créée pour ${body.contact.nom}.` }
          : { type: "ok", texte: `${body.contact.nom} existait déjà dans GHL : sa fiche a été reprise, aucun doublon créé.` });
      }
    } finally {
      setEnCreation(false);
    }
  }

  async function enregistrer(envoyer: boolean) {
    if (!contact) return;
    setEnvoi(true);
    setMessage(null);
    setConfirmation(false);
    const res = await fetch("/api/interne/convention", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactId: contact.id, formationSlug, concours, voieConcours,
        option: avecOptions ? option : "", specialite: avecSpecialites ? specialite : "",
        optionSpecialite: avecSpecialites && conv.optionSpecialiteLibre ? optionSpecialite.trim() : "",
        duree, joursCours: joursCours.trim(),
        prix, remise, acompte, nombreEcheances, premiereEcheance, modePaiement,
        envoyer,
      }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setMessage({ type: "ko", texte: body.erreur ?? "Enregistrement impossible." });
    } else if (body.envoyee) {
      setMessage({ type: "ok", texte: `Convention envoyée à signer à ${contact.nom} (${body.email}). Le candidat la reçoit par e-mail dans quelques minutes ; les relances partent automatiquement tant qu'elle n'est pas signée.` });
    } else {
      setMessage({ type: "ok", texte: `Valeurs enregistrées dans la fiche de ${contact.nom}. La convention n'est pas encore envoyée.` });
    }
    setEnvoi(false);
  }

  // La fiche publie souvent une fourchette (« 50 à 70 heures ») : la convention
  // doit porter la durée exacte convenue, donc on la fait confirmer. Quand
  // Evolutia a fixé la durée exacte (grille conventions.ts), elle est reprise.
  const duree = dureeSaisie ?? conv.duree ?? formation?.duree ?? "";
  const dureeEstFourchette = dureeSaisie === null && !conv.duree && / à /.test(duree);
  const choixComplets = (!avecOptions || option.length > 0) && (!avecSpecialites || specialites.includes(specialite));
  const pretAEnvoyer =
    contact && apercu && !apercu.erreur && choixComplets && voieConcours.length > 0 &&
    duree.trim().length > 0 && joursCours.trim().length > 0 && !dureeEstFourchette;

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, sans-serif", padding: "32px 24px", color: "#1a2740" }}>
      <div style={{ maxWidth: 940, margin: "0 auto" }}>
        <h1 style={{ fontSize: 24, color: "#1B3A6B", margin: "0 0 4px 0" }}>Préparer une convention</h1>
        <p style={{ fontSize: 14, color: "#5a6f8f", margin: "0 0 28px 0", lineHeight: 1.6 }}>
          Renseignez les conditions convenues avec le candidat. Les valeurs sont écrites dans sa fiche GHL,
          puis reprises automatiquement par le modèle de convention au moment de l&apos;envoi.
        </p>

        {/* 1. Candidat */}
        <section style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: 24, marginBottom: 18 }}>
          <div style={{ ...label, fontSize: 13, color: "#1B3A6B" }}>1 · Candidat</div>
          {contact ? (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "#EEF5FF", borderRadius: 10, padding: "14px 16px", marginTop: 12 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{contact.nom}</div>
                <div style={{ fontSize: 13, color: "#5a6f8f" }}>
                  {[contact.email, contact.phone].filter(Boolean).join(" · ") || "—"}
                </div>
              </div>
              <button onClick={() => { setContact(null); setRecherche(""); setMessage(null); }}
                style={{ background: "none", border: "1px solid #D6E4F0", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 13 }}>
                Changer
              </button>
            </div>
          ) : (
            <div style={{ marginTop: 12 }}>
              <input value={recherche} onChange={(e) => setRecherche(e.target.value)}
                placeholder="Nom, e-mail ou téléphone" style={champ} autoFocus />
              {chargeRecherche && <p style={{ fontSize: 13, color: "#5a6f8f", margin: "10px 0 0" }}>Recherche…</p>}
              {resultats.map((c) => (
                <button key={c.id} onClick={() => { setContact(c); setResultats([]); }}
                  style={{ display: "block", width: "100%", textAlign: "left", background: "white", border: "1px solid #D6E4F0", borderRadius: 8, padding: "11px 13px", marginTop: 8, cursor: "pointer" }}>
                  <div style={{ fontWeight: 600 }}>{c.nom}</div>
                  <div style={{ fontSize: 13, color: "#5a6f8f" }}>{[c.email, c.phone].filter(Boolean).join(" · ")}</div>
                </button>
              ))}
              {erreurRecherche && (
                <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 10, padding: "13px 15px", marginTop: 10 }}>
                  <div style={{ color: "#b91c1c", fontSize: 13.5, fontWeight: 600 }}>{erreurRecherche}</div>
                  <div style={{ color: "#7f1d1d", fontSize: 12.5, marginTop: 5, lineHeight: 1.55 }}>
                    Tant que la recherche échoue, ne créez pas de candidat : vous risqueriez de dupliquer
                    une fiche existante.
                  </div>
                </div>
              )}

              {!chargeRecherche && !erreurRecherche && recherche.trim().length >= 2 && resultats.length === 0 && !creation && (
                <div style={{ marginTop: 12 }}>
                  <p style={{ fontSize: 13, color: "#5a6f8f", margin: "0 0 10px" }}>
                    Aucun contact trouvé pour « {recherche.trim()} ».
                  </p>
                  <button onClick={() => { setCreation(true); setErreurCreation(null); }}
                    style={{ background: "white", border: "1px solid #1B3A6B", color: "#1B3A6B", borderRadius: 8, padding: "9px 15px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                    Créer ce candidat
                  </button>
                </div>
              )}

              {creation && (
                <div style={{ marginTop: 14, background: "#F8FAFF", border: "1px solid #D6E4F0", borderRadius: 10, padding: 16 }}>
                  <div style={{ ...label, marginBottom: 10 }}>Nouveau candidat</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                    <input value={nouveau.prenom} onChange={(e) => setNouveau({ ...nouveau, prenom: e.target.value })} placeholder="Prénom" style={champ} />
                    <input value={nouveau.nom} onChange={(e) => setNouveau({ ...nouveau, nom: e.target.value })} placeholder="Nom" style={champ} />
                    <input value={nouveau.email} onChange={(e) => setNouveau({ ...nouveau, email: e.target.value })} placeholder="E-mail" type="email" style={champ} />
                    <input value={nouveau.telephone} onChange={(e) => setNouveau({ ...nouveau, telephone: e.target.value })} placeholder="Téléphone" style={champ} />
                  </div>
                  <p style={{ fontSize: 12, color: "#5a6f8f", margin: "10px 0 0", lineHeight: 1.55 }}>
                    L&apos;e-mail ou le téléphone est obligatoire : c&apos;est ce qui permet de rattacher
                    la fiche si le candidat s&apos;est déjà inscrit par le site, au lieu d&apos;en créer une seconde.
                  </p>
                  {erreurCreation && <p style={{ color: "#b91c1c", fontSize: 13, margin: "10px 0 0" }}>{erreurCreation}</p>}
                  <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                    <button onClick={creerCandidat} disabled={enCreation}
                      style={{ background: enCreation ? "#94a3b8" : "#1B3A6B", color: "white", border: "none", borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 700, cursor: enCreation ? "default" : "pointer" }}>
                      {enCreation ? "Création…" : "Créer et continuer"}
                    </button>
                    <button onClick={() => setCreation(false)}
                      style={{ background: "none", border: "1px solid #D6E4F0", borderRadius: 8, padding: "10px 16px", fontSize: 14, cursor: "pointer" }}>
                      Annuler
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 2. Formation */}
        <section style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: 24, marginBottom: 18 }}>
          <div style={{ ...label, fontSize: 13, color: "#1B3A6B" }}>2 · Formation</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 12 }}>
            <div>
              <label style={label}>Formation</label>
              <select value={formationSlug} onChange={(e) => choisirFormation(e.target.value)} style={champ}>
                {formations.map((f) => <option key={f.slug} value={f.slug}>{f.titre}</option>)}
              </select>
              {formation?.session && (
                <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                  {formation.session} — démarrage le {formation.demarrage}
                </p>
              )}
            </div>
            {conv.concours && (
              <div>
                <label style={label}>Concours visé</label>
                <select value={concours} onChange={(e) => { setConcours(e.target.value); setOption(""); }} style={champ}>
                  {conv.concours.map((c) => <option key={c.libelle}>{c.libelle}</option>)}
                </select>
              </div>
            )}
            <div>
              <label style={label}>Voie d&apos;accès</label>
              <select value={voieConcours}
                onChange={(e) => {
                  setVoieConcours(e.target.value);
                  if (!specialitesPour(conv, e.target.value).includes(specialite)) setSpecialite("");
                }}
                style={champ}>
                {(formation?.voies ?? []).map((v) => <option key={v} value={v}>{natureVoie(v)}</option>)}
              </select>
              {voieConcours && (
                <span style={{
                  display: "inline-block", marginTop: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em",
                  textTransform: "uppercase", borderRadius: 100, padding: "3px 10px",
                  background: famille === "Concours" ? "#E6F4FB" : famille === "Examen professionnel" ? "#ECFDF3" : "#F1F5F9",
                  color: famille === "Concours" ? "#1B6A8F" : famille === "Examen professionnel" ? "#166534" : "#475569",
                }}>
                  {famille}
                </span>
              )}
              <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                Ce libellé figure à l&apos;article 1 ; les conditions d&apos;accès de la voie, à l&apos;article 4.
              </p>
            </div>
            {avecOptions && (
              <div>
                <label style={label}>Option choisie</label>
                <select value={option} onChange={(e) => setOption(e.target.value)} style={champ}>
                  <option value="">— Choisir —</option>
                  {conv.options!.map((o) => <option key={o}>{o}</option>)}
                </select>
                <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                  Externe : l&apos;option porte sur l&apos;épreuve de questions. Interne : sur la note.
                </p>
              </div>
            )}
            {avecSpecialites && (
              <div>
                <label style={label}>Spécialité</label>
                <select value={specialite} onChange={(e) => setSpecialite(e.target.value)} style={champ}>
                  <option value="">— Choisir —</option>
                  {specialites.map((sp) => <option key={sp}>{sp}</option>)}
                </select>
              </div>
            )}
            {avecSpecialites && conv.optionSpecialiteLibre && (
              <div>
                <label style={label}>Option de la spécialité</label>
                <input value={optionSpecialite} onChange={(e) => setOptionSpecialite(e.target.value)}
                  placeholder="Ex. plomberie, sanitaire (facultatif)" style={champ} />
                <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                  Les options ouvertes varient selon la session : reprenez celle de l&apos;inscription du candidat.
                </p>
              </div>
            )}
            <div>
              <label style={label}>Durée totale</label>
              <input value={duree} onChange={(e) => setDureeSaisie(e.target.value)}
                placeholder="Ex. 60 heures" style={champ} />
              {dureeEstFourchette && (
                <p style={{ fontSize: 12, color: "#b45309", margin: "6px 0 0" }}>
                  La fiche indique une fourchette : saisissez la durée exacte convenue.
                </p>
              )}
            </div>
            <div>
              <label style={label}>Jours de cours</label>
              <input value={joursCours} onChange={(e) => setJoursCours(e.target.value)}
                placeholder="Ex. les mardis et jeudis de 17 h à 20 h" style={champ} />
            </div>
          </div>
        </section>

        {/* 3. Conditions financières */}
        <section style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: 24, marginBottom: 18 }}>
          <div style={{ ...label, fontSize: 13, color: "#1B3A6B" }}>3 · Conditions financières</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16, marginTop: 12 }}>
            <div>
              <label style={label}>Prix (€)</label>
              <input value={prix} onChange={(e) => setPrix(e.target.value)} style={champ} inputMode="decimal"
                placeholder="Sur devis" />
              <p style={{ fontSize: 12, color: conv.prix === undefined ? "#b45309" : "#5a6f8f", margin: "6px 0 0" }}>
                {conv.prix === undefined ? "Pas de prix catalogue : saisissez le prix convenu." : "Prix catalogue 2026-2027."}
              </p>
            </div>
            <div>
              <label style={label}>Remise commerciale (€)</label>
              <input value={remise} onChange={(e) => setRemise(e.target.value)} style={champ} inputMode="decimal" />
            </div>
            <div>
              <label style={label}>Acompte (€)</label>
              <input value={acompte} onChange={(e) => setAcompte(e.target.value)} style={champ} inputMode="decimal" />
              {apercu && apercu.net > 0 && (
                <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                  30 % au plus, soit {formaterEuros(plafondAcompteCentimes(apercu.net))}.
                </p>
              )}
            </div>
            <div>
              <label style={label}>Échéances après l&apos;acompte</label>
              <select value={nombreEcheances} onChange={(e) => setNombreEcheances(Number(e.target.value))} style={champ}>
                {Array.from({ length: Math.min(10, reglementsMax) }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
              <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                {reglementsMax} règlements au plus, acompte compris.
              </p>
            </div>
            <div>
              <label style={label}>1re échéance</label>
              <input type="date" value={premiereEcheance} min={premiereMin}
                onChange={(e) => setPremiereEcheance(e.target.value)} style={champ} />
            </div>
            <div>
              <label style={label}>Mode de règlement</label>
              <select value={modePaiement} onChange={(e) => setModePaiement(e.target.value)} style={champ}>
                {MODES_PAIEMENT.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={{ ...label, marginBottom: 8 }}>Tel qu&apos;il apparaîtra dans la convention</div>
            {apercu?.erreur ? (
              <p style={{ color: "#b91c1c", fontSize: 14, margin: 0 }}>{apercu.erreur}</p>
            ) : (
              <pre style={{ background: "#F8FAFF", border: "1px solid #D6E4F0", borderRadius: 10, padding: 16, fontSize: 13.5, lineHeight: 1.75, margin: 0, whiteSpace: "pre-wrap", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                {apercu ? `${apercu.conditions}\n\n${apercu.texte}` : ""}
              </pre>
            )}
            <p style={{ fontSize: 12, color: "#5a6f8f", margin: "10px 0 0", lineHeight: 1.6 }}>
              Rien n&apos;est encaissé avant la fin du délai de rétractation de 10 jours ; l&apos;acompte, versé à cette date,
              ne dépasse pas 30 % du prix. Encaissements entre le 1er et le 5 ou entre le 25 et le 31 du mois.
              Aucun chèque de garantie n&apos;est demandé.
            </p>
          </div>
        </section>

        {message && (
          <p style={{ background: message.type === "ok" ? "#ECFDF3" : "#FEF2F2", border: `1px solid ${message.type === "ok" ? "#A7E8C0" : "#FCA5A5"}`, color: message.type === "ok" ? "#166534" : "#b91c1c", borderRadius: 10, padding: "13px 16px", fontSize: 14, margin: "0 0 16px" }}>
            {message.texte}
          </p>
        )}

        {confirmation && contact && apercu && !apercu.erreur && (
          <div style={{ background: "#FFFBEB", border: "1px solid #F5A623", borderRadius: 12, padding: 18, margin: "0 0 16px" }}>
            <div style={{ fontWeight: 700, color: "#1B3A6B", marginBottom: 8 }}>Envoyer la convention à signer ?</div>
            <ul style={{ margin: "0 0 14px", paddingLeft: 18, fontSize: 14, lineHeight: 1.7 }}>
              <li><strong>{contact.nom}</strong> — envoi à <strong>{contact.email ?? "aucun e-mail : l'envoi sera refusé"}</strong></li>
              <li>{concours || formation?.titre} — {natureVoie(voieConcours)}</li>
              {avecSpecialites && specialite && <li>Spécialité : {specialite}{conv.optionSpecialiteLibre && optionSpecialite.trim() ? ` — option ${optionSpecialite.trim()}` : ""}</li>}
              <li>Montant : {formaterEuros(apercu.net)}, acompte {formaterEuros(eurosVersCentimes(acompte || "0"))}, puis {nombreEcheances} échéance(s)</li>
            </ul>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => enregistrer(true)} disabled={envoi}
                style={{ background: "#16a34a", color: "white", border: "none", borderRadius: 8, padding: "11px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                Confirmer l&apos;envoi
              </button>
              <button onClick={() => setConfirmation(false)}
                style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 8, padding: "11px 18px", fontSize: 14, cursor: "pointer" }}>
                Revenir au formulaire
              </button>
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => setConfirmation(true)} disabled={!pretAEnvoyer || envoi || confirmation}
            style={{ background: pretAEnvoyer && !envoi && !confirmation ? "#1B3A6B" : "#94a3b8", color: "white", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: pretAEnvoyer && !envoi && !confirmation ? "pointer" : "default" }}>
            {envoi ? "Envoi…" : "Enregistrer et envoyer la convention"}
          </button>
          <button onClick={() => enregistrer(false)} disabled={!pretAEnvoyer || envoi}
            style={{ background: "white", color: pretAEnvoyer && !envoi ? "#1B3A6B" : "#94a3b8", border: `1px solid ${pretAEnvoyer && !envoi ? "#1B3A6B" : "#D6E4F0"}`, borderRadius: 10, padding: "14px 22px", fontSize: 15, fontWeight: 600, cursor: pretAEnvoyer && !envoi ? "pointer" : "default" }}>
            Enregistrer sans envoyer
          </button>
        </div>
        {!contact && <p style={{ fontSize: 13, color: "#5a6f8f", marginTop: 10 }}>Sélectionnez d&apos;abord un candidat.</p>}
        {contact && !pretAEnvoyer && !apercu?.erreur && <p style={{ fontSize: 13, color: "#5a6f8f", marginTop: 10 }}>Renseignez l&apos;option ou la spécialité, la durée exacte et les jours de cours.</p>}
      </div>
    </div>
  );
}