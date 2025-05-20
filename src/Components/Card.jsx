import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div className="p-22">
      <div className="bg-[#0f172a] min-h-screen text-white px-8 py-12">
        <p className="text-teal-400 font-bold uppercase">Update</p>
        <h1 className="text-3xl font-bold mt-2 mb-1">
          Apa yang baru di Petani Kode?{" "}
          <span className="text-orange-500">🔥</span>
        </h1>
        <p className="text-gray-300 mb-8">
          Baca artikel terbaru yang masih fresh dan hangat.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1e293b] rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="bg-blue-500 h-40 w-full rounded-lg mb-4"></div>

              <h3 className="text-white font-bold text-lg mb-2">
                {post.title.slice(0, 50)}...
              </h3>
              <p className="text-gray-400 text-sm">
                {post.body.slice(0, 100)}...
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Card;
