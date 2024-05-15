"use client"
import { useState } from "react";
import Collapsible from "./Collapsible";
import Lottie from "lottie-react";
import docter from "../assets/doctor.json"
import record from "../assets/record.json"
import instrument from "../assets/instruments.json"
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";


export interface Image {
  image1: boolean;
  image2: boolean;
  image3: boolean;
}

const openSans = Open_Sans({
  subsets: ["latin"]
})

export default function Accordian() {
  const [showImage, setShowImage] = useState<Image>({
    image1: false,
    image2: false,
    image3: false
  })
  return (
    <div className={cn("2xl:px-80 lg:px-28  md:px-24 px-6 py-16 w-full ", openSans.className)}>
      <h1 className="lg:text-3xl text-2xl font-medium max-w-4xl lg:leading-10 ">We are DiAtom Technologies, breathing life into healthcare through pioneering ventilators and revolutionary 3D printing that redefines regenerative medicine's possibilities.</h1>
      <div className="w-full py-24 flex gap-8">
        <div className="w-1/2 flex items-start justify-start z-10 max-lg:hidden">
          {showImage.image1 && <Lottie animationData={instrument} loop={true} className=" w-full " rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
          {showImage.image2 && <Lottie animationData={docter} loop={true} className="max-w-[30rem] w-full" rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
          {showImage.image3 && <Lottie animationData={record} loop={true} className="max-w-[25rem] w-full" rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
        </div>
        <div className="flex flex-col lg:w-1/2 w-full ">
          <h3 className="text-teal-600  w-full text-xl text-semibold">Our Business</h3>
          <Collapsible setShowImage={setShowImage} />
        </div>
      </div>
    </div>
  )
}
