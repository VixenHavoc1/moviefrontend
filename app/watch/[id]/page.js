import { getMovie } from "@/lib/api";

export default async function WatchPage({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-3">{movie.title}</h1>

      <iframe
        src={movie.playback_url}
        className="w-full h-[70vh] rounded-lg"
        allow="autoplay"
        allowFullScreen
      />

      <p className="mt-4 text-gray-300">{movie.description}</p>
    </main>
  );
}
