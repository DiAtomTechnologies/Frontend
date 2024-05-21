import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { IconType } from "react-icons";
import { TfiInfinite } from "react-icons/tfi";
import { GiBrain } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import { VscBeaker } from "react-icons/vsc";

interface Feature {
  id: number;
  icon: IconType;
  heading: string;
  context: string;
  linkText: string;
  href: string;
}

const openSans = Open_Sans({
  subsets: ["latin"]
})


const features: Feature[] = [
  {
    id: 1,
    icon: VscBeaker,
    heading: "Breathe of Innovation",
    context: "At our core, we strive to develop cutting-edge ventilators that revolutionize respiratory care, enabling patients to breathe easier and healthcare professionals to deliver life-saving treatments with precision and efficiency.",
    linkText: "See how we work",
    href: "/about/business"
  },
  {

    id: 2,
    icon: GiBrain,
    heading: "Bridging Science and Technology",
    context: "We are dedicated to breaking down barriers and fostering collaborations that unite academia, industry, and medical institutions. Our partnership initiatives facilitate the exchange of knowledge and expertise, driving advancements in healthcare technology.",
    linkText: "See what we stand-for",
    href: "/about/sustainablity"
  },
  {
    id: 3,
    icon: TfiInfinite,
    heading: "Diversifying Lifelines",
    context: "Our focused acquisition strategy fuels our growth, enabling us to integrate innovative technologies and incorporate fresh perspectives from talented minds. This strategic approach fortifies our position as a leader in life-saving solutions.",
    linkText: "See our carrers",
    href: "/careers"
  },
  {
    id: 4,
    icon: GiMaterialsScience,
    heading: "Redefining Possibilities, Restoring Lives",
    context: "We pioneer groundbreaking developments in biological 3D printing, enabling the recreation of human organs and paving the way for transformative regenerative therapies. Our relentless pursuit is to create the foundations that will redefine healthcare and restore countless lives.",
    linkText: "See our products",
    href: "/products"
  },
]

const Features = () => {
  return (
    <div className={cn("padding-x py-12", openSans.className)}>
      <h2 className="text-3xl pt-10 pb-24 font-medium">Revolutionizing Healthcare, Embracing Life</h2>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-6">
        {features.map((feature: Feature) => {
          return (
            <div className=" w-full flex flex-col gap-4 group/feature" key={feature.id}>
              <feature.icon className="w-16 h-16 mb-4 group-hover/feature:text-teal-800 duration-200 delay-100 transition-colors" />
              <h4 className="text-2xl font-medium group-hover/feature:text-teal-600 duration-200 delay-100 transition-colors">{feature.heading}</h4>
              <p className="monts font-normal">{feature.context}</p>
              <Link href={feature.href} className="mt-4 group/link flex gap-2 items-center" >
                <span className="text-teal-600 font-medium group-hover/link:text-teal-500 duration-150 delay-150 transition-colors">{feature.linkText}</span>
                <span className="text-teal-600 group-hover/link:translate-x-2 group-hover/link:text-teal-500 transition-all duration-200 delay-100 font-bold">→</span>
              </Link>
            </div>

          )
        })
        }
      </div>
    </div>
  )
}

export default Features;
