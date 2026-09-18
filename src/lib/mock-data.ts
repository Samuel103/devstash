export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatarInitials: string;
}

export interface MockItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface MockCollection {
  id: string;
  name: string;
  description: string;
  color: string;
  itemCount: number;
  isFavorite: boolean;
  typeIds: string[];
}

export interface MockItem {
  id: string;
  title: string;
  description: string;
  typeId: string;
  collectionId: string;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  updatedAt: string;
}

export const currentUser: MockUser = {
  id: "user-john-doe",
  name: "John Doe",
  email: "demo@devstash.io",
  avatarInitials: "JD",
};

export const itemTypes: MockItemType[] = [
  { id: "snippet", name: "Snippets", icon: "code-2", color: "blue" },
  { id: "prompt", name: "Prompts", icon: "sparkles", color: "purple" },
  { id: "command", name: "Commands", icon: "terminal", color: "orange" },
  { id: "note", name: "Notes", icon: "file-text", color: "yellow" },
  { id: "file", name: "Files", icon: "file", color: "slate" },
  { id: "image", name: "Images", icon: "image", color: "pink" },
  { id: "url", name: "Links", icon: "link", color: "emerald" },
];

export const collections: MockCollection[] = [
  {
    id: "react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    color: "blue",
    itemCount: 12,
    isFavorite: true,
    typeIds: ["snippet", "note", "url"],
  },
  {
    id: "python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    color: "blue",
    itemCount: 8,
    isFavorite: false,
    typeIds: ["snippet", "note"],
  },
  {
    id: "context-files",
    name: "Context Files",
    description: "AI context files for projects",
    color: "slate",
    itemCount: 5,
    isFavorite: true,
    typeIds: ["file", "note"],
  },
  {
    id: "interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    color: "yellow",
    itemCount: 24,
    isFavorite: false,
    typeIds: ["note", "snippet", "url", "prompt"],
  },
  {
    id: "git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    color: "orange",
    itemCount: 15,
    isFavorite: true,
    typeIds: ["command", "note"],
  },
  {
    id: "ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    color: "purple",
    itemCount: 18,
    isFavorite: false,
    typeIds: ["prompt", "snippet", "note"],
  },
];

export const items: MockItem[] = [
  {
    id: "use-auth-hook",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    typeId: "snippet",
    collectionId: "react-patterns",
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    updatedAt: "Jan 15",
  },
  {
    id: "api-error-handling-pattern",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    typeId: "snippet",
    collectionId: "react-patterns",
    tags: ["api", "error-handling", "fetch"],
    isFavorite: false,
    isPinned: true,
    updatedAt: "Jan 12",
  },
  {
    id: "git-rebase-workflow",
    title: "Git Rebase Workflow",
    description: "A safe workflow for rebasing a feature branch",
    typeId: "command",
    collectionId: "git-commands",
    tags: ["git", "workflow"],
    isFavorite: true,
    isPinned: false,
    updatedAt: "Jan 10",
  },
  {
    id: "project-context-template",
    title: "Project Context Template",
    description: "Starter context file for AI-assisted projects",
    typeId: "file",
    collectionId: "context-files",
    tags: ["ai", "context", "template"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "Jan 8",
  },
  {
    id: "technical-interview-coach",
    title: "Technical Interview Coach",
    description: "Prompt for practicing technical interview questions",
    typeId: "prompt",
    collectionId: "interview-prep",
    tags: ["interview", "career"],
    isFavorite: false,
    isPinned: false,
    updatedAt: "Jan 6",
  },
];
