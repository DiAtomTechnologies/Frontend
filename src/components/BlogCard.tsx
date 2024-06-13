import { blog } from "@/lib/blog";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${month} ${year}`;
};

const BlogCard = ({ blog }: { blog: blog }) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="flex-col flex relative gap-1 group pb-6 pt-4 px-2 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out  "
      key={blog.id}
    >
      <div className="overflow-hidden rounded-xl">
        <img src={blog.imgurl} alt="blog" className="w-full" />
      </div>
      <div className="w-full mt-6 relative monts pl-1">
        <p className="font-semibold text-sm inline">{blog.author}</p>
        <p className="font-bold text-xl inline mx-2">.</p>
        <p className="font-semibold inline text-sm">
          {formatDate(blog.created_at)}
        </p>
      </div>
      <div className="flex justify-between monts pl-1">
        <h3 className="text-xl font-semibold ">{blog.heading}</h3>
        <div className="min-w-6 flex justify-end">
          <IoMdArrowDown className="-rotate-[135deg] text-xl group-hover:text-2xl transition-all delay-100 duration-200" />
        </div>
      </div>
      <p className="mt-1 pl-1">{blog.description}</p>
      <div className="monts font-semibold mt-2 pl-1">
        <p className="text-[10px] border-[1.7px] rounded-xl inline px-2 py-1  border-black">
          {blog.tag}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
