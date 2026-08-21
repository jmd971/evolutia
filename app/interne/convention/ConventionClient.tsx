"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculerEcheancier,
  rendreEcheancierTexte,
  eurosVersCentimes,
} from "../../../lib/echeancier";

type Formation = { slug: string; titre: string; session: string | null; demarrage: string | null };
type Contact = { id: string; nom: string; email: string | null; phone: string | null };

const VOIES = ["Externe", "Interne", "3e voie"];
const MODES_PAIEMENT = ["Chèque", "Virement", "Espèces", "Carte bancaire", "Prélèvement SEPA"];

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

  const [formationSlug, setFormationSlug] = useState(formations[0]?.slug ?? "");
  const [voieConcours, setVoieConcours] = useState(VOIES[0]);
  const [specialite, setSpecialite] = useState("");
  const [montant, setMontant] = useState("1900");
  const [acompte, setAcompte] = useState("400");
  const [nombreEcheances, setNombreEcheances] = useState(10);
  const [premiereEcheance, setPremiereEcheance] = useState("");
  const [modePaiement, setModePaiement] = useState(MODES_PAIEMENT[0]);

  const [envoi, setEnvoi] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "ko"; texte: string } | null>(null);

  // Par défaut : le 5 du mois prochain, une date d'encaissement conforme à
  // l'article 11 (« entre le 1 et le 5 de chaque mois »).
  useEffect(() => {
    const d = new Date();
    const prochain = new Date(d.getFullYear(), d.getMonth() + 1, 5);
    setPremiereEcheance(prochain.toISOString().slice(0, 10));
  }, []);

  // Recherche de contacts, avec un délai pour ne pas appeler GHL à chaque frappe.
  useEffect(() => {
    if (recherche.trim().length < 2) { setResultats([]); return; }
    const t = setTimeout(async () => {
      setChargeRecherche(true);
      try {
        const res = await fetch(`/api/interne/contacts?q=${encodeURIComponent(recherche.trim())}`);
        const body = await res.json();
        setResultats(res.ok ? body.contacts : []);
      } finally {
        setChargeRecherche(false);
      }
    }, 400);
    return () => clearTimeout(t);
  }, [recherche]);

  const apercu = useMemo(() => {
    try {
      if (!premiereEcheance) return null;
      const total = eurosVersCentimes(montant);
      const [a, m, j] = premiereEcheance.split("-").map(Number);
      const lignes = calculerEcheancier({
        montantTotalCentimes: total,
        acompteCentimes: eurosVersCentimes(acompte || "0"),
        nombreEcheances,
        premiereEcheance: new Date(a, m - 1, j),
      });
      return { texte: rendreEcheancierTexte(lignes, total), erreur: null as string | null };
    } catch (e) {
      return { texte: "", erreur: e instanceof Error ? e.message : "Échéancier incalculable." };
    }
  }, [montant, acompte, nombreEcheances, premiereEcheance]);

  async function enregistrer() {
    if (!contact) return;
    setEnvoi(true);
    setMessage(null);
    const res = await fetch("/api/interne/convention", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactId: contact.id, formationSlug, voieConcours, specialite,
        montant, acompte, nombreEcheances, premiereEcheance, modePaiement,
      }),
    });
    const body = await res.json().catch(() => ({}));
    setMessage(res.ok
      ? { type: "ok", texte: `Fiche de ${contact.nom} mise à jour dans GHL. Vous pouvez envoyer la convention à signer.` }
      : { type: "ko", texte: body.erreur ?? "Enregistrement impossible." });
    setEnvoi(false);
  }

  const formation = formations.find((f) => f.slug === formationSlug);
  const pretAEnvoyer = contact && !apercu?.erreur && specialite.trim().length > 0;

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
              {!chargeRecherche && recherche.trim().length >= 2 && resultats.length === 0 && (
                <p style={{ fontSize: 13, color: "#5a6f8f", margin: "10px 0 0" }}>Aucun contact trouvé.</p>
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
              <select value={formationSlug} onChange={(e) => setFormationSlug(e.target.value)} style={champ}>
                {formations.map((f) => <option key={f.slug} value={f.slug}>{f.titre}</option>)}
              </select>
              {formation?.session && (
                <p style={{ fontSize: 12, color: "#5a6f8f", margin: "6px 0 0" }}>
                  {formation.session} — démarrage le {formation.demarrage}
                </p>
              )}
            </div>
            <div>
              <label style={label}>Voie du concours</label>
              <select value={voieConcours} onChange={(e) => setVoieConcours(e.target.value)} style={champ}>
                {VOIES.map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label style={label}>Spécialité</label>
              <input value={specialite} onChange={(e) => setSpecialite(e.target.value)}
                placeholder="Ex. Infrastructures et réseaux — option VRD" style={champ} />
            </div>
          </div>
        </section>

        {/* 3. Conditions financières */}
        <section style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: 24, marginBottom: 18 }}>
          <div style={{ ...label, fontSize: 13, color: "#1B3A6B" }}>3 · Conditions financières</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 12 }}>
            <div>
              <label style={label}>Montant total (€)</label>
              <input value={montant} onChange={(e) => setMontant(e.target.value)} style={champ} inputMode="decimal" />
            </div>
            <div>
              <label style={label}>Acompte (€)</label>
              <input value={acompte} onChange={(e) => setAcompte(e.target.value)} style={champ} inputMode="decimal" />
            </div>
            <div>
              <label style={label}>Nombre d&apos;échéances</label>
              <select value={nombreEcheances} onChange={(e) => setNombreEcheances(Number(e.target.value))} style={champ}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label style={label}>1re échéance</label>
              <input type="date" value={premiereEcheance} onChange={(e) => setPremiereEcheance(e.target.value)} style={champ} />
            </div>
            <div>
              <label style={label}>Mode de règlement</label>
              <select value={modePaiement} onChange={(e) => setModePaiement(e.target.value)} style={champ}>
                {MODES_PAIEMENT.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={{ ...label, marginBottom: 8 }}>Échéancier tel qu&apos;il apparaîtra dans la convention</div>
            {apercu?.erreur ? (
              <p style={{ color: "#b91c1c", fontSize: 14, margin: 0 }}>{apercu.erreur}</p>
            ) : (
              <pre style={{ background: "#F8FAFF", border: "1px solid #D6E4F0", borderRadius: 10, padding: 16, fontSize: 13.5, lineHeight: 1.75, margin: 0, whiteSpace: "pre-wrap", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                {apercu?.texte}
              </pre>
            )}
            <p style={{ fontSize: 12, color: "#5a6f8f", margin: "10px 0 0", lineHeight: 1.6 }}>
              Article 11 de la convention : jusqu&apos;à 10 règlements, encaissements entre le 1er et le 5
              ou entre le 25 et le 31 du mois. Les chèques sont remis à l&apos;inscription et déposés au dossier sans être encaissés.
            </p>
          </div>
        </section>

        {message && (
          <p style={{ background: message.type === "ok" ? "#ECFDF3" : "#FEF2F2", border: `1px solid ${message.type === "ok" ? "#A7E8C0" : "#FCA5A5"}`, color: message.type === "ok" ? "#166534" : "#b91c1c", borderRadius: 10, padding: "13px 16px", fontSize: 14, margin: "0 0 16px" }}>
            {message.texte}
          </p>
        )}

        <button onClick={enregistrer} disabled={!pretAEnvoyer || envoi}
          style={{ background: pretAEnvoyer && !envoi ? "#1B3A6B" : "#94a3b8", color: "white", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: pretAEnvoyer && !envoi ? "pointer" : "default" }}>
          {envoi ? "Enregistrement…" : "Enregistrer dans la fiche GHL"}
        </button>
        {!contact && <p style={{ fontSize: 13, color: "#5a6f8f", marginTop: 10 }}>Sélectionnez d&apos;abord un candidat.</p>}
        {contact && !specialite.trim() && <p style={{ fontSize: 13, color: "#5a6f8f", marginTop: 10 }}>Renseignez la spécialité du concours.</p>}
      </div>
    </div>
  );
}
