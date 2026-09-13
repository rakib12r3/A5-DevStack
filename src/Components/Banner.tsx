// import React from 'react';
import banner from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='flex my-[80px] container mx-auto'>
    
      <div className='container mx-auto'>
        <div>
        <h1 className='pt-[50px] pb-[30px] font-bold text-4xl'>Build Your Ideal<br />
          <span className="brand-gradient-text">Development Stack</span></h1>

        <p className='pb-[40px] text-[#475569]'>Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.</p>

          <div className='flex gap-3 mt-[12px]'>
            <button className='btn brand-gradient text-white'>Explore Technologies</button>
            <button className='shadow rounded-[6px] px-[35px] cursor-pointer'>Learn More</button>
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