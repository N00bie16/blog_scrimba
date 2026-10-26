import { Link } from "react-router-dom";

import { heroPost } from "@/data";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <Link
        to={`/blog/${heroPost.id}`}
        className="block my-8 cursor-pointer group hover:opacity-95 transition-opacity"
      >
        <article
          style={{ backgroundImage: `url(${heroPost.image})` }}
          className={`max-w-2xl mx-auto p-4 pt-8 bg-cover bg-center text-white`}
        >
          <div className="px-2 py-8">
            <p className="uppercase text-xs mb-2">{heroPost.date}</p>
            <h1 className="text-3xl font-bold mb-2">{heroPost.title}</h1>
            <p>{heroPost.content}</p>
          </div>
        </article>
      </Link>
      <Posts />
    </main>
  );
}
