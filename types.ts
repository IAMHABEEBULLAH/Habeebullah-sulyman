
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'tools' | 'backend' | 'design';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
