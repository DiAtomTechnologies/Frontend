import { boxVariants } from "@/lib/animation";
import { AboutData } from "@/lib/navbar";
import { cn } from "@/lib/utils";
import {motion , AnimatePresence} from "framer-motion"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react"


interface AboutSidebar {
  showAbout : boolean;
}


const AboutSidebar : FC<AboutSidebar> = ({showAbout}) =>{
  const pathname = usePathname();
  return (
    <AnimatePresence>
        {showAbout && (
          <motion.div variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5, ease: 'easeInOut' }} className="2xl:px-80 lg:px-32  md:px-24 px-6 z-20 w-full absolute py-16 bg-gray-100 flex max-lg:hidden">
            {AboutData.map(data => {
              return (
                <div className="w-1/3 min-w-2xl" key={data.heading}>
                  <h1 className=" text-teal-600 text-lg mb-7 font-medium">{data.heading}</h1>
                  <div className="flex flex-col gap-7 text-2xl font-medium text-gray-700">
                    {(data.links).map(link => {
                      return (
                        <Link href={link.href} key={link.name} className={cn("transition-all duration-150 delay-100 hover:text-teal-600", pathname === link.href ? "text-teal-600" : "")}>{link.name}</Link>
                      )
                    })}
                  </div>
                </div>

              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default AboutSidebar;
