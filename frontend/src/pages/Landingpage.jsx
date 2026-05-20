import Title from '../component/Title.jsx';
import Button from '../component/Button.jsx';
import { useNavigate } from 'react-router-dom';

const Landingpage = () => {

  const navigate = useNavigate();

  return (
    <div className=' w-full h-full flex justify-center items-center ' >
      <div className='w-[375px] border border-[#F7F8F9] h-[812px] p-5 bg-[#F7F8F9]'>

          <Title text="Welcome to PopX" className="mt-[549px]" />
          <p className='w-[232px] text-lg text-[#1D2226] opacity-[0.6] mb-[29px] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>           
          <Button onClick={() => navigate('/signup')} text="Create Account" bgColor="#6c25ff" textColor="#ffffff" />
          <Button onClick={() => navigate('/login')} text="Already Registered? Login" bgColor="#6c25ff4b" textColor="#1D2226" className="mt-[10px]" />
      </div>
    </div>
  )
}

export default Landingpage