export type ServiceTag = string;

export interface ServiceItem {
  title: string;
  technicalTitle: string;
  description: string;
  outcome: string;
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
  technicalTitle: string;
  description: string;
  items: string[];
}
