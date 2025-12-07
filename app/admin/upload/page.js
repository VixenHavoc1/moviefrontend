"use client";
import { useState } from "react";
import { uploadVideo } from "@/lib/api";

export default function UploadPage() {
const [file, setFile] = useState(null);
const [title, setTitle] = useState("");
const [loading, setLoading] = useState(false);

const handleUpload = async () => {
if (!file) return alert("Select a file first");
setLoading(true);
await uploadVideo({ file, title });
setLoading(false);
alert("Uploaded!");
};

return (
<main className="p-6 max-w-xl mx-auto">
<h1 className="text-2xl font-bold mb-4">Upload Movie</h1>

<input
type="text"
placeholder="Movie Title"
className="w-full p-2 mb-3 bg-neutral-900 rounded"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>

<input
type="file"
className="w-full p-2 mb-3 bg-neutral-900 rounded"
onChange={(e) => setFile(e.target.files[0])}
/>

<button
onClick={handleUpload}
disabled={loading}
className="w-full py-2 bg-red-600 rounded hover:bg-red-700"
>
{loading ? "Uploading..." : "Upload"}
</button>
</main>
);
}
