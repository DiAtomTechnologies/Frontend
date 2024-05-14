import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"]
})

const Hero = () => {

  return (
    <div className={cn("-z-50 lg:h-[70vh] h-[93vh] relative",openSans.className)}>
      <div className="w-full h-full bg-ovelay_black absolute top-0 -z-30"></div>
      <video autoPlay loop muted className="w-full h-full object-cover absolute -z-40">
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="2xl:px-80 lg:px-28  md:px-24 px-8 h-full py-20 flex items-end max-lg:items-center ">
        <h2 className="lg:text-7xl md:text-6xl text-4xl text-white font-semibold lg:max-w-4xl ">Applying the power of Science and Technology</h2>
      </div>
    </div>
  )
}

export default Hero;
