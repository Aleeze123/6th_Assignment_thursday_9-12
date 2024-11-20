import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-10 md:py-10">
        <div className="flex flex-col justify-center max-w-xl md:max-w-2xl text-center md:text-left">
          <h1 className="font-roboto text-3xl md:text-5xl font-bold leading-tight md:leading-[67.2px]">
            Learn new skill online with ease
          </h1>
          <p className="text-sm md:text-base font-normal mt-4">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-black text-white py-1 px-3 rounded cursor-pointer mb-4 md:mb-0 text-sm md:text-base">
              Start learning now
            </button>
            <button className="bg-white text-black py-1 px-3 border border-black rounded cursor-pointer text-sm md:text-base">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-[640px]">
          <Image
            src="/images/figma.svg"
            alt="Banner Image"
            width={720}
            height={900}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
