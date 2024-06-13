import { blog as BlogType, calulateTime } from "@/lib/blog";
import Markdown from "react-markdown";
import Blog from "@/pages/Blog";
import { notFound } from "next/navigation";

const fetchData = async (id: string) => {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const res = await fetch(`${backend}/blog/${id}`,{
    next : {revalidate : 3600}
  });
  const data: { status: string; response: BlogType | string } = await res.json();
  if(data.status === "failed"){
    notFound();
  }
  return data.response as BlogType;
};

export default async function Home({ params }: { params: { id: string } }) {
  const blog = await fetchData(params.id);
  
  return (
    <>
      <div className="padding-x lg:pt-20 py-10 w-full ">
        <h1 className="md:text-5xl text-4xl font-bold open-sans md:leading-[4rem] ">
          {blog.heading}
        </h1>
        <div className="w-full my-8 max-h-[600px] overflow-hidden flex items-center">
          <img
            src={blog.imgurl}
            alt="blog background"
            className="object-cover object-center"
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-md font-semibold capitalize">
            Author: {blog.author}
          </p>
          <p className="font-semibold text-md">
            {calulateTime(blog.content)} Min Read
          </p>
          <p className="text-[10px] border-[1.8px] rounded-xl inline px-2 py-1  border-black font-semibold">
            {blog.tag}
          </p>
        </div>

        <Markdown className={"prose-lg pt-10 monts"}>{blog.content}</Markdown>
      </div>
      <Blog id={params.id} tag={blog.tag} />
    </>
  );
}
