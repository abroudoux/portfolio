import { ProjectDataProps } from "@/utils/types";

const projectsData: ProjectDataProps[] = [
  {
    id: 0,
    title: "highlights.io",
    description: "Keep your discoveries of the past year at one place",
    technos: ["Adonis", "TypeScript", "React", "TailwindCSS"],
    repository: "https://github.com/abroudoux/highlights.io.git",
    status: "wip"
  },
  {
    id: 1,
    title: "notion-to-spotify",
    description: "From a Notion list launch randomly an album on Spotify",
    technos: ["JavaScript", "Notion API"],
    repository: "https://github.com/abroudoux/notion-to-spotify.git",
    status: "v1"
  },
  {
    id: 2,
    title: "spotify-autopush",
    description: "Display on your Github profile the last album you listened",
    technos: ["Python", "Spotify API", "Github API"],
    repository: "https://github.com/abroudoux/spotify-autopush.git",
    status: "v1"
  },
  {
    id: 3,
    title: "pokemon-battle-simulator",
    description: "REST API to simulate Pokemon duels",
    technos: ["Go"],
    repository: "https://github.com/abroudoux/pokemon-battle-simulator.git",
    status: "wip"
  }
];

export default projectsData;
