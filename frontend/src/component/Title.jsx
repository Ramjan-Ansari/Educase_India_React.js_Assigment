import React from 'react'

const Title = ({ text, className }) => {
  return (
    <h1 className={`w-[231px] text-[28px] font-medium text-[#1D2226] mb-[10px] ${className}`}>
      {text}
    </h1>
  )
}

export default Title