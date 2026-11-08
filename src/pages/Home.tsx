import { Link } from "react-router-dom";

import { heroPost } from "@/data";
import Posts from "@/components/Posts";
import { getPublicAssetUrl } from "@/utils/assets";

export default function Home() {
  return (
    <main>
      <Link
        to={`/blog/${heroPost.id}`}
        className="block my-2 cursor-pointer group hover:opacity-95 transition-opacity md:max-w-5xl md:mx-auto"
        aria-label={`Read featured article: ${heroPost.title}`}
      >
        <article className="relative max-w-2xl mx-auto p-4 pt-8 bg-black bg-cover bg-center md:max-w-5xl md:h-122 overflow-hidden">
          <img
            src={getPublicAssetUrl(heroPost.image)}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            width={1600}
            height={1000}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative px-2 py-8 text-white z-10 top-4 md:absolute md:bottom-4 md:top-[60%] md:px-6">
            <p className="uppercase text-xs mb-2">{heroPost.date}</p>
            <h1 className="text-3xl font-bold mb-2">{heroPost.title}</h1>
            <p className="max-w-xl text-xs md:text-base">{heroPost.content}</p>
          </div>
        </article>
      </Link>
      <Posts />
    </main>
  );
}
