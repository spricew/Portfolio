import mayanlifeCover from "@/assets/projectCovers/mayanlife.webp"
import spacexCover from "@/assets/projectCovers/spacex.webp"
import keidotCover from "@/assets/projectCovers/keidot.webp"
import portfolioCover from "@/assets/projectCovers/portfolio.webp"
import taskerCover from "@/assets/projectCovers/tasker.webp"
import chatbotCover from "@/assets/projectCovers/keidot-chatbot.webp"

export interface ProjectProps {
  previewLink?: string;
  githubLink?: string;
  projectTitle: string;
  projectDescription: string;
  imageSrc: ImageMetadata;
  techs: string[];
  titleKey: string;
  descKey: string;
}

export const projects: ProjectProps[] = [
  { 
    githubLink: "https://github.com/spricew/tasker-app",
    previewLink: "https://tasker-studio.vercel.app",
    projectTitle: "Tasker App",
    projectDescription: "Tasker Studio helps users track daily tasks with optimistic updates and real-time counters. It includes secure role-based authentication, CRUD operations, password recovery, and a serverless PostgreSQL backend.",
    imageSrc: taskerCover,
    techs: ["NextJs", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma", "Framer Motion"],
    titleKey: "projectTaskerTitle",
    descKey: "projectTaskerDesc"
  },
  {
    githubLink: "https://github.com/spricew/spacex-dashboard",
    previewLink: "https://spacex-dashboard-spricew.vercel.app",
    projectTitle: "SpaceX Dashboard",
    projectDescription: "SpaceX Dashboard presents past, recent, and upcoming launches with mission details, rockets, and launchpads. It features a clean interface built to practice API consumption and data handling.",
    imageSrc: spacexCover,
    techs: ["NextJs", "TypeScript", "TailwindCSS"],
    titleKey: "projectSpacexTitle",
    descKey: "projectSpacexDesc"
  },
  {
    // previewLink: "https://mayanlifeyucatan.com/",
    projectTitle: "Mayan Life Web ",
    projectDescription: "Mayan Life showcases real estate listings through filters, image galleries, and detailed property information. It also includes an admin panel for managing properties and user roles.",
    imageSrc: mayanlifeCover,
    techs: ["NextJs", "Express", "PostgreSQL"],
    titleKey: "projectMayanlifeTitle",
    descKey: "projectMayanlifeDesc"
  },
  {
    githubLink: "https://github.com/spricew/Keidot-Project",
    projectTitle: "Keidot App",
    projectDescription: "Keidot connects clients with nearby workers for gardening services. Users can request services, manage acceptance and payments, and leave reviews through a simple mobile experience.",
    imageSrc: keidotCover,
    techs: ["Flutter", "Dart"],
    titleKey: "projectKeidotTitle",
    descKey: "projectKeidotDesc"
  },
  {
    // "previewLink": "https://keidot-chatbot.vercel.app",
    "githubLink": "https://github.com/spricew/keidot-chatbot-front",
    "projectTitle": "Keidot AI Chatbot",
    "projectDescription": "AI assistant for Keidot that answers service and policy questions using a RAG pipeline with LangChain, ChromaDB, and local LLMs. It can quote prices, check availability, and manage appointments with confirmation and prompt-injection protections.",
    "imageSrc": chatbotCover,
    "techs": ["LangChain", "ChromaDB", "Ollama"],
    titleKey: "projectChatbotTitle",
    descKey: "projectChatbotDesc"
  },
  {
    githubLink: "https://github.com/spricew/Portfolio",
    projectTitle: "Personal portfolio",
    projectDescription: "My personal portfolio showcases my background, skills, and projects through a clean, accessible design. It was built with Astro and Tailwind and continues to evolve with my work.",
    imageSrc: portfolioCover,
    techs: ["AstroJs", "TailwindCSS"],
    titleKey: "projectPortfolioTitle",
    descKey: "projectPortfolioDesc"
  },
];
