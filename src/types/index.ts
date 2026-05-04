export type ServiceTag = string;

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: ServiceTag[];
}

export type ProjectCategory = 'Все' | 'Веб' | 'Мобайл' | 'AI' | 'DevOps';

export interface ProjectItem {
  title: string;
  category: ProjectCategory;
  status: 'Live' | 'В разработке';
  description: string;
  stack: string[];
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
