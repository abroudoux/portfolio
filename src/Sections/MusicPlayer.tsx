import musicData from "@/data/music.data";

import MusicCard from "@/components/MusicPlayer/MusicCard";

export default function MusicPlayer() {
  return (
    <div className="fixed top-0 left-0 p-8">
      <div className="w-128 h-128 bg-card border-border border rounded-lg overflow-y-auto">
        <div className="w-128 fixed flex flex-col-start gap-2 bg-card p-6 rounded-t-lg border border-border">
          <h2 className="text-lg font-semibold italic font-platypi">Music Player</h2>
          <p className="text-xs text-muted-foreground line-clamp-1">
            Discover more about me with some music selection
          </p>
        </div>
        <ul className="flex-col-start gap-2 mt-24 p-6">
          {musicData.map((music) => (
            <MusicCard key={music.id} {...music} />
          ))}
        </ul>
      </div>
    </div>
  );
}
