"use client"
import { useState } from "react";
import Collapsible from "./Collapsible";
import Lottie from "lottie-react";
import docter from "../assets/doctor.json"
import dna from "../assets/dna.json"
import record from "../assets/record.json"
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
    <div className={cn("w-full py-24 flex gap-8",openSans.className)}>
      <div className="w-1/2 flex items-center justify-start z-10 max-lg:hidden">
        {showImage.image1 && <Lottie animationData={docter} loop={true} className=" max-w-[30rem] " rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
        {showImage.image2 && <Lottie animationData={dna} loop={true} className="max-h-[30rem] h-full w-full max-w-[30rem] " rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
        {showImage.image3 && <Lottie animationData={record} loop={true} className="max-w-[25rem] w-full" rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
      </div>
      <div className="flex flex-col lg:w-1/2 w-full">
        <h3 className="text-teal-600  w-full text-xl text-semibold">Our Business</h3>
        <Collapsible setShowImage={setShowImage} />
      </div>
    </div>
  )
}
