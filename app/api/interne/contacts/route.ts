import { NextResponse } from "next/server";
import { estAuthentifie } from "../../../../lib/interne/auth";
import { searchContacts } from "../../../../lib/ghl/client";

export async function GET(req: Request) {
  if (!(await estAuthentifie())) {
    return NextResponse.json({ erreur: "Non authentifié." }, { status: 401 });
  }

  const query = new URL(req.url).searchParams.get("q")?.trim() ?? "";
  if (query.length < 2) {
    return NextResponse.json({ contacts: [] });
  }

  try {
    return NextResponse.json({ contacts: await searchContacts(query) });
  } catch (e) {
    console.error("[interne/contacts]", e);
    return NextResponse.json(
      { erreur: e instanceof Error ? e.message : "Recherche impossible." },
      { status: 502 }
    );
  }
}
