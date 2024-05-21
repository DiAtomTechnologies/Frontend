"use client";

import Lottie from "lottie-react";
import AboutAnimation from "@/assets/about.json";

export default function Home() {
  return (
    <section className="w-full relative  padding-x flex max-lg:flex-col items-center justify-between gap-4 py-10">
      <div className="p-4 overflow-auto">
        <Lottie
          animationData={AboutAnimation}
          className="object-cover w-full"
          loop={true}
        />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col justify-center gap-4 px-4 py-8">
        <h1 className="text-6xl w-full font-bold league">About Us</h1>
        <p className="font-large monts">
          Diatom Technologies is a forward-thinking medical device company
          committed to revolutionizing healthcare through our advanced
          ventilators and bioprinters. Established by a team of passionate
          engineers and scientists, we leverage cutting-edge technology to
          create life-saving solutions that improve patient outcomes. Our
          unwavering dedication to innovation drives us to continuously push the
          boundaries of what&apos;s possible, ensuring our products are at the
          forefront of medical technology.
        </p>
        <div className="w-full justify-content flex max-xl:flex-col gap-4 py-6">
          <div className="xl:w-1/2 w-full   ">
            <div className="me-4 text-primary flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-gear-fill w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </div>
            <div className="py-4 ">
              <h2 className="text-lg mb-3 font-medium open-sans">Transformative Medical Solutions</h2>
              <p className="text-base monts">
                At Diatom Technologies, we are crafting pioneering ventilators
                and bioprinters that redefine the boundaries of medical
                technology, transcending limitations and bringing life-changing
                solutions across all healthcare domains.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 w-full  ">
            <div className="me-4 text-primary flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-fire h-8 w-8"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
              </svg>
            </div>
            <div className="py-4">
              <h2 className="text-lg mb-3 font-medium open-sans">Our Moto</h2>
              <p className="text-base monts">
                Diatom Technologies is a forward-thinking medical device company
                committed to revolutionizing healthcare through our advanced
                ventilators and bioprinters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
