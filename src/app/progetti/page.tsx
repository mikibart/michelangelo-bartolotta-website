import ProjectCard from '@/components/ProjectCard';
import { getAllProjects, getProjectCategories } from '@/lib/mdx';
import { Project } from '@/lib/types';

// Demo data - used when no MDX files exist
const demoProjects: Project[] = [
  {
    slug: 'casa-sul-lago',
    title: 'Casa sul Lago',
    excerpt: 'Una residenza contemporanea che si integra perfettamente con il paesaggio lacustre, giocando con trasparenze e riflessi.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [],
    category: 'Residenziale',
    year: '2024',
    location: 'Como, Italia',
    date: '2024-01-15',
  },
  {
    slug: 'centro-culturale-milano',
    title: 'Centro Culturale Milano',
    excerpt: 'Spazio polifunzionale dedicato all\'arte e alla cultura nel cuore della città.',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    images: [],
    category: 'Culturale',
    year: '2023',
    location: 'Milano, Italia',
    date: '2023-09-20',
  },
  {
    slug: 'torre-verde',
    title: 'Torre Verde',
    excerpt: 'Edificio per uffici con facciata verde e sistemi di sostenibilità all\'avanguardia.',
    coverImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    images: [],
    category: 'Commerciale',
    year: '2024',
    location: 'Torino, Italia',
    date: '2024-02-10',
  },
  {
    slug: 'villa-mediterranea',
    title: 'Villa Mediterranea',
    excerpt: 'Reinterpretazione contemporanea dell\'architettura mediterranea tradizionale.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    images: [],
    category: 'Residenziale',
    year: '2023',
    location: 'Puglia, Italia',
    date: '2023-07-05',
  },
  {
    slug: 'museo-arte-contemporanea',
    title: 'Museo d\'Arte Contemporanea',
    excerpt: 'Un contenitore neutro che lascia parlare le opere d\'arte.',
    coverImage: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80',
    images: [],
    category: 'Culturale',
    year: '2022',
    location: 'Roma, Italia',
    date: '2022-11-30',
  },
  {
    slug: 'loft-industriale',
    title: 'Loft Industriale',
    excerpt: 'Recupero di un ex stabilimento industriale trasformato in residenza contemporanea.',
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    images: [],
    category: 'Residenziale',
    year: '2023',
    location: 'Bologna, Italia',
    date: '2023-04-18',
  },
];

export const metadata = {
  title: 'Progetti | ArchiMag',
  description: 'Esplora i nostri progetti di architettura contemporanea.',
};

export default function ProgettiPage() {
  // Try to get projects from MDX, fall back to demo data
  let projects = getAllProjects();
  if (projects.length === 0) {
    projects = demoProjects;
  }

  const categories = ['Tutti', ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl font-semibold text-neutral-900">
            Progetti
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Una selezione dei nostri lavori più significativi nel campo dell&apos;architettura e del design.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
