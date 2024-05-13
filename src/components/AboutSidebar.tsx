import {motion , AnimatePresence} from "framer-motion"
import Link from "next/link";
import { FC } from "react"


interface AboutSidebar {
  viewAbout : boolean;
}
interface AboutDataType {
  heading: string;
  links: {
    name: string;
    href: string;
  }[]
}
const AboutData: AboutDataType[] = [
  {
    heading: "Who are we",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Business", href: ' "/about/business' }
    ],
  },
  {
    heading: "What we stand for",
    links: [
      { name: "Sustainability", href: "/about/sustainability" }
    ]
  }
]

const boxVariants = {
  hidden: { y: -300 },
  visible: { y: 0 },
  exit: { y: -300 }
};

const AboutSidebar : FC<AboutSidebar> = ({viewAbout}) =>{
  return (
    <AnimatePresence>
        {viewAbout && (
          <motion.div variants={boxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }} className="2xl:px-80 lg:px-32  md:px-24 px-6 z-20 w-full absolute py-20 bg-gray-100 flex max-lg:hidden">
            {AboutData.map(data => {
              return (
                <div className="w-1/3 min-w-2xl">
                  <h1 className=" text-teal-600 text-xl mb-4 font-medium">{data.heading}</h1>
                  <div className="flex flex-col gap-5 text-xl font-medium text-gray-700">
                    {(data.links).map(link => {
                      return (
                        <Link href={link.href} key={link.name} className="transition-all  duration-150 delay-100 hover:text-gray-500">{link.name}</Link>
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
