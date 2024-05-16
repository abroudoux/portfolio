export default function MusicPlayer() {
  return (
    <section className="xs:hidden lg:fixed top-0 left-[70vw] p-8">
      <div className="w-128 h-auto bg-card overflow-y-auto border border-border rounded-xl">
        <div className="w-full fixed flex flex-col-start gap-2 bg-card px-6 py-4 rounded-t-lg border-b border-border z-50">
          <h2 className="text-lg font-semibold italic font-platypi">Music Player</h2>
          <p className="text-xs text-muted-foreground line-clamp-1">
            Discover more about me with some music selection
          </p>
        </div>
        <iframe
          className="mt-20"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EprvzpqQ4BCp6?utm_source=generator"
          width="100%"
          height="450"
          title="Spotify Playlist"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      </div>
    </section>
  );
}
