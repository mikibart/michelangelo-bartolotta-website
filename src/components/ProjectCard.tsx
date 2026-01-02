import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/progetti/${project.slug}`} className="group block">
      <article className="overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="pt-4">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            {project.category} &middot; {project.year}
          </p>
          <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
            {project.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
