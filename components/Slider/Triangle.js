import React from 'react'

export default function Triangle() {
    return (
        <>
            <div className=' flex justify-center items-center w-full '>
                <p className=" absolute z-10 w-60 h-60 bg-red-400 translate-y-2 "
                    style={{
                        clipPath: `polygon(50% 0, 0% 100%, 100% 100%)`,
                    }} >
                </p>
                <p className=" relative w-68 h-68 bg-amber-300 "
                    style={{ clipPath: `polygon(50% 0, 0% 100%, 100% 100%)` }} >
                </p>
            </div>
        </>
    )
}
