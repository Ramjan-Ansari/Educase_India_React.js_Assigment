import React from 'react'

const Button = ({text, bgColor, textColor, className, onClick}) => {
  return (
    <div>
      <button type="submit" className={` w-[335px] h-[46px] border-none rounded-md text-md cursor-pointer ${className} `} style={{
        backgroundColor : bgColor, color: textColor
      }} onClick={onClick} > {text} </button>
    </div>
  )
}

export default Button