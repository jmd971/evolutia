import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE = "evolutia_interne";

/**
 * Renvoie null plutôt que de lever si la variable manque : sans ça, une
 * variable d'environnement oubliée transforme /interne/convention en erreur 500
 * illisible au lieu d'un message expliquant quoi configurer.
 */
export function secretOuNull(): string | null {
  return process.env.INTERNE_PASSWORD || null;
}

export function estConfigure(): boolean {
  return secretOuNull() !== null;
}

/** Jeton dérivé du mot de passe : le mot de passe lui-même ne transite jamais en cookie. */
function jeton(secret: string): string {
  return createHmac("sha256", secret).update("evolutia-interne-v1").digest("hex");
}

export function jetonCourant(): string | null {
  const s = secretOuNull();
  return s ? jeton(s) : null;
}

export function motDePasseValide(saisie: string): boolean {
  const s = secretOuNull();
  if (!s) return false;
  const attendu = Buffer.from(s);
  const recu = Buffer.from(saisie);
  // timingSafeEqual exige des longueurs égales : on compare d'abord la taille,
  // ce qui fuite la longueur mais pas le contenu.
  if (attendu.length !== recu.length) return false;
  return timingSafeEqual(attendu, recu);
}

export async function estAuthentifie(): Promise<boolean> {
  const attendu = jetonCourant();
  if (!attendu) return false;
  const c = await cookies();
  return c.get(COOKIE)?.value === attendu;
}

export const NOM_COOKIE = COOKIE;
