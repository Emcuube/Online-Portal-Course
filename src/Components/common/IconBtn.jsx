import React from 'react'
import {FiEdit} from "react-icons/fi"

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button className={`flex items-center justify-center ${outline ? "bg-transparent border border-richblue-500 text-richblue-600" : "bg-richblue-500 text-white shadow-sm"} cursor-pointer gap-x-2 rounded-md py-2 text-sm md:text-lg px-3 md:px-5 font-semibold transition-all duration-200 hover:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${customClasses || ""}`} 
    disabled={disabled}
    onClick={onclick}
    type={type}>
        {
            children ? (
                <>
                    <span>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
        <FiEdit/>
    </button>
  )
}

export default IconBtn
