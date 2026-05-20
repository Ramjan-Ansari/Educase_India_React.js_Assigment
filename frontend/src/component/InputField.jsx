import React from 'react'

const InputField = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  value,
  req,
}) => {
  return (
    <div className={`relative mb-5 ${className}`}>
      <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm text-purple-600">
        {label}
        {req && (
          <span className="text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[335px] pl-4 pt-3 pb-[11px] border border-gray-300 focus:border-purple-600 rounded-md outline-none"
      />
    </div>
  )
}

export default InputField