import React from 'react'
import { FaDotCircle } from 'react-icons/fa'

const Box = ({ quantity, discount, type, price, actualPrice, size, colour, list1, list2, colourDropDown1, colourDropDown2, sizeDropDown1, sizeDropDown2 }) => {
    return (
        <div className='flex flex-col gap-y-2 mx-14 my-5 border px-4 py-4 '>
            <div className='grid grid-cols-2 justify-items-center '>
                <div className='grid-cols-1'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-x-2'>
                            <div><FaDotCircle /></div>
                            <div className='text-[14px] font-[600]'>{quantity}</div>
                            <div className='bg-[#FF6B82] p-1 text-[#fff] text-[12px]'>{discount}</div>
                        </div>
                        <div className='text-[12px] font-[400]'>{type}</div>
                    </div>
                </div>
                <div className='grid-cols-1'>
                    <div className='flex flex-col'>
                        <div className='text-[14.46px] font-[500]'>{price}</div>
                        <div className='text-[10px] font-[400] text-[#C8C8C8]'>{actualPrice}</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-items-center gap-y-2 md:ml-60 ml-0'>

                <div className='flex  gap-x-14 text-[9.94px] font-[400] items-start '>
                    <div></div>
                    <div>{size}</div>
                    <div>{colour}</div>
                </div>
                <div className='flex items-center gap-x-2 text-[9.94px] font-[400]'>
                    <div>{list1}</div>
                    <div>{sizeDropDown1}</div>
                    <div>{colourDropDown1}</div>
                </div>
                <div className='flex gap-x-2 items-center text-[9.94px] font-[400]'>
                    <div>{list2}</div>
                    <div>{sizeDropDown2}</div>
                    <div>{colourDropDown2}</div>

                </div>
            </div>
        </div>
    )
}

export default Box