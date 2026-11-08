export default function Footer() {
  return (
    <footer className="bg-[#202020] text-white p-8 text-center md:max-w-5xl md:mx-auto mt-4">
      <p className="font-bold">My Learning Journal</p>
      <p className="text-sm text-gray-400">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
