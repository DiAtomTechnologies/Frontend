'use client'

import { AnimatePresence, motion } from "framer-motion";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import AboutSidebar from "./AboutSidebar";
import { usePathname, useRouter } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"]
})

const navLinks = [
  { name: 'About DiAtom', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]


const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navbar = () => {
  const [viewAbout, setViewAbout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className={openSans.className}>
      <div className={cn("2xl:px-80 lg:px-32  md:px-24 px-6 z-30 pt-8 w-full bg-gray-100 flex justify-between lg:border-b-2 border-zinc-200 relative", isOpen ? "pb-6" : "pb-8")} >
        <div className="flex items-center gap-4 z-30 cursor-pointer" onClick={() => router.push("/")}>
          <img src="/logo.png" alt="logo" className="lg:w-14 w-12 h-auto" />
        </div>
        <div className="flex gap-12 items-center text-sm  max-lg:hidden" >
          {navLinks.map((item) => {
            return (
              <div className="flex gap-2 cursor-pointer font-medium group" key={item.name} >
                {item.name === "About DiAtom" ?
                  <div onClick={() => setViewAbout(!viewAbout)} className={cn("flex items-end relative", pathname.includes(item.href)  ?"text-teal-600 fill-teal-500" : "text-black")}>
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
              className="w-10 h-10 "
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
      <AboutSidebar viewAbout={viewAbout} />
      <MobileSidebar isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;

