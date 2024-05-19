'use client'

import { AnimatePresence, motion } from "framer-motion";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import AboutSidebar from "./AboutSidebar";
import { usePathname, useRouter } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/navbar";

const openSans = Open_Sans({
  subsets: ["latin"]
})

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={cn("",openSans.className)} onClick={() => {
      if(showAbout) setShowAbout(false);
    }}>
      <div className={cn("lg:shadow-md padding-x  z-30 py-6 w-full bg-gray-100 flex justify-between  relative")} >
        <Link className="flex items-center gap-4 z-30 cursor-pointer" href="/">
          <img src="/logo.png" alt="logo" className=" w-12 h-auto" />
        </Link>
        <div className="flex gap-12 items-center text-sm  max-lg:hidden" >
          {navLinks.map((item) => {
            return (
              <div className="flex gap-2 cursor-pointer font-medium group" key={item.name} >
                {item.name === "About DiAtom" ?
                  <div onClick={() => setShowAbout(!showAbout)} className={cn("flex items-end relative", pathname.includes(item.href)  ?"text-teal-600 fill-teal-500" : "text-black")}>
                    <p className=" transition-all  duration-150 delay-100 group-hover:text-teal-600" >{item.name}</p>
                    <svg xmlns="http://www.w4.org/2000/svg" className="transition-all  relative top-[1px] duration-150 delay-150 group-hover:fill-teal-500" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                  </div>
                  :
                  <Link href={item.href} className={cn("transition-all  duration-150 delay-100 hover:text-teal-600", pathname === item.href ? "text-teal-600 fill-teal-500" : "text-black")}>{item.name}</Link>}
              </div>
            )
          })}
        </div>
        <div className="lg:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-8 h-8 "
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 1 }}
            >
              {!isOpen ? (

                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              ) : (
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              )}
            </motion.svg>
          </AnimatePresence>
        </div>

      </div>
      <AboutSidebar showAbout={showAbout} />
      <MobileSidebar isOpen={isOpen} showAbout={showAbout} setShowAbout={setShowAbout} />
    </nav>
  );
};

export default Navbar;

