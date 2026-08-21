"use client";

import { useState } from "react";

export default function Connexion() {
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoi, setEnvoi] = useState(false);

  async function soumettre(e: React.FormEvent) {
    e.preventDefault();
    setEnvoi(true);
    setErreur(null);
    const res = await fetch("/api/interne/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ motDePasse }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      const { erreur } = await res.json().catch(() => ({ erreur: "Connexion impossible." }));
      setErreur(erreur);
      setEnvoi(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeContent: "center", background: "#F8FAFF", fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <form onSubmit={soumettre} style={{ background: "white", border: "1px solid #D6E4F0", borderRadius: 14, padding: 32, width: "min(380px, 90vw)" }}>
        <h1 style={{ fontSize: 20, color: "#1B3A6B", margin: "0 0 6px 0" }}>Espace interne</h1>
        <p style={{ fontSize: 14, color: "#5a6f8f", margin: "0 0 20px 0", lineHeight: 1.5 }}>
          Préparation des conventions de formation.
        </p>
        <input
          type="password"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          placeholder="Mot de passe"
          autoFocus
          style={{ width: "100%", padding: "11px 13px", border: "1px solid #D6E4F0", borderRadius: 8, fontSize: 15, marginBottom: 12 }}
        />
        {erreur && <p style={{ color: "#b91c1c", fontSize: 13, margin: "0 0 12px" }}>{erreur}</p>}
        <button
          type="submit"
          disabled={envoi || !motDePasse}
          style={{ width: "100%", padding: "11px", background: envoi ? "#94a3b8" : "#1B3A6B", color: "white", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: envoi ? "default" : "pointer" }}
        >
          {envoi ? "Vérification…" : "Entrer"}
        </button>
      </form>
    </div>
  );
}
