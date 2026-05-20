import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../component/Title'
import Button from '../component/Button'
import InputField from '../component/InputField'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/profile');
    }
  };

  const isFormValid = email && password;
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[375px] h-[812px] border border-[#F7F8F9] bg-[#F7F8F9] '>
        <div className='mx-5'>
          <Title text="Signin to your PopX account" textColor="#000" className="text-[28px] w-[188px] mt-[40px]" />
          <p className='w-[232px] text-lg text-[#1D2226] opacity-[0.6] mb-[29px] mt-[14px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

          <form onSubmit={handleSubmit} className='mt-[33px] w-[335px]'>

              <InputField value={email} onChange={ (e)=> setEmail(e.target.value) } label="Email Address" type="email" placeholder="Enter email address" />
              <InputField value={password} onChange={ (e)=> setPassword(e.target.value) } label="Password" type="password" placeholder="Enter password" />
              <Button text="Login" bgColor={isFormValid ? "#6c25ff" : "#cbcbcb"} textColor="#ffffff" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login