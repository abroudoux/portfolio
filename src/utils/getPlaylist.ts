const getPlaylist = async () => {
  const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const SPOTIFY_PLAYLIST_ID = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID;

  try {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${SPOTIFY_PLAYLIST_ID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      }
    });

    if (!response.ok) {
      console.error("An error occurred while calling the API, please try again");
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default getPlaylist;
