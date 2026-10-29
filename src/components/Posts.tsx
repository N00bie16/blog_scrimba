import { useEffect, useState } from "react";
import { blogPosts } from "@/data";
import { Link } from "react-router";

interface Post {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  content: string;
}

interface PostsProps {
  limit?: number;
  showViewMore?: boolean;
}

export default function Posts({ limit, showViewMore = true }: PostsProps) {
  const getPostPerPage = () =>
    typeof window !== "undefined" && window.innerWidth >= 768 ? 6 : 3;

  const [postPerPage, setPostPerPage] = useState(getPostPerPage);
  const [visiblePosts, setVisiblePosts] = useState(limit || postPerPage);

  useEffect(() => {
    const handleResize = () => {
      const newPostPerPage = getPostPerPage();
      setPostPerPage(newPostPerPage);

      if (!limit) {
        setVisiblePosts((prev) => Math.max(prev, newPostPerPage));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const displayedPosts = limit
    ? [...blogPosts].slice(-limit).reverse()
    : blogPosts.slice(0, visiblePosts);

  const hasMorePosts = !limit && visiblePosts < blogPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + postPerPage);
  };
  return (
    <section className="md:max-w-5xl md:mx-auto md:grid md:grid-cols-3 md:gap-2">
      {displayedPosts.map((post: Post) => (
        <Link
          to={`/blog/${post.id}`}
          className="block mt-4 cursor-pointer group hover:opacity-95 transition-opacity"
        >
          <article
            key={post.id}
            className="max-w-2xl mx-auto p-2 pt-2 bg-white text-black space-y-2 md:max-h-xl"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-64 object-cover"
            />
            <p className="uppercase text-sm my-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </article>
        </Link>
      ))}

      {showViewMore && hasMorePosts && (
        <div className="flex justify-center mb-4 md:w-5xl md:mx-auto">
          <button
            onClick={loadMorePosts}
            className=" text-black px-4 py-2 mb-4 underline font-bold cursor-pointer"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
