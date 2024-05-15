"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Image } from "./Accordian";
import { FC } from "react";

interface CollapsibleData {
  trigger : string;
  content : string;
  value : string;
  image_value : Image;
}

interface Collapsible {
  setShowImage : React.Dispatch<React.SetStateAction<Image>>;
}

const collapsibleData : CollapsibleData[] = [
  { 
    value : "item-1",
    trigger : "Bio technology",
    content : "Advancements in healthcare and medicine are moving at an unprecedented pace with a promising pipeline of innovative drugs on the horizon that are more targeted, personalized, and effective than ever before. Our Biotechnology business brings expertise, technologies, and services that accelerate the development and commercialization of these life-changing therapies, ensuring that they can be delivered quickly and safely to the patients who need them.",
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


const Collapsible : FC<Collapsible> = ({setShowImage}) => {
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {collapsibleData.map(data => {
        return (
          <AccordionItem value={data.value} key={data.value} className="py-4 gap-4 group" onClick={() => setShowImage(data.image_value)}>
            <AccordionTrigger className="text-2xl group-hover:text-teal-600 duration-150 delay-150 transition-colors">{data.trigger}</AccordionTrigger>
            <AccordionContent className="text-lg">{data.content}</AccordionContent>
          </AccordionItem>
        )
      })}
   </Accordion>        
  )
}

export default Collapsible;
