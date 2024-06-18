"use client";
import Input from "@/components/Input";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Markdown from "react-markdown";

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [heading, setHeading] = useState<string>("");
  const [tag, setTag] = useState<string>("TECHNOLOGY");
  const [content, setContent] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const tags = ["TECHNOLOGY", "INNOVATION"];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "image/jpeg") {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
    console.log(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!file) throw new Error("file not found");

      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Resume upload failed");
      const data = await response.json();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/`,
        {
          method: "POST",
          credentials: "include",
          body : JSON.stringify({
            imgurl : data.imgurl,
            heading,
            tag,
            description,
            content
          })
        },
      );
      const resData = await res.json();
      if (!res.ok) throw Error("Failed to upload");

      toast({
        title: resData.response,
      });
      router.push("/admin/blog")
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Failed to upload",
      });
    }
  };

  return (
    <div className="padding-x monts">
      <h1 className="uppercase text-5xl font-bold">New Blog</h1>
      <div className="pt-10">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mt-12">
            <Input
              label="Heading"
              type="text"
              value={heading}
              setValue={setHeading}
              placeholder="The blog"
            />
            <label className="flex-col flex gap-2 w-full font-medium">
              Location
              <select
                className="bg-white active:border-gray-400 border-2 px-4 py-3 rounded-lg monts mb-6 "
                onChange={(e: any) => setTag(e.target.value)}
                value={tag}
              >
                {tags.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </label>
          </div>
          <label className="flex-col flex gap-2">
            <span className="text-md font-medium pl-2">Description</span>
            <textarea
              typeof="text"
              className="border border-gray-300 px-4 py-3 w-full min-h-32 rounded-md active:border-gray-700"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us something..."
            />
          </label>
          <label className="flex-col flex gap-2 mt-6 mb-2">
            <div className="flex gap-4 items-center">
              <span className="text-md font-medium pl-2">Content</span>
              <p
                onClick={() => setShowPreview(!showPreview)}
                className={cn(
                  "px-4 py-1 hover:scale-105 transition-all duration-200 border-2  rounded-xl",
                  showPreview ? "bg-black text-white" : "bg-white",
                )}
              >
                Preview
              </p>
            </div>
          </label>
          {showPreview ? (
            <Markdown className="prose-lg w-full border-2 md:h-[700px] h-[500px] px-4 py-10  overflow-y-scroll">
              {content}
            </Markdown>
          ) : (
            <textarea
              typeof="text"
              className="border border-gray-300 px-4 py-3 w-full md:h-[700px] h-[500px]  resize-none active:border-gray-700"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write in markdown format"
            />
          )}
          <label className="flex-col flex gap-3 mt-8 md:w-[49%] w-full ">
            <span className="text-md font-medium pl-2">Blog Image</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 border border-gray-300 rounded-md py-2 px-4"
            />
          </label>
          <div className="w-full flex justify-end pb-10">
            <button
              type="submit"
              className="text-lg  font-medium mt-4  px-8 py-4 text-white border border-white bg-black rounded-lg hover:text-black hover:bg-white hover:border hover:border-gray-400 duration-300 delay-150 transition-all"
            >
              Add New Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
