"use client";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const backend = process.env.NEXT_PUBLIC_BACKEND_URL as string;
      const res = await fetch(`${backend}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to authenticate");
      }
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="w-full flex h-screen bg-[url('/bg3.jpg')] bg-no-repeat bg-center bg-cover justify-center">
      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-[650px] py-20 max-lg:w-full gap-6 flex flex-col justify-center items-center monts h-full bg-white"
      >
        <div className="w-full">
          <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold text-center">
            WELCOME BACK 👋
          </h2>
          <p className="md:text-lg text-sm text-gray-800 text-center mt-8  px-8">
            Please enter your credentials provided by the admin
          </p>
        </div>
        <Input
          placeholder="email"
          label="Email"
          value={email}
          type="text"
          setValue={setEmail}
          className="max-w-xl w-9/12"
        />
        <Input
          placeholder="password"
          label="Password"
          value={password}
          type="password"
          setValue={setPassword}
          className="max-w-xl w-9/12 "
        />
        <button
          type="submit"
          className="text-lg w-9/12 max-w-xl font-medium mt-4  px-8 py-4 text-white border border-white bg-black rounded-lg hover:text-black hover:bg-white hover:border hover:border-gray-400 duration-300 delay-150 transition-all"
        >
          Login
        </button>
        <p className="w-full text-center text-gray-800 px-8 text-sm">
          If you are not the website&apos;s admin or manager naviage back to{" "}
          <Link href="/" className="underline">
            Home
          </Link>
        </p>
      </form>
    </section>
  );
}
