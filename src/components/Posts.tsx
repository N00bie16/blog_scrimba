import { useEffect, useState } from "react";
import { blogPosts } from "@/data";
import { Link } from "react-router-dom";
import { getPublicAssetUrl } from "@/utils/assets";

interface PostsProps {
  limit?: number;
  showViewMore?: boolean;
}

export default function Posts({ limit, showViewMore = true }: PostsProps) {
  const getPostsPerPage = () =>
    typeof window !== "undefined" && window.innerWidth >= 768 ? 6 : 3;

  const [postsPerPage, setPostsPerPage] = useState(getPostsPerPage);
  const [visiblePosts, setVisiblePosts] = useState(limit ?? getPostsPerPage());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpointChange = () => {
      const nextPostsPerPage = getPostsPerPage();
      setPostsPerPage(nextPostsPerPage);
      if (!limit) {
        setVisiblePosts((current) => Math.max(current, nextPostsPerPage));
      }
    };
    handleBreakpointChange();
    mediaQuery.addEventListener("change", handleBreakpointChange);
    return () => mediaQuery.removeEventListener("change", handleBreakpointChange);
  }, [limit]);

  const displayedPosts = limit
    ? [...blogPosts].slice(-limit).reverse()
    : blogPosts.slice(0, visiblePosts);

  const hasMorePosts = !limit && visiblePosts < blogPosts.length;

  const loadMorePosts = () => {
    setVisiblePosts((current) => current + postsPerPage);
  };
  return (
    <section className="md:max-w-5xl md:mx-auto" aria-label="Blog posts">
      <ul id="blog-post-list" className="md:grid md:grid-cols-3 md:gap-2">
        {displayedPosts.map((post) => (
          <li key={post.id} className="list-none">
            <Link
              to={`/blog/${post.id}`}
              className="block mt-4 cursor-pointer group hover:opacity-95 transition-opacity"
              aria-label={`Read article: ${post.title}`}
            >
              <article className="max-w-2xl mx-auto p-2 pt-2 bg-white text-black space-y-2">
                <img
                  src={getPublicAssetUrl(post.image)}
                  alt={post.alt}
                  className="w-full h-64 object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
                <p className="uppercase text-sm my-2">{post.date}</p>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p>{post.content}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>

      {showViewMore && hasMorePosts && (
        <div className="flex justify-center mb-4 md:w-5xl md:mx-auto">
          <p className="sr-only" role="status" aria-live="polite">
            Showing {Math.min(visiblePosts, blogPosts.length)} of {blogPosts.length} posts
          </p>
          <button
            type="button"
            onClick={loadMorePosts}
            className="text-black px-4 py-2 mb-4 underline font-bold cursor-pointer"
            aria-controls="blog-post-list"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
