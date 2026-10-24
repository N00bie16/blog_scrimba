export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white text-black">
      <div className="flex items-center space-x-2">
        <img src="/logo-icon.png" alt="Logo" width={50} height={50} />
        <p>My Learning Journal</p>
      </div>
      <nav className="space-x-4 uppercase font-medium">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
