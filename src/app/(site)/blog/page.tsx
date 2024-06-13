import BlogCard from "@/components/BlogCard";
import { blog, formatDate } from "@/lib/blog";
import Link from "next/link";

const fetchData = async () => {
  try {
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${backend}/blog/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const resData: { status: number; response: blog[] } = await res.json();
    if(resData.response.length == 0) {
      throw new Error("No Blog Found")
    }
    return resData.response;
  } catch (err) {
    return null;
  }
};

export default async function Home() {
  const data = await fetchData();

  if (!data) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        Currently no blogs found
      </div>
    );
  }
  return (
    <>
      <section className="w-full padding-x lg:pt-20 lg:pb-12 pt-10 pb-6 flex flex-col monts">
        <p className="text-md font-medium text-center mb-2">the blog</p>
        <h1 className="md:text-6xl text-4xl monts mb-6 font-semibold text-center">
          Writings from our team
        </h1>
        <p className="text-center ">
          The latest industry news, interviews, technologies and resources.
        </p>
        <Link
          href={`/blog/${data[0].id}`}
          className="flex flex-col justify-end items-start p-8 gap-3 relative w-full mt-10 mb-14 h-[70vh] max-h-[38rem] group monts text-white overflow-clip"
        >
          <img
            src={data[0].imgurl}
            className="w-full h-full object-cover object-center absolute inset-0 -z-50 group-hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70 transition-all ease-in-out duration-150 delay-150 -z-30"
            aria-hidden="true"
          />
          <div className="w-full ">
            <p className="font-semibold text-sm inline">{data[0].author}</p>
            <p className="font-bold text-xl inline mx-2">.</p>
            <p className="font-semibold inline text-sm">
              {formatDate(data[0].created_at)}
            </p>
          </div>
          <h3 className="text-2xl font-semibold w-full">{data[0].heading}</h3>
          <h4 className="text-gray-200 w-full">{data[0].description}</h4>
          <p className="text-[12px] border-[1.8px] rounded-2xl inline px-2 py-1  border-white ">
            {data[0].tag}
          </p>
        </Link>
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
          {data.slice(1).map((blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </div>
      </section>
    </>
  );
}
