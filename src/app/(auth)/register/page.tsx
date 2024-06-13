"use client";
import Input from "@/components/Input";
import { Validate } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    async function validate() {
      const authenticated = await Validate();
      if (!authenticated) {
        router.push("/login");
      }
    }
    validate();
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"ADMIN" | "MANAGER">("MANAGER");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, role);
  };
  const options = ["MANAGER", "ADMIN"];
  return (
    <section className="w-full flex h-screen bg-[url('/bg4.jpg')] bg-no-repeat bg-center bg-cover  justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[650px] py-20 max-lg:w-full gap-6 flex flex-col justify-center items-center monts h-full bg-white"
      >
        <div className="w-full">
          <h2 className="lg:text-5xl text-3xl  font-bold text-center">
            ADD COLLEAGUE 🫂
          </h2>
        </div>
        <Input
          placeholder="john"
          label="Name"
          value={name}
          type="text"
          setValue={setName}
          className="max-w-xl w-9/12"
        />
        <Input
          placeholder="john@email.com"
          label="Email"
          value={email}
          type="text"
          setValue={setEmail}
          className="max-w-xl w-9/12"
        />
        <Input
          placeholder="........"
          label="Password"
          value={password}
          type="password"
          setValue={setPassword}
          className="max-w-xl w-9/12 "
        />
        <label className="flex-col flex gap-2 max-w-xl w-9/12 font-medium">
          Role
          <select
            className="bg-white active:border-gray-400 border-2 px-4 py-3 rounded-lg monts mb-6 "
            onChange={(e: any) => setRole(e.target.value)}
            value={role}
          >
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </label>
        <button
          type="submit"
          className="text-lg w-9/12 max-w-xl font-medium mt-4  px-8 py-4 text-white border border-white bg-black rounded-lg hover:text-black hover:bg-white hover:border hover:border-gray-400 duration-300 delay-150 transition-all"
        >
          Register
        </button>
      </form>
    </section>
  );
}
