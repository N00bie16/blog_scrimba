import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <article className="max-w-2xl mx-auto p-4 pt-8 bg-[url('/hero.jpg')] bg-cover bg-center text-white h-70">
        <div className="px-2 py-8">
          <p className="uppercase text-xs mb-2">July 23, 2023</p>
          <h1 className="text-3xl font-bold mb-2">
            My new journey as a bootcamp student
          </h1>
          <p>
            After several months of learning, I am excited to share my progress
            with you. I've made the big jump from being a complete beginner to
            building my first React application.
          </p>
        </div>
      </article>
      <Posts />
    </main>
  );
}
