import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NearbyPro',
    description: 'A sophisticated location-based service platform connecting users with local professionals and resources seamlessly through an intuitive interface.',
    tags: ['React', 'Tailwind CSS', 'Vercel', 'Maps API'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    demo: 'https://NearbyPro.vercel.app',
    github: 'https://github.com/IAMHABEEBULLAH?tab=repositories'
  },
  {
    id: '2',
    title: 'Booktrust Kaduna',
    description: 'A comprehensive web platform for a literary initiative, designed to promote reading culture and provide educational resources in Kaduna State.',
    tags: ['React.js', 'Responsive Design', 'Web Performance'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    demo: 'https://booktrust-kaduna-website.vercel.app',
    github: 'https://github.com/IAMHABEEBULLAH?tab=repositories'
  },
  {
    id: '3',
    title: 'Modern TicTacToe',
    description: 'A high-fidelity implementation of the classic game featuring fluid animations, advanced game logic, and a pixel-perfect dark mode UI.',
    tags: ['JavaScript', 'React', 'CSS Animations', 'Game Logic'],
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=800',
    demo: 'https://Tictactoe-ten-kohl.vercel.app',
    github: 'https://github.com/IAMHABEEBULLAH?tab=repositories'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Next.js', level: 93, category: 'frontend' },
  { name: 'React.js', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 96, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 98, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Git & GitHub', level: 92, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Vite', level: 90, category: 'tools' },
];

// System instruction for the AI assistant to provide context about Habeebullah
export const SYSTEM_INSTRUCTION = `You are the virtual assistant for Habeebullah Sulyman, a dedicated Junior Web Developer. 
Your primary function is to answer inquiries regarding his professional background, technical skills, and projects.

Habeebullah's Background:
- Role: Junior Web Developer
- Passion: Engineering pixel-perfect interfaces and high-performance modern web applications.
- Location: Based in Nigeria.

Technical Proficiency:
- Frontend: Next.js (Core Specialty), React.js, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, TypeScript
- Tools & Workflow: Git, GitHub, VS Code, Vite, Vercel

Key Projects:
1. NearbyPro: A location-based service platform connecting users with local pros.
2. Booktrust Kaduna: A web platform promoting reading culture and educational resources.
3. Modern TicTacToe: High-fidelity game implementation with fluid animations and dark mode.

GitHub: https://github.com/IAMHABEEBULLAH?tab=repositories

Communication Style:
- Professional, helpful, and concise.
- Friendly and engaging.
- If a user asks something outside your knowledge base or for direct collaboration, encourage them to use the contact form or email him at contact@habeebullah.dev.
`;