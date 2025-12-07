import MovieCard from "@/components/MovieCard";
import { getMovies } from "@/lib/api";

export default async function Home() {
const movies = await getMovies();

return (
<main className="p-6">
<h1 className="text-3xl font-bold mb-4">Latest Movies</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
{movies.map((movie: any) => (
<MovieCard key={movie.id} movie={movie} />
))}
</div>
</main>
);
}
