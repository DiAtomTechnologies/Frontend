"use client";
import Lottie from "lottie-react";
import career from "@/assets/career.json";

import Link from "next/link";
import Career from "@/components/Career";
import { careerData, internships, jobs, training } from "@/lib/career";




export default function Home() {
  return (
    <div className="padding-x w-full ">
      <div className="flex justify-between max-lg:flex-col-reverse py-10">
        <div className="flex flex-col justify-center items-start gap-6 ">
          <h1 className="text-xl open-sans font-medium">
            Careers at DiAtom Technologies
          </h1>
          <h2 className="uppercase md:text-6xl text-4xl font-bold open-sans">
            work with us
          </h2>
          <p className="md:text-xl text-lg max-w-xl text-gray-600 monts">
            Explore remote-friendly, flexible opportunities and join our mission
            to make work life simpler, more pleasant and more productive.
          </p>
          <Link
            href="/careers#career"
            className="text-md font-medium bg-black px-6 py-3 text-white rounded-full open-sans hover:-translate-y-1 duration-200 delay-100 ease-in-out transition-all"
          >
            View Careers
          </Link>
        </div>
        <Lottie
          animationData={career}
          loop
          className="w-full  lg:max-w-md"
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
      </div>
      <div className="py-10 flex flex-col items-center gap-8">
        <h2 className="text-4xl  md:text-center open-sans ">
          Embark on a career that breathes life into innovation
        </h2>
        <p className="text-lg md:text-center max-w-4xl monts">
          At Diatom Technologies, we foster a dynamic and collaborative work
          environment that encourages innovation and professional growth. Our
          team comprises highly skilled and passionate individuals who are
          dedicated to pushing the boundaries of respiratory care technology.
        </p>
        <div className="w-full grid md:grid-cols-3 gap-4 pt-14 max-md:grid-col-1">
          {careerData.map((career) => {
            return (
              <div key={career.id} className="flex flex-col gap-6">
                <career.icon className="pl-2 w-16 h-16" />
                <h3 className="text-xl open-sans font-semibold">
                  {career.heading}
                </h3>
                <p className="text-md monts">{career.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Career title="See our open positions" jobs={jobs} className="bg-violet-100 hover:bg-violet-200" />
      <Career title="See our Internships" jobs={internships} className="bg-teal-100 hover:bg-teal-200"/>
      <Career title="Learning Events and Webinars" jobs={training} className="bg-rose-100 hover:bg-rose-200"/>
    </div>
  );
}
