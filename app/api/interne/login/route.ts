import { NextResponse } from "next/server";
import { motDePasseValide, jeton, NOM_COOKIE } from "../../../../lib/interne/auth";

export async function POST(req: Request) {
  let motDePasse = "";
  try {
    ({ motDePasse } = await req.json());
  } catch {
    return NextResponse.json({ erreur: "Requête illisible." }, { status: 400 });
  }

  if (!motDePasse || !motDePasseValide(motDePasse)) {
    // Petit délai pour décourager le bruteforce sur une route publique.
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ erreur: "Mot de passe incorrect." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(NOM_COOKIE, jeton(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // une journée de travail
  });
  return res;
}
