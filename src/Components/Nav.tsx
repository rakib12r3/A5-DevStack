// import React from 'react';
import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
    <div className='flex justify-between gap-6 container mx-auto items-center py-2 '>
      <div>
        <img src={Logo} alt="" />
      </div>

      <div>
        <ul className='flex justify-between gap-4 font-semibold'>
          <li><span className='text-[#DB2777]'>Home</span></li>
          <li className='text-[#475569]'>Technologies</li>
          <li className='text-[#475569]'>Projects</li>
          <li className='text-[#475569]'>About</li>
          <li className='text-[#475569]'>Contact</li>
        </ul>
      </div>

      <div>
        <button className="btn btn-ghost rounded-2xl">Sign In</button>
      <button className='btn px-6 bg-[#D91B7E] rounded-2xl outline-none'>Sign Up</button>
      </div>
    </div>
    </nav>
  );
};

export default Nav;