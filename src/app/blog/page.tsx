import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/mdx';
import { Article } from '@/lib/types';

// Demo data - used when no MDX files exist
const demoArticles: Article[] = [
  {
    slug: 'architettura-sostenibile-2024',
    title: 'Architettura Sostenibile: Tendenze 2024',
    excerpt: 'Esploriamo le nuove frontiere dell\'architettura green e le tecnologie che stanno rivoluzionando il settore.',
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    author: 'Marco Rossi',
    date: '2024-03-01',
    category: 'Sostenibilità',
    tags: ['green', 'sostenibilità', 'innovazione'],
  },
  {
    slug: 'minimalismo-giapponese',
    title: 'Il Minimalismo Giapponese nell\'Architettura Moderna',
    excerpt: 'Come la filosofia giapponese sta influenzando l\'architettura contemporanea occidentale.',
    coverImage: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&q=80',
    author: 'Giulia Bianchi',
    date: '2024-02-20',
    category: 'Design',
    tags: ['minimalismo', 'giappone', 'design'],
  },
  {
    slug: 'restauro-edifici-storici',
    title: 'Restauro e Innovazione: Nuova Vita agli Edifici Storici',
    excerpt: 'Progetti di recupero che uniscono rispetto per la storia e visione contemporanea.',
    coverImage: 'https://images.unsplash.com/photo-1555443805-658637491dd4?w=800&q=80',
    author: 'Andrea Verdi',
    date: '2024-02-15',
    category: 'Restauro',
    tags: ['restauro', 'heritage', 'conservazione'],
  },
  {
    slug: 'materiali-innovativi',
    title: 'I Materiali del Futuro: Dall\'idea alla Realizzazione',
    excerpt: 'Nuovi materiali stanno cambiando le possibilità dell\'architettura contemporanea.',
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    author: 'Laura Ferrari',
    date: '2024-02-01',
    category: 'Innovazione',
    tags: ['materiali', 'tecnologia', 'innovazione'],
  },
  {
    slug: 'architettura-sociale',
    title: 'Architettura Sociale: Progettare per le Comunità',
    excerpt: 'Come l\'architettura può contribuire al benessere delle comunità e alla coesione sociale.',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    author: 'Paolo Neri',
    date: '2024-01-25',
    category: 'Sociale',
    tags: ['sociale', 'comunità', 'urbanistica'],
  },
  {
    slug: 'luce-naturale-architettura',
    title: 'La Luce Naturale come Elemento Progettuale',
    excerpt: 'L\'importanza della luce naturale nella progettazione degli spazi abitativi.',
    coverImage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80',
    author: 'Marco Rossi',
    date: '2024-01-15',
    category: 'Design',
    tags: ['luce', 'design', 'interni'],
  },
];

export const metadata = {
  title: 'Blog | ArchiMag',
  description: 'Articoli, interviste e approfondimenti sul mondo dell\'architettura.',
};

export default function BlogPage() {
  // Try to get articles from MDX, fall back to demo data
  let articles = getAllArticles();
  if (articles.length === 0) {
    articles = demoArticles;
  }

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  const categories = ['Tutti', ...Array.from(new Set(articles.map((a) => a.category)))];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-semibold text-neutral-900">
            Blog
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Articoli, interviste e approfondimenti sul mondo dell&apos;architettura e del design contemporaneo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors first:bg-neutral-900 first:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <ArticleCard article={featuredArticle} featured />
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {otherArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
