"use client"
import {motion} from "framer-motion"
import Link from "next/link";
import { FC } from "react";

interface product {
  name : string;
  price : number;
  link : string;
  imageSrc : string;
}

const Product : FC<product> = ({name,price,link, imageSrc}) => {
  return (
    <div className="md:w-[18rem] md:h-[32rem] w-[10rem] h-[18rem]  border-gray-400 overflow-hidden group relative rounded shadow-md border ">
      <motion.img
        src={imageSrc}
        alt="product1"
        className="absolute -z-50 group-hover:grayscale object-cover h-full w-full transition-all duration-700 group-hover:blur-sm"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full transition-all duration-700 group-hover:bottom-[80%]  "
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        whileHover={{ y: "-80%", transition: { duration: 0.7 } }}
      >
        <h1 className="monts md:text-4xl text-2xl text-center font-semibold bg-white group-hover:bg-opacity-0 transition-all py-2 bg-opacity-60 duration-500 delay-100 ease-in-out" >
          {name}
        </h1>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-700 delay-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      >
        <p className="text-3xl font-semibold monts flex gap-2 ">&#x20b9;<span>{price}</span></p>
        <Link
          href={link}
          className="absolute bottom-4 bg-white  bg-opacity-80 hover:bg-opacity-100 border monts font-medium hover:scale-110 transition-all duration-200 delay-100 ease-in-out py-4 px-8 rounded-md text-2xl"
        >
          Buy Now
        </Link>
      </motion.div>
    </div>
  );
};

export default Product;
