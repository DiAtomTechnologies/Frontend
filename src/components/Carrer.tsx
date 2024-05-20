import { Jobs } from "@/lib/career";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";


interface CareerType {
  jobs : Jobs[];
  title : string;
  className ?: string;
}
const Career : FC<CareerType> = ({jobs,title,className}) => {
  return (
    <div className=" py-10  flex flex-col gap-8" id="career">
        <h1 className="monts text-4xl font-bold">{title}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
          {jobs.map((job) => {
            return (
              <Link
                key={job.id}
                href={job.href}
                className={cn(" rounded-xl py-4 px-6 group  duration-200 delay-100 transition-colors ease-in-out ",className)}
              >
                <h4 className="font-semibold capitalize open-sans text-xl pb-2">
                  {job.title}
                </h4>
                <div className="flex gap-3 text-gray-600 monts pb-5 font-medium text-sm">
                  {job.location && <p className="uppercase">{job.location}</p>}
                  <p className="capitalize">{job.type}</p>
                  {job.duration && <p className="uppercase">{job.duration} {job.durationType}</p>}
                </div>
                <p className="text-black  ">
                  Apply Now
                </p>
              </Link>
            );
          })}
        </div>
      </div>
  )
}

export default Career;
