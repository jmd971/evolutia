import { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales — Evolutia Formation',
  description: 'Mentions légales du site evolutiaformation.fr — Evolutia, organisme de formation concours territoriaux en Guadeloupe.',
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen" style={{ background: '#F8FAFF' }}>
      {/* Nav */}
      <NavBar activeHref="/mentions-legales" />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#1B3A6B' }}>
          Mentions légales
        </h1>
        <p className="text-sm mb-10" style={{ color: '#5a6f8f' }}>Dernière mise à jour : mai 2026</p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: '#1a2740' }}>

          <section>
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#1B3A6B' }}>1. Éditeur du site</h2>
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: '#D6E4F0' }}>
              <table className="w-full text-sm">
                <tbody className="divide-y" style={{ borderColor: '#D6E4F0' }}>
                  {[
                    ['Dénomination sociale', 'EVOLUTIA'],
                    ['Forme juridique', 'SAS — Société par actions simplifiée'],
                    ['Capital social', '1 000 € (capital fixe)'],
                    ['Date de création', '1er avril 2024'],
                    ['SIREN', '927 489 690'],
                    ['SIRET (siège)', '927 489 690 00010'],
                    ['N° TVA intracommunautaire', 'FR26 927 489 690'],
                    ['Code NAF / APE', '85.59A — Formation continue d\'adultes'],
                    ['Convention collective', 'IDCC 1516 — Formation professionnelle'],
                    ['Qualité', 'Organisme de formation'],
                    ['Adresse', 'Immeuble ASP, Grand-Camp, 97139 Les Abymes, Guadeloupe'],
                    ['Téléphone', '0690 44 73 60'],
                    ['Email', 'contact@evolutiaformation.fr'],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="py-2 pr-4 font-medium w-52" style={{ color: '#5a6f8f' }}>{label}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de la société EVOLUTIA.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>3. Hébergement</h2>
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis.
              Site : <a href="https://vercel.com" className="underline" style={{ color: '#4BADD4' }}>vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive
              d'EVOLUTIA ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable
              est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>5. Données personnelles</h2>
            <p>
              Les informations collectées via les formulaires de ce site sont traitées conformément au Règlement Général sur
              la Protection des Données (RGPD). Pour en savoir plus, consultez notre{' '}
              <Link href="/politique-confidentialite" className="underline" style={{ color: '#4BADD4' }}>
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>6. Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de traçage
              ou publicitaire n'est déposé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>7. Limitation de responsabilité</h2>
            <p>
              EVOLUTIA s'efforce d'assurer l'exactitude des informations publiées sur ce site. Cependant, elle ne peut
              garantir l'exhaustivité ni l'absence d'erreurs. Les informations relatives aux concours (dates, programmes,
              conditions d'inscription) sont données à titre indicatif et peuvent évoluer. Nous vous recommandons de
              consulter les sources officielles (CNFPT, CDG 971, FPT.fr) pour toute décision.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation de ce site
              relève de la compétence exclusive des tribunaux compétents de Guadeloupe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: '#1B3A6B' }}>9. Contact</h2>
            <p>
              Pour toute question relative au site ou à vos données personnelles, vous pouvez nous contacter à :{' '}
              <a href="mailto:contact@evolutiaformation.fr" className="underline" style={{ color: '#4BADD4' }}>
                contact@evolutiaformation.fr
              </a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t flex gap-4 text-sm" style={{ borderColor: '#D6E4F0', color: '#5a6f8f' }}>
          <Link href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</Link>
          <Link href="/cgv" className="hover:underline">CGV</Link>
          <Link href="/" className="hover:underline">Retour à l'accueil</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
