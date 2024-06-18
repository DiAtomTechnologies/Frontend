"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

import { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsImage } from "react-icons/bs";

import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";

interface sidebarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface route {
  label: string;
  icon: IconType;
  href: string;
  color: string;
}

const routes: route[] = [
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    href: "/admin/dashboard",
    color: "text-orange-400",
  },
  {
    label: "Register",
    icon: FaRegUser,
    href: "/register",
    color: "text-violet-500",
  },
  {
    label: "Blogs",
    icon: BsImage,
    href: "/admin/blog",
    color: "text-teal-500",
  },
  {
    label: "Careers",
    icon: GrUserWorker,
    href: "/admin/career",
    color: "text-rose-500",
  },
];

const Sidebar: FC<sidebarProps> = ({ setShowSidebar }) => {
  const pathname: string = usePathname() || "";
  return (
    <div className="w-full h-screen absolute top-0 z-[80]">
      <div className="flex fixed flex-col h-full w-72 md:inset-y-0 bg-gray-950 ">
        <div className="flex flex-col py-4 h-full w-full text-white space-y-4 monts">
          <div className="py-2">
            <div className="flex items-center justify-between mb-12 px-7">
              <Link href="/" className="text-2xl font-bold ">
                Home
              </Link>
              <IoMdMenu
                className="w-8 h-8 cursor-pointer"
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <div className="space-y-2">
              {routes.map((route: route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "flex text-sm group py-3 w-full justify-start font-medium cursor-pointer rounded-xl items-center hover:bg-white/10 hover:text-white  pl-7 relative",
                    pathname === route.href
                      ? "text-white bg-white/10"
                      : "text-gray-400",
                  )}
                  onClick={() => setShowSidebar(false)}
                >
                  {pathname === route.href && (
                    <div className="absolute left-0 w-[4px] rounded-r-3xl rounded-e-3xl  h-6 bg-white"></div>
                  )}
                  <div className="flex items-center ">
                    {
                      <route.icon
                        className={cn("h-4 w-4 mr-3 ", route.color)}
                      />
                    }
                    <p className="text-sm">{route.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
