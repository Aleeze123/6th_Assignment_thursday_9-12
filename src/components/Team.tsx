import React from 'react';

const Team = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center my-10 bg-[#F7F7F7]'>

      <h1 className='font-roboto text-[48px] font-bold leading-[57.6px] text-center mb-4'>
        Our Team
      </h1>
      <p className='text-center mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>

        <div className='flex flex-col items-center'>
          <img
            src='/images/team1.png'
            alt='Team Member 1'
            className='w-[80px] h-[80px] object-cover'
          />
          <h1>James Nduku</h1>
          <p>Marketing Coordinator</p>
          <div className='flex gap-2 mt-2'>
            <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/twitter.svg'
              alt='Twitter'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/icon.svg'
              alt='Other'
              className='w-4 h-4 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='/images/team2.png'
            alt='Team Member 2'
            className='w-[80px] h-[80px] object-cover'
          />
          <h1>Joseph Munyambu</h1>
          <p>Nursing Assistant</p>
          <div className='flex gap-2 mt-2'>
            <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/twitter.svg'
              alt='Twitter'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/icon.svg'
              alt='Other'
              className='w-4 h-4 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='/images/team3.png'
            alt='Team Member 3'
            className='w-[80px] h-[80px] object-cover'
          />
          <h1>Joseph Ngumbau</h1>
          <p>Medical Assistant</p>
          <div className='flex gap-2 mt-2'>
            <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/twitter.svg'
              alt='Twitter'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/icon.svg'
              alt='Other'
              className='w-4 h-4 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col items-center sm:block hidden'>
          <img
            src='/images/team4.png'
            alt='Team Member 4'
            className='w-[80px] h-[80px] object-cover'
          />
          <h1>Erick Kipkemboi</h1>
          <p>Web Designer</p>
          <div className='flex gap-2 mt-2'>
            <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/twitter.svg'
              alt='Twitter'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/icon.svg'
              alt='Other'
              className='w-4 h-4 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col items-center sm:block hidden'>
          <img
            src='/images/team5.png'
            alt='Team Member 5'
            className='w-[80px] h-[80px] object-cover'
          />
          <h1>Stephen Kerubo</h1>
          <p>President of Sales</p>
          <div className='flex gap-2 mt-2'>
            <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/twitter.svg'
              alt='Twitter'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/icon.svg'
              alt='Other'
              className='w-4 h-4 cursor-pointer'
            />
          </div>
        </div>
        <div className='flex flex-col items-center sm:block hidden'>
          <img
            src='/images/team6.png'
            alt='Team Member 6'
            className='w-[80px] h-[80px] object-cover'
          />
          <h1>John Leboo</h1>
          <p>Dog Trainer</p>
          <div className='flex gap-2 mt-2'>
            <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/twitter.svg'
              alt='Twitter'
              className='w-4 h-4 cursor-pointer'
            />
            <img
              src='/images/icon.svg'
              alt='Other'
              className='w-4 h-4 cursor-pointer'
            />
          </div>
        </div>

      </div>
      <div className="mt-8 flex justify-center sm:block lg:hidden">
  <button className="text-black bg-white p-2 px-6 rounded-md text-sm border border-black">
    View All
  </button>
</div>

    </div>
  );
};

export default Team;
