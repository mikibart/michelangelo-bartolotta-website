import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${article.slug}`} className="group block">
        <article className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
              {article.category} &middot; {new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-4 text-neutral-600 line-clamp-3">
              {article.excerpt}
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Di {article.author}
            </p>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article>
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="pt-4">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
            {article.category}
          </p>
          <h3 className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
