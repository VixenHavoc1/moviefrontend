import Link from "next/link";

export default function MovieCard({ movie }) {
return (
<Link href={`/watch/${movie.id}`}
className="block group rounded overflow-hidden bg-neutral-900 hover:bg-neutral-800">

<img src={movie.thumbnail_url} className="w-full h-48 object-cover" />

<div className="p-2">
<h2 className="text-lg font-semibold truncate group-hover:text-red-400">
{movie.title}
</h2>
</div>
</Link>
);
}
