"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { blog as Blog, formatDate } from "@/lib/blog";
import { Career } from "@/lib/career";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState<Blog[]>();
  const { toast } = useToast();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/`,
        );
        if (!res.ok) throw Error("Fetch failed");
        const data: { status: string; response: Blog[] } = await res.json();
        setData(data.response);
      } catch (err) {
        toast({
          variant: "destructive",
          title: "failed to fetch data",
          description: "Try visiting later",
        });
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (blog: Blog) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${blog.id}`,
        {
          method: "DELETE",
          credentials: "include"
        },
      );
      if (!res.ok) throw new Error("Failed to delete");

      const rem: Blog[] = data!.filter((item) => item.id != blog.id);
      setData(rem);
      toast({
        title: "Career deleted successfully",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Unable to delete",
      });
    }
  };

  if (!data) {
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="padding-x monts">
      <div className="flex justify-between items-center">
        <h2 className="md:text-5xl text-3xl font-bold">Blogs</h2>
        <Link
          href="/admin/blog/new"
          className="px-6 py-3 bg-black rounded-xl hover:bg-gray-700 transition-all duration-100 ease-in-out text-white text-lg"
        >
          Add
        </Link>
      </div>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">S.NO</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-center w-[100px]">Type</TableHead>
            <TableHead className="text-center w-[100px]">Created at</TableHead>
            <TableHead className="text-center w-[100px]">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className="w-[50px] text-center py-4">
                  {idx + 1}
                </TableCell>
                <TableCell className="truncate">{item.heading}</TableCell>
                <TableCell className="text-center w-[100px]">
                  {item.author}
                </TableCell>
                <TableCell className="text-center w-[150px]">
                  {formatDate(item.created_at)}
                </TableCell>
                <TableCell className="text-center w-[100px] flex items-center justify-center py-4">
                  <FaRegTrashAlt className="w-5 h-5 hover:text-red-600 transition-all duration-100 ease-in-out cursor-pointer" onClick={() => handleDelete(item)} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
