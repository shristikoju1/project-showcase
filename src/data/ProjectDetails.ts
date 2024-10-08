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
            "Utilizes CSS animations for enhanced visuals."
        ],
        githubLink: "https://github.com/shristikoju1/YIPL-FigmaDesign",
        liveDemoLink: "https://yodora-qpggmdfaa-shristikoju1s-projects.vercel.app/",
        image: Yodora,
    },
    {
        id: 2,
        projectNumber: "Project 2",
        title: "Tailwind: Frontend Challenge",
        description: [
            "This is a gym landing page with advanced CSS animations.",
            "Features a user-friendly interface.",
            "Includes workout plans and schedules."
        ],
        githubLink: "https://github.com/shristikoju1/Tailwind-frontend-challenge/",
        liveDemoLink: "https://evogym-demo.vercel.app/",
        image: Tailwind,
    },
    {
        id: 3,
        projectNumber: "Project 3",
        title: "Evogym",
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
  