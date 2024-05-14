import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="2xl:px-80 lg:px-28  md:px-24 px-6 py-16 w-full ">
        <h1 className="lg:text-3xl text-2xl font-medium max-w-4xl lg:leading-10 ">We are DiAtom Technologies. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</h1>
      </div>
      <div className="h-screen w-full"></div>
    </>
  );
}
