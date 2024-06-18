"use client";

import { formatDate } from "@/components/BlogCard";
import Input from "@/components/Input";
import SkillChip from "@/components/SkillChip";
import { useToast } from "@/components/ui/use-toast";
import { Career } from "@/lib/career";
import { eventSchema } from "@/lib/zod";
import { notFound, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home({ params }: { params: { id: string } }) {
  const skills = [
    "Angular",
    "React",
    "Node.js",
    "Golang",
    "Python",
    "UI / UX",
    "Embedded C",
    "IOT",
    "AWS",
    "SMMA",
    "HR",
    "CAD",
  ];
  const { toast } = useToast();
  const router =  useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [workExperience, setWorkExperience] = useState<number>(0);
  const [career, setCareer] = useState<Career>();
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsUploading(true);
      const data = { firstName, lastName, email, phone, address };
      const validation = eventSchema.safeParse(data);
      let id = ""
      if (validation.error) {
        throw new Error(validation.error.toString());
      }

      if (
        (career?.worktype === "internship" || career?.worktype === "job") &&
        note.length === 0
      ) {
        throw new Error("note not found");
      }

      if (career?.worktype === "internship" || career?.worktype === "job") {
        if (!file) throw new Error("file not found");

        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("/api/upload-resume", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error("Resume upload failed");
        const data = await response.json();
        id = data.id
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/application`, {
        method : "POST",
        body : JSON.stringify({
          id,
          first_name : firstName,
          last_name  : lastName,
          email,
          phone,
          address,
          work_experience: workExperience,
          jobId : params.id,
          notes :note,
          skills
        })
      })

      if(!res.ok){
        throw new Error("Upload failed");
      }
      const responseData = await res.json();

      toast({
        title: responseData.response,
      });
      router.push("/")
      setIsUploading(false);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to upload data",
        description: "ensure all the fields are entered correctly",
      });
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/career/${params.id}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch career information");
        }
        const data: { status: string; response: Career } = await res.json();
        setCareer(data.response);
      } catch (err) {
        notFound();
      }
    };
    fetchData();
  }, []);

  if (!career) {
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="padding-x monts py-10 z-10">
      <h1 className="lg:text-6xl text-4xl font-semibold uppercase">
        {career.worktype} APPLICATION
      </h1>
      <div className="mt-10">
        <h2 className="text-2xl font-medium">{career.title}</h2>
        <h3 className=" mt-4 text-gray-700">{career.description}</h3>
        <div className="mt-4 flex gap-8 flex-wrap">
          <p className="font-medium uppercase">{career.location}</p>
          <div className="flex gap-2">
            <p className="font-medium ">END DATE:</p>
            <p>{formatDate(career.endDate)}</p>
          </div>
          {career.worktype === "internship" && (
            <div className="flex gap-2">
              <p>{career.duration} </p>
              <p>{career.durationType}</p>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 mt-12">
          <Input
            label="First Name"
            type="text"
            value={firstName}
            setValue={setFirstName}
            placeholder="John"
          />
          <Input
            label="Last Name (optional)"
            type="text"
            value={lastName}
            setValue={setLastName}
            placeholder="Doe"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="john@example.com"
          />
          <Input
            label="Phone"
            type="number"
            value={phone}
            setValue={setPhone}
            placeholder="1234567890"
          />
          <Input
            label="Address"
            type="text"
            value={address}
            setValue={setAddress}
            placeholder="xyz city"
          />
          {career.worktype === "job" && (
            <Input
              label="Work Experience"
              type="number"
              value={workExperience}
              setValue={setWorkExperience}
              placeholder="1"
            />
          )}
        </div>
        {(career.worktype === "job" || career.worktype === "internship") && (
          <div className="w-full mt-8">
            <h2 className="font-medium pl-2">What&apos;s your skill set?</h2>
            <div className="flex gap-4 mt-4 flex-wrap">
              {skills.map((skill) => (
                <SkillChip
                  key={skill}
                  skill={skill}
                  isSelected={selectedSkills.includes(skill)}
                  onSelect={handleSkillSelect}
                />
              ))}
            </div>
          </div>
        )}
        {(career.worktype === "job" || career.worktype === "internship") && (
          <label className="flex-col flex gap-3 mt-8">
            <span className="text-md font-medium pl-2">
              Tell us how you would be perfect for this role?
            </span>
            <textarea
              typeof="text"
              className="border border-gray-300 px-4 py-3 w-full rounded-md active:border-gray-700 min-h-40"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Tell us something..."
            />
          </label>
        )}
        {(career.worktype === "job" || career.worktype === "internship") && (
          <label className="flex-col flex gap-3 mt-8 md:w-[49%] w-full ">
            <span className="text-md font-medium pl-2">Resume</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mb-4 border border-gray-300 rounded-md py-2 px-4"
            />
          </label>
        )}
        <div className="w-full mt-8 flex justify-end">
          <button
            disabled={isUploading}
            className=" font-medium  px-6 py-3 text-white border border-white bg-black rounded-2xl hover:text-black hover:bg-white hover:border hover:border-gray-400 duration-300 delay-150 transition-all"
          >
            Start your journey with diatom
          </button>
        </div>
      </form>
    </div>
  );
}
