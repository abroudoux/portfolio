import { useState, useEffect } from "react";

import getPlaylist from "@/utils/getPlaylist";

export default function MusicPlayer() {
  const [data, setData] = useState(""); // Fix: Change the initial value to an empty string

  useEffect(() => {
    const fetchData = async () => {
      const playlistData = await getPlaylist();
      setData(playlistData);
    };

    fetchData();
  }, []);

  return (
    <div className="fixed top-4 right-4">
      <h1>Music Player</h1>
      {data}
    </div>
  );
}
