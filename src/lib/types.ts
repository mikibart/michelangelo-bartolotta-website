export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  images: string[];
  category: string;
  year: string;
  location: string;
  client?: string;
  date: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
