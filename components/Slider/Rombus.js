import React from 'react'

export default function Rombus() {
    return (
        <>
            <div className=' flex justify-center items-center w-full -translate-y-6 '>
                <p className=" absolute z-10 w-76 h-76 bg-red-400  "
                    style={{
                        clipPath: `polygon(25% 15%, 75% 15%, 100% 50%, 75% 85%, 25% 85%, 0% 50%)`,
                    }} >
                </p>
                <p className=" relative w-86 h-86 bg-amber-300 "
                    style={{ clipPath: `polygon(25% 15%, 75% 15%, 100% 50%, 75% 85%, 25% 85%, 0% 50%)` }} >
                </p>
            </div>
        </>
    )
}
