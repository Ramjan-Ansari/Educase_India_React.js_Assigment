import React, { useState } from 'react'
import Title from '../component/Title'
import Button from '../component/Button'
import InputField from '../component/InputField'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState('YES');
  const navigate = useNavigate();

  const isFormValid = fullName && phone && password && companyName && isAgency;

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/profile');
    }
  };

  return (
    <div className='w-full h-screen flex justify-center'>
      <div className='w-[375px] h-[812px] border border-[#F7F8F9] bg-[#F7F8F9] '>
        <div className='mx-5'>
          <Title text="Create your PopX account" className="w-188px mt-[40px]" />

          <form onSubmit={HandleSubmit} className='mt-[33px] w-[335px]'>

              <InputField value={fullName} onChange={(e) => setFullName(e.target.value)} label="Full Name" type="text" req={true} placeholder="Enter full name" />
              <InputField value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone number" type="number" req={true} placeholder="Enter phone number" />
              <InputField value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" type="email" req={true} placeholder="Enter email address" />
              <InputField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" req={true} placeholder="Enter password" />
              <InputField value={companyName} onChange={(e) => setCompanyName(e.target.value)} label="Company Name" req={true} type="text" placeholder="Enter company name" />

               <div className="gap-5">
                 <p className="text-sm mb-3">Are you an Agency?*</p>
                 <div className='flex gap-4'>
                <label className="flex items-center gap-2 ">
                <input
                  type="radio"
                  name="agency"
                  value={isAgency === 'YES'}
                  onChange={(e)=> setIsAgency(e.target.value)}
                  defaultChecked
                  className="accent-purple-600"
                />
                Yes
               </label>
               <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value={isAgency === 'NO'}
                  onChange={(e)=> setIsAgency(e.target.value)}
                  className="accent-purple-600"
                />
                No
               </label>
               </div>
              </div>

              <Button text="Create Account" textColor="#ffffff" bgColor={isFormValid ? "#6c25ff" : "#cbcbcb"} className='mt-[193px]' />
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signup
