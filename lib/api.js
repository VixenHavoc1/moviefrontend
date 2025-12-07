const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getMovies() {
const res = await fetch(`${BACKEND}/movies`);
return await res.json();
}

export async function getMovie(id) {
const res = await fetch(`${BACKEND}/movies/${id}`);
return await res.json();
}

export async function uploadVideo({ file, title }) {
const form = new FormData();
form.append("file", file);
form.append("title", title);

const res = await fetch(`${BACKEND}/upload`, {
method: "POST",
body: form,
});

return await res.json();
}
