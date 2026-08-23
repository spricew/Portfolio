# Personal Portfolio

My personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It showcases my projects, skills, education, and experience as a developer, featuring a responsive design and smooth scroll animations.

## Tech Stack

- [Astro](https://astro.build) - Web framework
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Data models

## Features

- Responsive, single-page layout
- Projects showcase with cover images (optimized via `astro:assets`)
- Skills, technologies, and education sections
- Smooth animations on scroll
- Downloadable CV

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18.17.1 or higher
- npm

### Installation

```bash
git clone https://github.com/spricew/portfolio.git
cd portfolio
npm install
```

### Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Starts the dev server at `localhost:4321`    |
| `npm run build`   | Builds the production site to `./dist/`      |
| `npm run preview` | Previews the production build locally        |

## Project Structure

```
├── public/          # Static assets (favicon, fonts, images, CV)
├── src/
│   ├── assets/      # Optimized images (project covers, portraits)
│   ├── components/
│   │   ├── home/    # Page sections (About, Projects, Skills...)
│   │   └── ui/      # Reusable UI components (Card, Navbar...)
│   ├── data/        # Project data (projects.ts)
│   ├── icons/       # SVG icon components (techs & skills logos)
│   ├── layouts/     # Base HTML layout
│   ├── pages/       # Astro pages
│   └── styles/      # Global styles
└── astro.config.mjs
```

## License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.
