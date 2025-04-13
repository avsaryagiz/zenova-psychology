interface IImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
  path?: string | null;
}

export interface IImage extends IImageFormat {
  id?: number;
  documentId?: string;
  alternativeText: string | null;
  caption?: string | null;
  formats?: {
    large?: IImageFormat;
    small?: IImageFormat;
    medium?: IImageFormat;
    thumbnail?: IImageFormat;
  };
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categoryName: string;
  authorImage?: string;
  authorTitle?: string;
  content?: string | TrustedHTML;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export interface IAuthor {
  id?: number;
  documentId?: string;
  name: string;
  slug: string;
  bio?: string;
  image: IImage;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface IPost {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  content: RootNode[];
  cover_image: IImage;
  meta_title?: string;
  meta_description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  categories: ICategory[];
  author: IAuthor;
}

export interface IFAQItem {
  question: string;
  answer: string;
}

export interface ITitleSection {
  title: string;
  description?: string | React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

export interface IProcessItem {
  title: string;
  description: string;
  image: string;
}

export interface IServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  benefits: string[];
  approaches: string[];
  duration: string;
  frequency: string;
}

export interface IVideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  duration: string;
  date: string;
  views: number;
}
