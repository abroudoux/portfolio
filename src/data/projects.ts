import { ProjectDataProps } from "@/types/types";

const projectsData: ProjectDataProps[] = [
  {
    id: 0,
    title: "highlights.io",
    image: "@/assets/img/spotify-autopush.png",
    tags: ["personal project", "current"],
    description: "Keep your discoveries of the past year at one place",
    technos: ["AdonisJs", "TypeScript", "React", "TailwindCSS"],
    date: "2024",
    repository: "https://github.com/abroudoux/highlights.io"
  },
  {
    id: 1,
    title: "notion-to-spotify",
    image: "@/assets/img/notion-to-spotify.png",
    tags: ["personal project", "v1 finished"],
    description: "From a Notion list, launch randomly an album on Spotify",
    technos: ["Notion API", "JavaScript"],
    date: "2024",
    repository: "https://github.com/abroudoux/notion-to-spotify-cli.git"
  },
  {
    id: 2,
    title: "spotify-autopush",
    image: "@/assets/img/spotify-autopush.png",
    tags: ["personal project", "v1 finished"],
    description: "Display on your Github profile the last album you listened on Spotify",
    technos: ["Python", "Spotify API", "Github API"],
    date: "2024",
    repository: "https://github.com/abroudoux/spotify-autopush"
  }
];

export default projectsData;
