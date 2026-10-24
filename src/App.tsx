import Header from "@/components/Header";
import Posts from "@/components/Posts";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <article className="max-w-2xl mx-auto p-4 pt-8 bg-[url('/hero.jpg')] bg-cover bg-center text-white h-70">
          <div className="px-2 py-8">
            <p className="uppercase text-xs mb-2">July 23, 2023</p>
            <h1 className="text-3xl font-bold mb-2">
              My new journey as a bootcamp student
            </h1>
            <p>
              After several months of learning, I am excited to share my
              progress with you. I've made the big jump from being a complete
              beginner to building my first React application.
            </p>
          </div>
        </article>
      </main>
      <Posts />
      <footer className="bg-[#202020] text-white p-8 text-center h-24 ">
        <h4>My Learning Journal</h4>
        <p className="text-sm text-gray-400">Copyright &copy; 2023</p>
      </footer>
    </>
  );
}
