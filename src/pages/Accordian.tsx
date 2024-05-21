"use client"
import { useState } from "react";
import Lottie from "lottie-react";
import docter from "../assets/doctor.json"
import record from "../assets/record.json"
import instrument from "../assets/instruments.json"
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import Collapsible from "@/components/Collapsible";


export interface Image {
  image1: boolean;
  image2: boolean;
  image3: boolean;
}

export interface CollapsibleData {
  trigger : string;
  content : string;
  value : string;
  image_value : Image;
}



const collapsibleData : CollapsibleData[] = [
  { 
    value : "item-1",
    trigger : "Instruments",
    content : "Our innovative instruments revolutionize healthcare, providing life-sustaining ventilators and groundbreaking biological 3D printers. Breathing new life into respiratory care, our ventilators deliver precision and efficiency. Pioneering regenerative medicine, our 3D printers recreate human organs, restoring hope and redefining possibilities for countless lives.",
    image_value : {
      image1 : true,
      image2 : false,
      image3 : false,
    }

  },
  {
    value : "item-2",
    trigger : "Diagnosis",
    content : "There is an urgent need for better, more expansive health care—and we’re ready to meet it. Our Diagnostics businesses create tools and software designed to improve confidence in precise and rapid diagnoses.",
    image_value : {
      image1 : false,
      image2 : true,
      image3 : false,
    }
  },
  {
    
    value : "item-3",
    trigger : "Life Sciences",
    content : "In a world that’s ever-changing, our customers work to advance innovations that improve human health. Our Life Sciences businesses power tools and technologies that support our customers in a wide range of critical activities, whether it’s creating breakthrough cell and gene therapies, ensuring high-quality fluid filtration in labs, or driving the latest advances in molecular oncology.",
    image_value : {
       image3 : true,
       image2 : false,
       image1 : false,
    }
  }
]



export default function Accordian() {
  const [showImage, setShowImage] = useState<Image>({
    image1: true,
    image2: false,
    image3: false
  })
  return (
    <div className={cn("padding-x pt-24 w-full open-sans")}>
      <h1 className="lg:text-3xl text-2xl  lg:leading-10">We are DiAtom Technologies, breathing life into healthcare through pioneering ventilators and revolutionary 3D printing that redefines regenerative medicine&apos;s possibilities.</h1>
      <div className="w-full pt-24 pb-12 flex gap-8">
        <div className="w-1/2 flex items-start justify-start z-10 max-lg:hidden ">
          {showImage.image1 && <Lottie animationData={instrument} loop={true} className="mt-10 w-full " rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
          {showImage.image2 && <Lottie animationData={docter} loop={true} className="mt-10 max-w-[30rem] w-full" rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
          {showImage.image3 && <Lottie animationData={record} loop={true} className=" mt-10 max-w-[25rem] w-full" rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }} />}
        </div>
        <div className="flex flex-col lg:w-1/2 w-full lg:min-h-[40rem]">
          <h3 className="text-teal-600  w-full text-xl text-semibold">Our Business</h3>
          <Collapsible setShowImage={setShowImage} collapsibleData={collapsibleData}/>
        </div>
      </div>
    </div>
  )
}
