"use client";
import Sidebar from "@/components/Sidebar";
import { Validate } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function validate() {
      const authenticated = await Validate();
      if (!authenticated) {
        router.push("/login");
      }
    }
    validate();
  }, []);
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
        <div className="pt-20">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
