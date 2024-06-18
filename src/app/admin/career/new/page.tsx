"use client";
import Input from "@/components/Input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [applicationTime, setApplicationTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [location, setLocation] = useState<string>("Remote");
  const [career, setCareer] = useState<string>("job");
  const [durationType, setDurationType] = useState<string>("day");
  const [description, setDescription] = useState<string>("");
  const locations = ["Remote", "Chennai", "Bangalore"];
  const careers = ["job", "internship", "event"];
  const durationTypes = ["day", "days", "week", "weeks", "month", "months"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (title.length === 0 || applicationTime < 0 || duration < 0)
        throw new Error("Invalid inputs");

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/career/`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          title,
          worktype: career,
          location,
          duration : `${duration}`,
          durationType,
          applicationTime: `${applicationTime}`,
          description,
        }),
      });
      const data = await res.json();
      console.log(data)
      if (!res.ok) throw Error("Failed to upload");
      
      toast({
        title: "Uploaded successfully",
      });
      router.push("/admin/career");
    } catch (err) {
      console.error(err)
      toast({
        variant: "destructive",
        title: "Failed to upload",
      });
    }
  };

  return (
    <div className="padding-x monts">
      <h1 className="uppercase text-5xl font-bold">New Career</h1>
      <div className="pt-10">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mt-12">
            <Input
              label="Title"
              type="text"
              value={title}
              setValue={setTitle}
              placeholder="Software engineer"
            />
            <Input
              label="Application Time"
              type="number"
              value={applicationTime}
              setValue={setApplicationTime}
              placeholder="123"
            />
            <label className="flex-col flex gap-2 w-full font-medium">
              Location
              <select
                className="bg-white active:border-gray-400 border-2 px-4 py-3 rounded-lg monts mb-6 "
                onChange={(e: any) => setLocation(e.target.value)}
                value={location}
              >
                {locations.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </label>

            <label className="flex-col flex gap-2 w-full font-medium">
              Career Type
              <select
                className="bg-white active:border-gray-400 border-2 px-4 py-3 rounded-lg monts mb-6 "
                onChange={(e: any) => setCareer(e.target.value)}
                value={career}
              >
                {careers.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </label>
          </div>
          <label className="flex-col flex gap-2">
            <span className="text-md font-medium pl-2">Description</span>
            <textarea
              typeof="text"
              className="border border-gray-300 px-4 py-3 w-full min-h-32 rounded-md active:border-gray-700"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us something..."
            />
          </label>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mt-12">
            {career !== "job" && (
              <Input
                label="Duration"
                type="number"
                value={duration}
                setValue={setDuration}
                placeholder="123"
              />
            )}
            {career !== "job" && (
              <label className="flex-col flex gap-2 w-full font-medium mb-10">
                Duration Type
                <select
                  className="bg-white active:border-gray-400 border-2 px-4 py-3 rounded-lg monts mb-6 "
                  onChange={(e: any) => setDurationType(e.target.value)}
                  value={durationType}
                >
                  {durationTypes.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </select>
              </label>
            )}
          </div>

          <div className="w-full flex justify-end pb-10">
            <button
              type="submit"
              className="text-lg  font-medium mt-4  px-8 py-4 text-white border border-white bg-black rounded-lg hover:text-black hover:bg-white hover:border hover:border-gray-400 duration-300 delay-150 transition-all"
            >
              Add New Career
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
