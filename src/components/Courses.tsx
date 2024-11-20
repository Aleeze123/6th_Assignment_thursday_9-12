import React from 'react';
import Image from 'next/image';

const Courses = () => {
  return (
    <div className='h-auto w-full flex flex-col items-center justify-center my-10 bg-white'>
      <h1 className="font-roboto font-bold text-[32px] sm:text-[56px] leading-[40px] sm:leading-[67.2px] text-center">
        Courses
      </h1>
      <p className="font-roboto font-normal text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-center mt-4">
        Your Ultimate Guide to learning
      </p>

      <div className="flex space-x-4 mt-6">
        <button className="w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] p-2 border-b-2 border-black text-black text-center font-medium">
          Popular
        </button>
        <button className="w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] p-2 border-b-2 border-black text-black text-center font-medium">
          Recommended
        </button>
        <button className="w-[100px] sm:w-[120px] h-[35px] sm:h-[40px] p-2 border-b-2 border-black text-black text-center font-medium">
          Best Price
        </button>
      </div>
      <div className="mt-10 w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" bg-[#F7F7F7] rounded-md p-4">
            <Image src="/images/course1.jpeg" alt="course1" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Design</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">UX/UI Design 201</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4">
            <Image src="/images/course2.jpeg" alt="course2" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Programming</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Introduction to Python</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4">
            <Image src="/images/course3.jpeg" alt="course3" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Business</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Data Analysis for Beginners</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className=" bg-[#F7F7F7] rounded-md p-4 sm:block hidden">
            <Image src="/images/course4.jpeg" alt="course4" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Art</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Art Specialization</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4 sm:block hidden">
            <Image src="/images/course5.jpeg" alt="course5" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Law</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>

            <h2 className="font-semibold text-xl mt-2">Rule of Law</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
          <div className=" bg-[#F7F7F7] rounded-md p-4 sm:block hidden">
            <Image src="/images/course6.jpeg" alt="course6" width={500} height={300} className="object-cover rounded-md" />
            <div className="flex items-center justify-start mt-4">
              <p className="text-sm text-black">Tech</p>
              <div className="flex items-center ml-2 text-gray-400">
                <span className="text-lg">★</span>
                <span className="text-sm text-black ml-2">5.0</span>
              </div>
            </div>
            <h2 className="font-semibold text-xl mt-2">Introduction to Webflow</h2>
            <p className="text-black text-[14px] sm:text-[16px] mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-black bg-[#F7F7F7] p-2 px-4 rounded-md text-sm border border-black">
                Explore Now
              </button>
              <div className="bg-gray-100 text-black p-2 px-4 rounded-md text-sm">$400</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="text-black bg-white p-2 px-6 rounded-md text-sm border border-black">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
