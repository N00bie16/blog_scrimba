import { useParams } from "react-router-dom";

import { blogPosts, heroPost } from "@/data";
import Posts from "@/components/Posts";
import NotFound from "@/pages/NotFound";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();

  const post =
    id === "hero" ? heroPost : blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <NotFound />;
  }
  return (
    <div className="max-w-2xl mx-auto px-4 py-4 bg-white text-black">
      <div className="space-y-4 leading-relaxed">
        <p className="uppercase text-sm mb-2">{post.date}</p>
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="mt-4">{post.content}</p>
      </div>
      <img src={post.image} alt={post.alt} className="mx-auto mt-8" />
      <article className="mt-8 space-y-4 leading-relaxed">
        <h2 className="text-xl font-bold py-4">
          How I stay committed to learning
        </h2>
        <p>
          I like to think of myself as a lifelong learner. I used to spend hours
          and hours learning, then try to create simple projects using what I
          learned or work new techniques into existing projects.
        </p>
        <p>
          While that was fun, I felt like it would be helpful to share what I
          was learning and most things about my journey with the world.
        </p>
        <h2 className="text-xl font-bold py-4">How I got started</h2>
        <p>
          I started simple and gradually grew my learning journal site. I would
          take notes about what I was learning. After each learning session, I'd
          use my notes to not only reflect on what I learned but also write
          short summaries of what I learned using my own words.
        </p>
        <p>
          That helped me grok what I was learning, and I realized that posting
          my learning summaries was also helping others learn and stay
          motivated.
        </p>
      </article>
      <h2 className="text-xl font-bold text-center mt-8">Recent Posts</h2>
      <Posts limit={3} showViewMore={false} />
    </div>
  );
}
