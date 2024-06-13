"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="h-full relative w-full">
      <div>
        {showSidebar && (
          <div className="fixed top-0 left-0 h-full z-[80]">
            <Sidebar setShowSidebar={setShowSidebar} />
          </div>
        )}
      </div>
      <div className="h-screen w-full relative">
        {!showSidebar && (
          <div className="absolute flex items-center pl-8 pt-4 cursor-pointer ">
            <IoMdMenu
              className="w-10 h-10 "
              onClick={() => setShowSidebar(true)}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
