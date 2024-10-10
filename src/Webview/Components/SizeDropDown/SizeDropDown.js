import React, { useState } from 'react'
const selectSize = ["S", "M"]

const SizeDropDown = () => {
    const [size, setSize] = useState([])
    return (
        <div>
            <select className="border border-gray-300 rounded-lg p-1 w-24 focus:outline-none focus:ring-2 focus:ring-pink-500"

                value={size} onChange={(e) => setSize(e.target.value)}>

                {
                    selectSize.map((item, index) => (<option key={index}>{item}</option>))
                }
            </select>
        </div>
    )
}

export default SizeDropDown