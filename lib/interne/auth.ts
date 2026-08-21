import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE = "evolutia_interne";

function secret(): string {
  const s = process.env.INTERNE_PASSWORD;
  if (!s) throw new Error("INTERNE_PASSWORD manquant : la page interne est inaccessible tant qu'il n'est pas défini.");
  return s;
}

/** Jeton dérivé du mot de passe : le mot de passe lui-même ne transite jamais en cookie. */
export function jeton(): string {
  return createHmac("sha256", secret()).update("evolutia-interne-v1").digest("hex");
}

export function motDePasseValide(saisie: string): boolean {
  const attendu = Buffer.from(secret());
  const recu = Buffer.from(saisie);
  // timingSafeEqual exige des longueurs égales : on compare d'abord la taille,
  // ce qui fuite la longueur mais pas le contenu.
  if (attendu.length !== recu.length) return false;
  return timingSafeEqual(attendu, recu);
}

export async function estAuthentifie(): Promise<boolean> {
  const c = await cookies();
  return c.get(COOKIE)?.value === jeton();
}

export const NOM_COOKIE = COOKIE;
