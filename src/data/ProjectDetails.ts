import Yodora from "../assets/yodora.png";
import Tailwind from "../assets/taiwind-frontend-challenge.png";
import Lightcode from "../assets/lightcode.png";
import Todo from "../assets/todo.png";
import ImageSearch from "../assets/image-search-app.png";
import WeatherApp from "../assets/weather-app.png"
import Evogym from "../assets/evogym.png"
import ProjectShowcase from "../assets/project-showcase.png"
import Vue from "../assets/vue.png"
import Comforty from "../assets/Comforty.png"
import ReactAuthentication from "../assets/authentication.png"
import ReactJobs from "../assets/react-jobs.png"
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
    description:
    [
        "Landing page based on Figma design",
        "Responsive design included",
        "Styled with SCSS for readability"
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
      "Simple landing page",
      "Built with Tailwind for practice",
      "Responsive design included",
    ],
    githubLink: "https://github.com/shristikoju1/lightcode",
    liveDemoLink:
      "https://lightcode-tailwind-mjau-h4xis4d8z-shristikoju1s-projects.vercel.app/",
    image: Lightcode,
  },

  {
    id: 3,
    projectNumber: "Project 3",
    title: "Tailwind: Frontend Challenge",
    description: [
      "Basic frontend design from Frontend Mentor",
      "Built with Tailwind for practice",
      "Responsive design included",
    ],
    githubLink: "https://github.com/shristikoju1/Tailwind-frontend-challenge/",
    liveDemoLink:
      "https://frontend-challenge-tailwind-hwll-9mb56mau3.vercel.app/",
    image: Tailwind,
  },
  {
    id: 4,
    projectNumber: "Project 4",
    title: "JS: DainikLogs(Todo App)",
    description:
    [
        "Tri-state theme toggle",
        "Calendar with task management",
        "Progress tracker and confetti celebration",
        "Fetch localized calendar data",
    ],
    githubLink: "https://github.com/shristikoju1/todo-task",
    liveDemoLink: "https://todo-2xjq6dby6-shristikoju1s-projects.vercel.app/",
    image: Todo,
  },
  {
    id: 5,
    projectNumber: "Project 5",
    title: "JS: Image Search App",
    description: [
      "Use debounce for searching",
      "Fetch API to display images",
      "See more button",
    ],
    githubLink:
      "https://github.com/shristikoju1/YIPL/blob/main/35JS-image-search-app(task)",
    liveDemoLink: "https://image-search-app-sandy.vercel.app/",
    image: ImageSearch,
  },
  {
    id: 6,
    projectNumber: "Project 6",
    title: "React: React Jobs",
    description: [
      "Display jobs from jobs. json file",
      "Add, delete, and edit jobs functionality",
      "Include loader and responsive",
    ],
    githubLink: "https://github.com/shristikoju1/react-jobs",
    liveDemoLink: "https://vercel.com/shristikoju1s-projects/react-jobss",
    image: ReactJobs,
  },

  {
    id: 7,
    projectNumber: "Project 7",
    title: "React+TS: Weather App ",
    description: [
      "Weather data fetching",
      "Search Functionality",
      "Dynamic weather icons",
      "Geolocation support"
    ],
    githubLink: "https://github.com/shristikoju1/weather-app",
    liveDemoLink: "https://weather-appp-mauve.vercel.app/",
    image: WeatherApp,
  },
  {
    id: 8,
    projectNumber: "Project 8",
    title: "TS: Evogym",
    description: [
      "Custom hook for media query",
      "Framer motion for animation",
      "Includes workout plans and schedules.",
    ],
    githubLink: "https://github.com/your-repo/evogym",
    liveDemoLink: "https://evogym-demo.vercel.app/",
    image: Evogym,
  },

  {
    id: 9,
    projectNumber: "Project 9",
    title: "Comforty",
    description: [
      "This is a gym landing page with advanced CSS animations.",
      "Features a user-friendly interface.",
      "Path config",
    ],
    githubLink: "https://github.com/your-repo/evogym",
    liveDemoLink: "https://evogym-demo.vercel.app/",
    image: Comforty,
  },

  {
    id: 10,
    projectNumber: "Project 10",
    title: "React Authentication",
    description: [
      "Register and login functionallity",
      "Store data in db.json file",
      "Include role based access",
    ],
    githubLink: "https://github.com/shristikoju1/react-authentication",
    liveDemoLink: "https://frontend.karnarajbanshi.com.np/",
    image: ReactAuthentication,
  },

  {
    id: 11,
    projectNumber: "Project 11",
    title: "Project Showcase",
    description: [
      "Slightly parallax touch",
      "Animation with keyframes",
      "Modal to show project details",
    ],
    githubLink: "https://github.com/your-repo/evogym",
    liveDemoLink: "https://evogym-demo.vercel.app/",
    image: ProjectShowcase,
  },
  {
    id: 12,
    projectNumber: "Project 12",
    title: "Vue Mastery Shocks",
    description: [
      "Shows product details",
      "Add to cart option",
      "Submittable and viewable reviews",
      "Event bus and main instance"
    ],
    githubLink: "https://github.com/shristikoju1/vuejs/tree/main/vuejs2",
    liveDemoLink: "https://vue2-tau.vercel.app/",
    image: Vue,
  },

];
