import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Button = () => {
    return (
        <div className='flex bg-[#FF6B82] gap-x-2 items-center justify-center mx-14 mt-5 p-2 text-[#fff]'>
            <div><FaPlus /></div>
            <div>Add to Cart</div>
        </div>
    )
}

export default Button