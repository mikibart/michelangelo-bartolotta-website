import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, Article } from './types';

const projectsDirectory = path.join(process.cwd(), 'content/progetti');
const blogDirectory = path.join(process.cwd(), 'content/blog');

// Helper to ensure directory exists
function ensureDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Projects
export function getAllProjects(): Project[] {
  ensureDirectory(projectsDirectory);

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        images: data.images || [],
        category: data.category,
        year: data.year,
        location: data.location,
        client: data.client,
        date: data.date,
      } as Project;
    });

  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getProjectBySlug(slug: string): { project: Project; content: string } | null {
  ensureDirectory(projectsDirectory);

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    project: {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      images: data.images || [],
      category: data.category,
      year: data.year,
      location: data.location,
      client: data.client,
      date: data.date,
    } as Project,
    content,
  };
}

// Articles
export function getAllArticles(): Article[] {
  ensureDirectory(blogDirectory);

  const fileNames = fs.readdirSync(blogDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        author: data.author,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
      } as Article;
    });

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getArticleBySlug(slug: string): { article: Article; content: string } | null {
  ensureDirectory(blogDirectory);

  const fullPath = path.join(blogDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    article: {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      author: data.author,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
    } as Article,
    content,
  };
}

// Get unique categories
export function getProjectCategories(): string[] {
  const projects = getAllProjects();
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  return categories;
}

export function getArticleCategories(): string[] {
  const articles = getAllArticles();
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  return categories;
}
