import React from 'react'
import profile_pic from '../assets/profile_pic.png';
import camra_icon from '../assets/camra_icon.png';

const Profile = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[375px] h-[812px] border border-[#F7F8F9] bg-[#F7F8F9] relative '>
        <div className='px-5 bg-white h-[68px] flex  items-center '>
          <p className='text-lg text-black '>Account Settings</p>
        </div>

        <div className='ml-5 flex gap-2 mt-[30px]'>
          <div className='w-[76px] h-[76px] relative '>
              <img src={profile_pic} className='w-[76px] h-[76px] rounded-full' alt="Profile"  />
              <img src={camra_icon} className='w-[21px] h-[23px] absolute bottom-0 right-0 ' alt="Camera" />  
          </div>
          <div>
            <h3 className='text-[15px] font-medium'>Marry Doe</h3>
            <p className='text-sm mt-[5px]'>Marry@Gmail.Com</p>
          </div>
        </div>

        <div className='mt-[30px] ml-5  w-[337px]'>
          <p className='text-sm '>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>

        <div className='border-b border-dashed border-[#CBCBCB] mt-5'></div>
        <div className='border-b border-dashed border-[#CBCBCB] absolute bottom-[36px] w-full'></div>
      </div>

    </div>
  )
}

export default Profile
