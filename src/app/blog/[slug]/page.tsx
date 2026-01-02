import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Article } from '@/lib/types';

// Demo articles for fallback
const demoArticles: Record<string, { article: Article; content: string }> = {
  'architettura-sostenibile-2024': {
    article: {
      slug: 'architettura-sostenibile-2024',
      title: 'Architettura Sostenibile: Tendenze 2024',
      excerpt: 'Esploriamo le nuove frontiere dell\'architettura green e le tecnologie che stanno rivoluzionando il settore.',
      coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
      author: 'Marco Rossi',
      date: '2024-03-01',
      category: 'Sostenibilità',
      tags: ['green', 'sostenibilità', 'innovazione'],
    },
    content: `
## L'Era dell'Architettura Verde

Il 2024 segna un punto di svolta per l'architettura sostenibile. Non si tratta più di una nicchia per idealisti, ma di una necessità imprescindibile che sta ridefinendo l'intero settore delle costruzioni.

## Materiali Bio-based

I materiali derivati da fonti biologiche stanno guadagnando terreno. Dal legno lamellare cross-laminated (CLT) ai mattoni di micelio, le alternative al cemento tradizionale non sono mai state così numerose e performanti.

> "L'architettura del futuro non sarà solo verde in superficie, ma sostenibile nel suo DNA stesso." - Renzo Piano

## Energia Positiva

Gli edifici a energia positiva, che producono più energia di quella che consumano, stanno diventando lo standard di riferimento per le nuove costruzioni. Pannelli fotovoltaici integrati, sistemi di recupero del calore e isolamento avanzato sono elementi ormai imprescindibili.

## Il Ruolo della Digitalizzazione

Il BIM (Building Information Modeling) e l'intelligenza artificiale stanno rivoluzionando la fase progettuale, permettendo di ottimizzare le prestazioni energetiche ancora prima della costruzione.

## Conclusioni

L'architettura sostenibile non è più un'opzione, ma una responsabilità. Gli architetti di oggi hanno gli strumenti per costruire un futuro migliore, e il 2024 è l'anno in cui questa consapevolezza diventa azione concreta.
    `,
  },
  'minimalismo-giapponese': {
    article: {
      slug: 'minimalismo-giapponese',
      title: 'Il Minimalismo Giapponese nell\'Architettura Moderna',
      excerpt: 'Come la filosofia giapponese sta influenzando l\'architettura contemporanea occidentale.',
      coverImage: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&q=80',
      author: 'Giulia Bianchi',
      date: '2024-02-20',
      category: 'Design',
      tags: ['minimalismo', 'giappone', 'design'],
    },
    content: `
## Ma: Lo Spazio Negativo

Il concetto giapponese di "Ma" - lo spazio vuoto tra gli oggetti - sta influenzando profondamente l'architettura occidentale. Non si tratta semplicemente di minimalismo, ma di una filosofia che attribuisce valore allo spazio non occupato.

## Wabi-Sabi nell'Architettura

L'estetica del wabi-sabi, che celebra l'imperfezione e l'impermanenza, trova espressione in materiali naturali lasciati invecchiare, superfici non finite e forme organiche.

## Luce e Ombra

Gli architetti giapponesi sono maestri nel manipolare la luce naturale. Shoji screens, lucernari strategici e aperture calibrate creano un dialogo continuo tra interno ed esterno.

## Architetti da Seguire

- **Tadao Ando**: maestro del cemento armato e della luce
- **Kengo Kuma**: fusione di tradizione e innovazione
- **SANAA**: trasparenza e leggerezza
- **Shigeru Ban**: architettura umanitaria e sostenibile

## Applicazioni Contemporanee

Queste filosofie stanno trovando applicazione anche in contesti non residenziali: uffici, musei e spazi commerciali stanno abbracciando un approccio più contemplativo alla progettazione.
    `,
  },
  'restauro-edifici-storici': {
    article: {
      slug: 'restauro-edifici-storici',
      title: 'Restauro e Innovazione: Nuova Vita agli Edifici Storici',
      excerpt: 'Progetti di recupero che uniscono rispetto per la storia e visione contemporanea.',
      coverImage: 'https://images.unsplash.com/photo-1555443805-658637491dd4?w=1200&q=80',
      author: 'Andrea Verdi',
      date: '2024-02-15',
      category: 'Restauro',
      tags: ['restauro', 'heritage', 'conservazione'],
    },
    content: `
## Il Dialogo tra Epoche

Il restauro contemporaneo non si limita più alla conservazione passiva. I migliori progetti di recupero creano un dialogo tra l'esistente e il nuovo, dove ogni epoca racconta la propria storia.

## Casi Studio

### Fondazione Prada, Milano
L'intervento di OMA ha trasformato un'ex distilleria in uno dei più importanti spazi espositivi d'Europa, affiancando edifici storici a nuove strutture in modo sorprendentemente armonioso.

### Tate Modern, Londra
La centrale elettrica di Bankside, convertita da Herzog & de Meuron, è diventata un modello globale per la riconversione di edifici industriali in spazi culturali.

## Tecnologie per il Restauro

Le nuove tecnologie stanno rivoluzionando il settore:
- Scanning 3D per documentazione accurata
- Materiali compositi per rinforzi strutturali
- Monitoraggio IoT per la conservazione preventiva

## Sfide e Opportunità

Il patrimonio edilizio europeo rappresenta sia una sfida che un'opportunità. Il recupero di edifici esistenti è spesso più sostenibile di nuove costruzioni, oltre a preservare il tessuto storico delle nostre città.
    `,
  },
};

export async function generateStaticParams() {
  const mdxArticles = getAllArticles();
  const mdxParams = mdxArticles.map((article) => ({
    slug: article.slug,
  }));

  const demoParams = Object.keys(demoArticles).map((slug) => ({ slug }));

  return [...mdxParams, ...demoParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mdxData = getArticleBySlug(slug);
  const data = mdxData || demoArticles[slug];

  if (!data) {
    return { title: 'Articolo non trovato' };
  }

  return {
    title: `${data.article.title} | ArchiMag`,
    description: data.article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mdxData = getArticleBySlug(slug);
  const data = mdxData || demoArticles[slug];

  if (!data) {
    notFound();
  }

  const { article, content } = data;

  return (
    <article className="py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 mb-8"
        >
          &larr; Tutti gli articoli
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {article.category} &middot; {new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-neutral-600">
            {article.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-200" />
            <div>
              <p className="font-medium text-neutral-900">{article.author}</p>
              <p className="text-sm text-neutral-500">Autore</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] mb-12 bg-neutral-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <MDXRemote source={content} />
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
