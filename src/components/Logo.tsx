import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-auto bg-[#F7F7F7] flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 px-6 md:px-8 py-6 md:py-12">
      <h5 className="font-roboto text-[16px] sm:text-[18px] md:text-[20px] font-bold text-center md:text-left">
        Trusted by 2000+ companies<br /> worldwide.
      </h5>
      <div className="flex flex-wrap justify-center md:justify-between space-x-6 space-y-4 md:space-y-0">
        <Image 
          src="/logo/logo1.png" 
          alt="Logo 1" 
          width={80} 
          height={80} 
          className="w-16 h-auto md:w-20" 
        />
        <Image 
          src="/logo/logo2.png" 
          alt="Logo 2" 
          width={80} 
          height={80} 
          className="w-16 h-auto md:w-20" 
        />
        <Image 
          src="/logo/logo3.png" 
          alt="Logo 3" 
          width={80} 
          height={80} 
          className="w-16 h-auto md:w-20" 
        />
        <Image 
          src="/logo/logo4.png" 
          alt="Logo 4" 
          width={80} 
          height={80} 
          className="w-16 h-auto md:w-20" 
        />
        <Image 
          src="/logo/logo5.png" 
          alt="Logo 5" 
          width={80} 
          height={80} 
          className="w-16 h-auto md:w-20" 
        />
        <Image 
          src="/logo/logo6.png" 
          alt="Logo 6" 
          width={80} 
          height={80} 
          className="w-16 h-auto md:w-20" 
        />
      </div>
    </div>
  );
};

export default Logo;
