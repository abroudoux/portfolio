import { ProjectDataProps } from "@/utils/types";

const projectsData: ProjectDataProps[] = [
  {
    id: 0,
    title: "notion-to-spotify",
    description: "From a Notion list launch randomly an album on Spotify",
    technos: ["JavaScript", "Notion API"],
    repository: "https://github.com/abroudoux/notion-to-spotify.git",
    status: "v1"
  },
  {
    id: 1,
    title: "spotify-autopush",
    description: "Display on your Github profile the last album you listened",
    technos: ["Python", "Spotify API", "Github API"],
    repository: "https://github.com/abroudoux/spotify-autopush.git",
    status: "v1"
  },
  {
    id: 2,
    title: "pokemon-battle-simulator",
    description: "REST API to simulate Pokemon duels",
    technos: ["Go"],
    repository: "https://github.com/abroudoux/pokemon-battle-simulator.git",
    status: "v1"
  }
];

export default projectsData;
