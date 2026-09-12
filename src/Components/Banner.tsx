import React from 'react';
import banner from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='flex my-[80px] container mx-auto'>
    
      <div className='container mx-auto'>
        <div>
        <h1 className='pt-[50px] pb-[30px] font-bold text-4xl'>Build Your Ideal<br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Development Stack</span></h1>

        <p className='pb-[40px] text-[#475569]'>Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.</p>

          <div className='flex gap-3 mt-[12px]'>
            <button className='btn bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white'>Explore Technologies</button>
            <button className='btn px-[35px]'>Learn More</button>
          </div>
          </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;