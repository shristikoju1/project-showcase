export interface Project {
    id: number;
    title: string;
    description: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Figma: Yodora",
      description: "A Figma design converted to a responsive website.",
    },
    {
      id: 2,
      title: "Evogym",
      description: "An online gym booking platform with modern UI.",
    },
  ];
  