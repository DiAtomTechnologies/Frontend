import Accordian from "@/components/Accordian";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Accordian/>
      <Features/> 
      <div className="h-screen w-full"></div>
    </>
  );
}
