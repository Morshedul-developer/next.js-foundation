import Link from "next/link";

const BlogsPage = () => {
    const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 16",
    author: "Nijhum Khandoker",
    category: "Web Development",
    image: "/images/blog1.jpg",
    date: "2026-04-21",
    readTime: "5 min read",
    description:
      "Learn the basics of Next.js 16 including routing, layouts, and server components."
  },
  {
    id: 2,
    title: "Why Tailwind CSS is Popular in 2026",
    author: "Nijhum Khandoker",
    category: "CSS",
    image: "/images/blog2.jpg",
    date: "2026-04-18",
    readTime: "4 min read",
    description:
      "Explore why developers love Tailwind CSS for building responsive and modern UI."
  },
  {
    id: 3,
    title: "Top React Project Ideas for Beginners",
    author: "Nijhum Khandoker",
    category: "React",
    image: "/images/blog3.jpg",
    date: "2026-04-15",
    readTime: "6 min read",
    description:
      "Build your skills with React project ideas to improve state management and components."
  },
  {
    id: 4,
    title: "Freelancing Tips for New Developers",
    author: "Nijhum Khandoker",
    category: "Career",
    image: "/images/blog4.jpg",
    date: "2026-04-10",
    readTime: "7 min read",
    description:
      "Practical tips for developers who want to start freelancing and get clients."
  }
];
    return (
        <div>
            <h2 className="text-5xl font-bold">Blogs</h2>
            {
                blogs.map(blog => <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <Link className="btn" href={`/blogs/${blog.id}`}>Show details</Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;