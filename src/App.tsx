import { lazy, Suspense, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "@/pages/Layout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const PostDetail = lazy(() => import("@/pages/PostDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageLoader({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<p className="p-4 text-center" role="status">Loading...</p>}>
      {children}
    </Suspense>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PageLoader><Home /></PageLoader>} />
        <Route path="/about" element={<PageLoader><About /></PageLoader>} />
        <Route
          path="/blog/:id"
          element={<PageLoader><PostDetail /></PageLoader>}
        />
        <Route path="*" element={<PageLoader><NotFound /></PageLoader>} />
      </Route>
    </Routes>
  );
}
