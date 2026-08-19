import mayanlifeCover from "@/assets/projectCovers/mayanlife.webp"
import spacexCover from "@/assets/projectCovers/spacex.webp"
import keidotCover from "@/assets/projectCovers/keidot.webp"
import portfolioCover from "@/assets/projectCovers/portfolio.webp"
import taskerCover from "@/assets/projectCovers/tasker.png"

export interface ProjectProps {
    previewLink?: string;
    githubLink?: string;
    projectTitle: string;
    projectDescription: string;
    imageSrc: ImageMetadata;
    techs: string[];
  }

  export const projects: ProjectProps[] = [
    {
      githubLink: "https://github.com/spricew/tasker-app",
      previewLink: "https://tasker-studio.vercel.app",
      projectTitle: "Tasker App",
      projectDescription: "Tasker Studio empowers users to efficiently track daily tasks through a highly responsive interface featuring instant 'Optimistic UI' updates and real-time pending counters. Key functionalities include a custom secure authentication system with role-based access (Admin/Student), seamless CRUD operations, and an automated password recovery flow via email integration. The fluid user experience is driven by Framer Motion animations and Sileo notifications, all backed by a robust serverless PostgreSQL architecture.", 
      imageSrc: taskerCover,
      techs: ["NextJs", "TypeScript", "TailwindCSS", "PostgreSQL"]
    },
    {
      previewLink: "https://mayanlifeyucatan.com/",
      projectTitle: "Mayan Life Inmobiliaria Web",
      projectDescription: "Mayan Life is a real estate website designed to showcase properties in a clear and easy-to-navigate way. It allows users to explore listings through filters, image galleries, and detailed information, offering a smooth experience for clients and visitors. Additionally, it includes an admin panel for managing properties and user roles.",
      imageSrc: mayanlifeCover,
      techs: ["NextJs", "TailwindCSS", "Express", "PostgreSQL"]
    }, 
    {
      githubLink: "https://github.com/spricew/spacex-dashboard",
      previewLink: "https://spacex-dashboard-spricew.vercel.app",
      projectTitle: "SpaceX Dashboard",
      projectDescription: "SpaceX Dashboard is a web application that displays relevant information about SpaceX launches in a clear and organized way. It allows users to explore past, recent, and upcoming launches, showing details such as launch dates, mission status, rockets, and launchpads. The project focuses on a clean, user-friendly interface with reusable components and smooth navigation. It was built as a frontend project to practice API consumption, data handling, and interface design.",
      imageSrc: spacexCover,
      techs: ["NextJs", "TypeScript", "TailwindCSS"]
    },
    {
      githubLink: "https://github.com/spricew/Keidot-Project",
      projectTitle: "Keidot App",
      projectDescription: "Keidot is a mobile app that connects clients with workers quickly and safely. It allows users to request gardening services and displays nearby workers based on location. The process includes requesting a service, worker acceptance, and secure payment. The app also features a review system to ensure quality. Keidot aims to be a modern and accessible solution for those who need help in their garden and for individuals looking to earn extra income.",
      imageSrc: keidotCover,
      techs: ["Flutter", "Dart"]
    },
    {
      githubLink: "https://github.com/spricew/Portfolio",
      projectTitle: "Personal portfolio",
      projectDescription: "My personal portfolio is a website where I showcase who I am, what I do, and the projects I've built. I developed it using Astro and Tailwind to achieve a clean and easy-to-navigate design. It includes informative sections, all intended to present my work clearly. It's a space I will continue improving as I learn new things, and it represents my journey and growth as a web developer.",
      imageSrc: portfolioCover,
      techs: ["AstroJs", "TailwindCSS"]
    }
  ];
  
  