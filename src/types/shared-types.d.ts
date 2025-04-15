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
