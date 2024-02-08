import { ProjectDataProps } from "@/types/types";

const projectsData: ProjectDataProps[] = [
  {
    id: 0,
    title: "spotify-autopush",
    image: "@/assets/img/spotify-autopush.png",
    tags: ["personal project", "finished"],
    description: "Display on your Github profile the last album you listened on Spotify",
    technos: ["Python", "Spotify API", "Github API"],
    date: "2024",
    repository: "https://github.com/abroudoux/spotify-autopush"
  },
  {
    id: 1,
    title: "un-chat-là",
    image: "@/assets/img/un-chat-la.png",
    tags: ["personal project", "finished"],
    description: "User interface to manage cats",
    technos: ["React", "TailwindCSS", "MongoDB", "TypeScript", "NestJs"],
    date: "2024",
    repository: "https://github.com/abroudoux/cats-monorepo"
  },
  {
    id: 2,
    title: "choosify",
    image: "@/assets/img/choosify.png",
    tags: ["personal project", "current"],
    description: "From a Notion Database, launch randomly an album on Spotify",
    technos: ["React", "TailwindCSS", "PostgreSQL", "TypeScript", "NodeJs", "NestJs"],
    date: "2024",
    repository: "https://github.com/abroudoux/chooseify"
  }
];

export default projectsData;
