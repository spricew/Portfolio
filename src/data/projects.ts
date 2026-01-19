import mayanlifeCover from "@/assets/projectCovers/mayanlife.webp"
import spacexCover from "@/assets/projectCovers/spacex.webp"
import keidotCover from "@/assets/projectCovers/keidot.webp"
import portfolioCover from "@/assets/projectCovers/portfolio.webp"

export interface ProjectProps {
    previewLink?: string;
    githubLink?: string;
    projectTitle: string;
    projectDescription: string;
    imageSrc: ImageMetadata;
    imageAlt: string;
    techs: string[];
  }

  export const projects: ProjectProps[] = [
    {
      previewLink: "https://mayanlifeyucatan.com/",
      projectTitle: "Mayan Life Inmobiliaria Web",
      projectDescription: "Mayan Life is a real estate website designed to showcase properties in a clear and easy-to-navigate way. It allows users to explore listings through filters, image galleries, and detailed information, offering a smooth experience for clients and visitors. Additionally, it includes an admin panel for managing properties and user roles.",
      imageSrc: mayanlifeCover,
      imageAlt: "website preview",
      techs: ["NextJs", "TailwindCSS", "Express", "PostgreSQL"]
    }, 
    {
      githubLink: "https://github.com/spricew/spacex-dashboard",
      previewLink: "https://spacex-dashboard-spricew.vercel.app",
      projectTitle: "SpaceX Dashboard",
      projectDescription: "SpaceX Dashboard is a web application that displays relevant information about SpaceX launches in a clear and organized way. It allows users to explore past, recent, and upcoming launches, showing details such as launch dates, mission status, rockets, and launchpads. The project focuses on a clean, user-friendly interface with reusable components and smooth navigation. It was built as a frontend project to practice API consumption, data handling, and interface design.",
      imageSrc: spacexCover,
      imageAlt: "website preview",
      techs: ["NextJs", "TypeScript", "TailwindCSS"]
    },
    {
      githubLink: "https://github.com/spricew/Keidot-Project",
      projectTitle: "Keidot App",
      projectDescription: "Keidot is a mobile app that connects clients with workers quickly and safely. It allows users to request gardening services and displays nearby workers based on location. The process includes requesting a service, worker acceptance, and secure payment. The app also features a review system to ensure quality. Keidot aims to be a modern and accessible solution for those who need help in their garden and for individuals looking to earn extra income.",
      imageSrc: keidotCover,
      imageAlt: "Keidot App",
      techs: ["Flutter", "Dart"]
    },
    {
      previewLink: "https://heyder-medina-portfolio.vercel.app/",
      githubLink: "https://github.com/spricew/Portfolio",
      projectTitle: "Personal portfolio",
      projectDescription: "My personal portfolio is a website where I showcase who I am, what I do, and the projects I've built. I developed it using Astro and Tailwind to achieve a clean and easy-to-navigate design. It includes informative sections, all intended to present my work clearly. It's a space I will continue improving as I learn new things, and it represents my journey and growth as a web developer.",
      imageSrc: portfolioCover,
      imageAlt: "Portafolio personal",
      techs: ["AstroJs", "TailwindCSS"]
    }
  ];
  
  