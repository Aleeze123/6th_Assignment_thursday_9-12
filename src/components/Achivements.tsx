import React from 'react';

const Achivements = () => {
  return (
    <div className="text-center my-10 px-4 sm:px-8">
      <h2 className="font-roboto text-[32px] sm:text-[48px] font-bold leading-[40px] sm:leading-[57.6px] text-center">
        Our Achievements
      </h2>
      <p className="font-roboto text-[14px] sm:text-[18px] font-normal leading-[22px] sm:leading-[27px] text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+200</h3>
          <p className="text-[14px] sm:text-[16px]">Courses</p>
        </div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">50K</h3>
          <p className="text-[14px] sm:text-[16px]">Mentors</p>
        </div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+370K</h3>
          <p className="text-[14px] sm:text-[16px]">Students</p>
        </div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[40px] font-bold">+100</h3>
          <p className="text-[14px] sm:text-[16px]">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
