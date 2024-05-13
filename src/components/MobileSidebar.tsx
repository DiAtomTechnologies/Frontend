import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";

interface MobileSidebar {
  isOpen: boolean;
}


const openSans = Open_Sans({
  subsets: ["latin"]
})



const boxVariants = {
  hidden: { y: -300 },
  visible: { y: 0 },
  exit: { y: -300 }
};

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]
const MobileSidebar: FC<MobileSidebar> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={cn("absolute bg-gray-100 w-full lg:hidden flex flex-col gap-7 pb-8 pt-2 md:px-24 px-6 ",openSans.className)}>
        {navLinks.map(data => {
          return (
            <div key={data.name} >
              <Link href={data.href} className="text-2xl font-medium hover:text-teal-500 duration-150 delay-150 transition-all " >{data.name}</Link>
            </div>
          )
        })}
        <hr/>
      </motion.div>
      }


    </AnimatePresence>
  )
}

export default MobileSidebar;
