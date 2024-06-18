"use client";
import { Card } from "@/components/ui/card";
import { Validate } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { IconType } from "react-icons";
import { BsImage, BsArrowRightShort } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";

interface pageProps {}

interface route {
  label: string;
  icon: IconType;
  href: string;
  color: string;
  bgColor: string;
}
const routes: route[] = [
  {
    label: "Register",
    icon: FaRegUser,
    href: "/register",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Blogs",
    icon: BsImage,
    href: "/admin/blog",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    label: "Careers",
    icon: GrUserWorker,
    href: "/admin/career",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
];

const Page: FC<pageProps> = ({}) => {
 
  return (
    <div className={cn("w-full space-y-4 bg-white  monts ")}>
      <h1 className="text-2xl font-bold md:text-5xl text-center">
        Dashboard page
      </h1>
      <div className="px-4 md:px-20 lg:px-32 space-y-6 md:py-18 py-12 flex justify-center w-full h-auto flex-col items-center overflow-x-hidden">
        {routes.map((route) => (
          <Card
            className=" border border-slate-400 hover:bg-zinc-100 lg:w-[40rem] md:w-[30rem] sm:w-4/5 w-[90%] font-medium transition-all hover:-translate-y-2 duration-150 ease-in delay-100"
            key={route.href}
          >
            <a href={route.href}>
              <div className="flex item-center justify-between px-4 py-2 ">
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-lg text-xl flex justify-center items-center",
                      route.bgColor,
                      route.color,
                    )}
                  >
                    {<route.icon />}
                  </div>
                  <div className="text-md  flex items-center ">
                    <h3>{route.label}</h3>
                  </div>
                </div>
                <div className="text-2xl flex items-center">
                  <BsArrowRightShort />
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
