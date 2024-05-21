"use client";
import { BlogData } from "@/lib/blog";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={cn("padding-x w-full py-12 open-sans")}>
      <div className="flex justify-between items-center mb-16">
        <h3 className="text-4xl font-medium">Learn more about us</h3>
        <Link
          href="/blog"
          className="font-medium text-teal-600 text-lg hover:text-teal-400 duration-200 delay-150 transition-all"
        >
          See All Blogs
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-4">
        {BlogData.slice(0, 3).map((blog) => {
          return (
            <Link
              href={blog.href}
              className="flex-col flex gap-4 relative group py-4"
              key={blog.id}
            >
              <div className="overflow-hidden">
                <img
                  src={blog.blogImg}
                  alt="blog"
                  className="max-w-full transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-medium group-hover:text-teal-600 duration-200 delay-150 transition-all">
                {blog.title}
              </h4>
              <p className="font-medium text-gray-700 text-sm">{blog.date}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
