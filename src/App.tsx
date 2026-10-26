import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PostDetail from "@/pages/PostDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}
