import FotterLOgo from '../assets/logo-text.png'


export const Footer = () => {

  return (
    <>
    <span className='divider mt-[60px]'></span>
    <div className='flex container mx-auto justify-between '>
      <div>
        <img className='py-2 cursor-pointer' src={FotterLOgo} alt="" />
        <p className='text-xs text-[#64748B]'>Curated tools, technologies, and resources for<br/> developers building
          modern software.</p>
          <div>
            <ul className='flex py-5 gap-3'>
              <li className='font-semibold cursor-pointer'>GitHub</li>
              <li className='font-semibold cursor-pointer'>Twitter</li>
              <li className='font-semibold cursor-pointer'>LinkedIn</li>
            </ul>
          </div>
      </div>


      <div>
        <h4 className='font-bold py-2'>PRODUCT</h4>
        <p className='text-xs text-[#64748B] cursor-pointer' >Home</p>
        <p className='text-xs text-[#64748B] cursor-pointer'>Technologies</p>
        <p className='text-xs text-[#64748B] cursor-pointer'>Projects</p>
      </div>


      <div>
        <h4 className='font-bold py-2'>COMPANY</h4>
        <p className='text-xs text-[#64748B] cursor-pointer'>About</p>
        <p className='text-xs text-[#64748B] cursor-pointer'>Contact</p>
        <p className='text-xs text-[#64748B] cursor-pointer'>Careers</p>
      </div>


      <div>
        <h4 className='font-bold py-2'>LEGAL</h4>
        <p className='text-xs text-[#64748B] cursor-pointer'>Privacy Policy</p>
        <p className='text-xs text-[#64748B] cursor-pointer'>Terms of Service</p>
      </div>
    </div>
      <span className='divider flex container mx-auto mt-[22px]'></span>
      <div className='flex justify-between container mx-auto my-5'>
        <p className='text-xs text-[#64748B] cursor-pointer'>© 2026 Dev Stack. All rights reserved.</p>
        <div className='flex justify-between gap-3'>
          <p className='text-xs text-[#64748B] cursor-pointer'>Privacy</p>
          <p className='text-xs text-[#64748B] cursor-pointer'>Privacy</p>
        </div>
      </div>
    </>
  )

}