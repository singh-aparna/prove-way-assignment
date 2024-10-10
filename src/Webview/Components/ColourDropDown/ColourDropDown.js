import React, { useState } from 'react'
const selectColour = ["Black", "Green"]
const ColourDropDown = () => {
    const [colour, setColour] = useState([])

    return (
        <div>
            <select className="border border-gray-300 rounded-lg p-1 w-24 focus:outline-none focus:ring-2 focus:ring-pink-500"

                value={colour} onChange={(e) => setColour(e.target.value)}>

                {
                    selectColour.map((item, index) => (<option key={index}>{item}</option>))
                }
            </select>
        </div>
    )
}

export default ColourDropDown