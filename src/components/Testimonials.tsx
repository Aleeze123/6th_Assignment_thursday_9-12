import React from 'react';

const Testimonials = () => {
  return (
    <div className='w-full bg-[#F7F7F7] py-8 px-4'>
      <h1 className='text-[32px] md:text-[48px] font-bold text-black sm:block hidden'>
        Customer Testimonials
      </h1>
      <h1 className='text-[24px] md:hidden font-bold text-black mt-4'>
      What Our Student Say
      </h1>

      <p className='text-[18px] mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex overflow-x-scroll sm:overflow-hidden gap-8 py-4">
        <div className="w-[362.67px] p-6 border border-black bg-[#F7F7F7] flex-none">
          <div className="flex gap-1">
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
          </div>
          <div className="mt-4">
            <p className="text-black text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <img src="/images/team3.png" alt="Team" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-semibold text-[16px]">James Nduku</h1>
              <p className="text-black text-[16px]">Software Developer</p>
            </div>
          </div>
        </div>
        <div className="w-[362.67px] p-6 border border-black bg-[#F7F7F7] flex-none">
          <div className="flex gap-1">
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
          </div>
          <div className="mt-4">
            <p className="text-black text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <img src="/images/team1.png" alt="Team" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-semibold text-[16px]">Erick Kipkemboi</h1>
              <p className="text-black text-[16px]">Scrum Master</p>
            </div>
          </div>
        </div>
        <div className="w-[362.67px] p-6 border border-black bg-[#F7F7F7] flex-none">
          <div className="flex gap-1">
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
            <span className="text-black text-3xl">★</span>
          </div>
          <div className="mt-4">
            <p className="text-black text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <img src="/images/team6.png" alt="Team" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h1 className="text-xl font-semibold text-[16px]">Stephen Kerubo</h1>
              <p className="text-black text-[16px]">UI/UX Designer</p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex gap-2 justify-start w-full">
          <div className="w-2 h-2 rounded-full bg-black" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>

        <button className="w-8 h-8 rounded-full bg-[#F7F7F7] text-black border border-black flex items-center justify-center mt-2 hidden sm:block">
          <span className="text-xl">←</span>
        </button>

        <button className="w-8 h-8 rounded-full bg-[#F7F7F7] text-black border border-black flex items-center justify-center mt-2 hidden sm:block">
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
