import { Link } from "react-router-dom";

import { heroPost } from "@/data";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <Link
        to={`/blog/${heroPost.id}`}
        className="block my-2 cursor-pointer group hover:opacity-95 transition-opacity"
      >
        <article
          style={{ backgroundImage: `url(${heroPost.image})` }}
          className={`relative max-w-2xl mx-auto p-4 pt-8 bg-cover bg-center md:max-w-5xl md:mx-auto md:h-122`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative px-2 py-8 text-white z-10 md:absolute md:bottom-4 md:px-6">
            <p className="uppercase text-xs mb-2">{heroPost.date}</p>
            <h1 className="text-3xl font-bold mb-2">{heroPost.title}</h1>
            <p className="max-w-xl">{heroPost.content}</p>
          </div>
        </article>
      </Link>
      <Posts />
    </main>
  );
}
