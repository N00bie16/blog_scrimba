import { useState } from "react";

import { blogPosts } from "@/src/data";

interface Post {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  content: string;
}

export default function Posts() {
  const POST_PER_PAGE = 3;
  const [visiblePosts, setVisiblePosts] = useState(POST_PER_PAGE);

  const hasMorePosts = visiblePosts < blogPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + POST_PER_PAGE);
  };
  return (
    <section>
      {blogPosts.slice(0, visiblePosts).map((post: Post) => (
        <article
          key={post.id}
          className="max-w-2xl mx-auto p-4 pt-8 bg-white text-black"
        >
          <img src={post.image} alt={post.alt} className="w-full h-auto" />
          <p className="uppercase text-sm my-2">{post.date}</p>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}

      {hasMorePosts && (
        <div className="flex justify-center mb-4">
          <button
            onClick={loadMorePosts}
            className=" text-black px-4 py-2 mb-4 underline font-bold"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
