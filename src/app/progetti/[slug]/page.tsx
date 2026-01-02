import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Project } from '@/lib/types';

// Demo projects for fallback
const demoProjects: Record<string, { project: Project; content: string }> = {
  'casa-sul-lago': {
    project: {
      slug: 'casa-sul-lago',
      title: 'Casa sul Lago',
      excerpt: 'Una residenza contemporanea che si integra perfettamente con il paesaggio lacustre.',
      coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      ],
      category: 'Residenziale',
      year: '2024',
      location: 'Como, Italia',
      client: 'Privato',
      date: '2024-01-15',
    },
    content: `
## Il Progetto

Casa sul Lago nasce dalla volontà di creare un dialogo costante tra architettura e natura. La residenza si sviluppa su tre livelli, sfruttando il dislivello naturale del terreno per integrarsi armoniosamente nel paesaggio.

## Concept

Il concept progettuale si basa sulla trasparenza: ampie vetrate incorniciano il panorama lacustre, trasformandolo in un quadro vivente che cambia con le stagioni. I materiali scelti - pietra locale, legno e vetro - richiamano gli elementi naturali circostanti.

## Sostenibilità

L'edificio incorpora sistemi di efficienza energetica all'avanguardia, tra cui pannelli solari integrati nella copertura, recupero delle acque piovane e un sistema di riscaldamento geotermico.
    `,
  },
  'centro-culturale-milano': {
    project: {
      slug: 'centro-culturale-milano',
      title: 'Centro Culturale Milano',
      excerpt: 'Spazio polifunzionale dedicato all\'arte e alla cultura nel cuore della città.',
      coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      ],
      category: 'Culturale',
      year: '2023',
      location: 'Milano, Italia',
      client: 'Comune di Milano',
      date: '2023-09-20',
    },
    content: `
## Il Progetto

Il Centro Culturale Milano è un intervento di rigenerazione urbana che ha trasformato un'area industriale dismessa in un polo culturale dinamico.

## Spazi

Il complesso ospita una biblioteca, sale espositive, un auditorium da 500 posti e spazi per workshop e laboratori creativi. La piazza coperta centrale funge da connettore tra le diverse funzioni.

## Materiali

La struttura in acciaio e vetro dialoga con i volumi in mattone recuperati dall'edificio industriale preesistente, creando un contrasto ricco di significato tra passato e presente.
    `,
  },
  'torre-verde': {
    project: {
      slug: 'torre-verde',
      title: 'Torre Verde',
      excerpt: 'Edificio per uffici con facciata verde e sistemi di sostenibilità all\'avanguardia.',
      coverImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      ],
      category: 'Commerciale',
      year: '2024',
      location: 'Torino, Italia',
      client: 'GreenTech Corp',
      date: '2024-02-10',
    },
    content: `
## Il Progetto

Torre Verde rappresenta una nuova generazione di edifici per uffici dove la sostenibilità non è un optional ma il principio fondante del progetto.

## Facciata Verde

La facciata è caratterizzata da un sistema di verde verticale che copre oltre il 60% della superficie esterna, contribuendo alla riduzione dell'effetto isola di calore urbana e migliorando la qualità dell'aria circostante.

## Certificazioni

L'edificio ha ottenuto la certificazione LEED Platinum e WELL Gold, posizionandosi tra i più sostenibili d'Europa.
    `,
  },
};

export async function generateStaticParams() {
  const mdxProjects = getAllProjects();
  const mdxParams = mdxProjects.map((project) => ({
    slug: project.slug,
  }));

  const demoParams = Object.keys(demoProjects).map((slug) => ({ slug }));

  return [...mdxParams, ...demoParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mdxData = getProjectBySlug(slug);
  const data = mdxData || demoProjects[slug];

  if (!data) {
    return { title: 'Progetto non trovato' };
  }

  return {
    title: `${data.project.title} | ArchiMag`,
    description: data.project.excerpt,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mdxData = getProjectBySlug(slug);
  const data = mdxData || demoProjects[slug];

  if (!data) {
    notFound();
  }

  const { project, content } = data;

  return (
    <article className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/progetti"
          className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 mb-8"
        >
          &larr; Tutti i progetti
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
            {project.category} &middot; {project.year}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            {project.excerpt}
          </p>
        </header>

        {/* Cover Image */}
        <div className="relative aspect-[21/9] mb-12 bg-neutral-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Location
                </dt>
                <dd className="text-neutral-900">{project.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Anno
                </dt>
                <dd className="text-neutral-900">{project.year}</dd>
              </div>
              {project.client && (
                <div>
                  <dt className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                    Cliente
                  </dt>
                  <dd className="text-neutral-900">{project.client}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Categoria
                </dt>
                <dd className="text-neutral-900">{project.category}</dd>
              </div>
            </dl>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 prose">
            <MDXRemote source={content} />
          </div>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              Galleria
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] bg-neutral-100">
                  <Image
                    src={image}
                    alt={`${project.title} - Immagine ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
