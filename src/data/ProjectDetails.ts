import Yodora from "../assets/yodora.png"
import Tailwind from '../assets/taiwind-frontend-challenge.png'

export interface Project {
    id: number;
    projectNumber: string | number;
    title: string;
    description: string[];
    githubLink: string;
    liveDemoLink: string;
    image: string;
  }
  
  export const projects: Project[] = [
    {
        id: 1,
        projectNumber: "Project 1",
        title: "Figma: Yodora",
        description: [
            "Here is a landing page built based on the Figma design.",
            "It includes responsive design.",
            "Utilizes SCSS for easy and readable styling"
        ],
        githubLink: "https://github.com/shristikoju1/YIPL-FigmaDesign",
        liveDemoLink: "https://yodora-qpggmdfaa-shristikoju1s-projects.vercel.app/",
        image: Yodora,
    },
    {
        id: 2,
        projectNumber: "Project 2",
        title: "Tailwind: LightCode",
        description: [
            "This is a basic frontend design.",
            "It is built using the tailwind for tailwind practice.",
            "It includes responsive design."
        ],
        githubLink: "https://github.com/shristikoju1/Tailwind-frontend-challenge/",
        liveDemoLink: "https://frontend-challenge-tailwind-hwll-9mb56mau3.vercel.app/",
        image: Tailwind,
    },

    {
        id: 3,
        projectNumber: "Project 3",
        title: "Tailwind: Frontend Challenge",
        description: [
            "This is a basic frontend design which is available on the frontend challenge mentor.",
            "It is built using the tailwind for tailwind practice.",
            "It includes responsive design."
        ],
        githubLink: "https://github.com/shristikoju1/Tailwind-frontend-challenge/",
        liveDemoLink: "https://frontend-challenge-tailwind-hwll-9mb56mau3.vercel.app/",
        image: Tailwind,
    },
    {
        id: 4,
        projectNumber: "Project 4",
        title: "JS: DainikLogs(Todo App)",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },
    {
        id: 5,
        projectNumber: "Project 5",
        title: "JS: Image Search App",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },
    {
        id: 6,
        projectNumber: "Project 6",
        title: "React: React Crash Course",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },

    {
        id: 7,
        projectNumber: "Project 7",
        title: "React+TS: Weather App ",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },
    {
        id: 8,
        projectNumber: "Project 8",
        title: "TS: Evogym",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },

    {
        id: 9,
        projectNumber: "Project 9",
        title: "Comforty",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },


    {
        id: 10,
        projectNumber: "Project 10",
        title: "React Authentication",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },

    {
        id: 11,
        projectNumber: "Project 11",
        title: "Project Showcase",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/your-repo/evogym",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: "path_to_evogym_image",
    },


];
  