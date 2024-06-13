import BlogCard from "@/components/BlogCard";
import { blog } from "@/lib/blog";
import Link from "next/link";

const fetchData = async (id: string | undefined, tag: string | undefined) => {
  try {
    let query;
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL
    if (id) {
      query = `${backend}/blog/?limit=3&id=${id}&tag=${tag}`;
    } else {
      query = `${backend}/blog/?limit=3`;
    }
    const res = await fetch(query, {
      next: { revalidate: 60 },
    });
    const blogData: { status: number; response: blog[] } = await res.json();
    if (blogData.response.length == 0) {
      throw new Error("No Blog Found");
    }
    return blogData.response;
  } catch (err) {
    return null;
  }
};

const Blog = async ({ id, tag }: { id?: string; tag?: string }) => {
  let data = await fetchData(id, tag);

  if (!data) {
    return (
      <div className="padding-x">
        <div className="flex justify-between items-center">
          <h3 className="text-4xl font-medium">
            {!id ? "Learn more about us" : "Related Articles"}
          </h3>
          <Link
            href="/blog"
            className="font-medium text-teal-600 text-lg hover:text-teal-400 duration-200 delay-150 transition-all"
          >
            See All Blogs
          </Link>
        </div>
        <div className="w-full h-60  flex items-center justify-center text-gray-600">
          Currently no {id && "related"} blogs found...
        </div>
      </div>
    );
  }

  return (
    <div className="padding-x w-full py-12 open-sans">
      <div className="flex justify-between items-center mb-16">
        <h3 className="text-4xl font-medium">
          {id ? "Related Articles" : "Learn more about us"}
        </h3>
        <Link
          href="/blog"
          className="font-medium text-teal-600 text-lg hover:text-teal-400 duration-200 delay-150 transition-all"
        >
          See All Blogs
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
        {data.map((item) => {
          return <BlogCard blog={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
