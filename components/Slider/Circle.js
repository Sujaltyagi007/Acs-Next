import React from 'react'

export default function Circle() {
    return (
        <>
            <div className=' flex justify-center items-center w-full '>
                <p className=" absolute z-10 w-60 h-60 bg-red-400  "
                    style={{
                        clipPath: `circle(50% at 50% 50%)`,
                    }} >
                </p>
                <p className=" relative w-68 h-68 bg-amber-300 "
                    style={{ clipPath: `circle(50% at 50% 50%)` }} >
                </p>
            </div>
        </>
    )
}
