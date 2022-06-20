export interface Project {
    id?: number,
    name: string,
    technologies?: string,
    subtitle?: string,
    used?: string,
    image: string,
    github: string,
    demo: string,
}


export interface Props {
    projects: Project[];
  }
  