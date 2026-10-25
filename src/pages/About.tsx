import Posts from "@/components/Posts";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-white text-black">
      <img
        src="/logo-icon.png"
        alt="Logo"
        width={40}
        height={40}
        className="mx-auto mt-8"
      />
      <div className="space-y-4 leading-relaxed">
        <h1 className="text-3xl font-bold mt-8">
          Hi there! My name is Reynaldi and welcome to my learning journal
        </h1>
        <p className="mt-4">
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the Bootcamp to get expert code
          reviews of my Solo Projects projects and meet like-minded peers.
        </p>
      </div>
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
