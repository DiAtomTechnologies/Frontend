import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-red-300"></div>
      <div className="h-screen w-full bg-green-400"></div>
      <div className="h-screen w-full"></div>
    </>
  );
}
