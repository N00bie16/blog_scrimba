export interface BlogPost {
  id: number | string;
  image: string;
  alt: string;
  date: string;
  title: string;
  content: string;
}

export const heroPost: BlogPost = {
  id: "hero",
  image: "hero.webp",
  alt: "Sunlit workspace representing the author's learning journey",
  date: "July 23, 2023",
  title: "My new journey as a bootcamp student",
  content:
    "After several months of learning, I am excited to share my progress with you. I've made the big jump from being a complete beginner to building my first React application.",
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "blog-one.webp",
    alt: "Code editor open on a frontend development project",
    date: "July 23, 2023",
    title: "Blog One",
    content:
      "After several months of learning, I am excited to share my progress with you. I've made the big jump from being a complete beginner to building my first React application.",
  },
  {
    id: 2,
    image: "blog-two.webp",
    alt: "Interface layout demonstrating utility-first CSS",
    date: "August 05, 2023",
    title: "Blog Two",
    content:
      "Utility-first CSS has completely changed how I build user interfaces. Here is why I stopped writing custom CSS and switched to Tailwind.",
  },
  {
    id: 3,
    image: "blog-three.webp",
    alt: "TypeScript source code on a development screen",
    date: "August 18, 2023",
    title: "Blog Three",
    content:
      "Adding types to JavaScript felt overwhelming at first, but catching errors before runtime makes the initial learning curve completely worth it.",
  },
  {
    id: 4,
    image: "blog-four.webp",
    alt: "Developer discussing server-side rendering concepts",
    date: "September 02, 2023",
    title: "Blog Four",
    content:
      "Exploring Server-Side Rendering (SSR) and App Router in Next.js. It bridges the gap between performance and developer experience seamlessly.",
  },
  {
    id: 5,
    image: "blog-five.webp",
    alt: "Application state management code example",
    date: "September 15, 2023",
    title: "Blog Five",
    content:
      "From useState and useReducer to Zustand and Redux Toolkit. Finding the right balance for managing global state in React apps.",
  },
  {
    id: 6,
    image: "blog-six.webp",
    alt: "Responsive grid and flexbox layout preview",
    date: "October 01, 2023",
    title: "Blog Six",
    content:
      "How to craft clean, mobile-first designs using CSS Grid and Flexbox with Tailwind's built-in breakpoint modifiers.",
  },
  {
    id: 7,
    image: "blog-three.webp",
    alt: "Data fetching and React application architecture",
    date: "October 20, 2023",
    title: "Blog Seven",
    content:
      "Fetching data efficiently using Fetch API, Axios, and React Query while properly handling loading states and error boundaries.",
  },
  {
    id: 8,
    image: "blog-four.webp",
    alt: "Performance tools for a frontend application",
    date: "November 10, 2023",
    title: "Blog Eight",
    content:
      "Tips on code splitting, lazy loading, useMemo, and useCallback to reduce bundle sizes and render times in production.",
  },
  {
    id: 9,
    image: "blog-five.webp",
    alt: "Completed frontend application displayed on a laptop",
    date: "December 05, 2023",
    title: "Blog Nine",
    content:
      "Reflecting on the entire journey of building, deploying, and optimizing my first full frontend application using React and Tailwind.",
  },
];
