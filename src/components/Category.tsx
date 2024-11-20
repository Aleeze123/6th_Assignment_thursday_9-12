import React from 'react';
import Image from 'next/image';

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <h2 className="font-roboto text-[32px] sm:text-[48px] font-bold leading-[57.6px] mb-6">
        Explore Courses By Category
      </h2>

      <p className="font-roboto text-[14px] sm:text-[18px] font-normal leading-[27px] mt-4 mb-12">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 p-6 w-full max-w-screen-xl mx-auto">

        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat1.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Design & Development</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
       
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat2.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Marketing</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">60+ Courses Available</p>
          </div>

        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat3.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Development</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat4.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Communication</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat5.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Digital Marketing</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
        
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat6.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Self Development</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
          
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat7.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Business</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
         
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat8.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Finance</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
          
        </div>
        <div className="flex flex-col items-start bg-[#F7F7F7] w-full max-w-xs h-[220px] p-4 gap-4 sm:gap-8 rounded-md sm:block hidden">
          <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-white flex items-center justify-center rounded-md">
            <Image 
              src="/images/category/cat9.svg" 
              alt="Category Icon" 
              width={50}  
              height={50}
              className="object-contain"  
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-black">Health & Fitness</h3>
            <p className="text-black text-[12px] sm:text-[14px] mt-2">50+ Courses Available</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Category;
