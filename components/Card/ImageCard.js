import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function ImageCard({ bgImage, title, style }) {
    return (
        <motion.div className="max-w-[250px] lg:max-w-[320px] mx-auto cursor-pointer "
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.5, width: 400, zIndex: 10 }}
        >
            <div className={"card relative rounded-3xl h-[15rem] xl:scale-[85%] 2xl:scale-[100%]  lg:h-[20rem] bg-slate-300 overflow-hidden drop-shadow-md shadow-2xl " + (style ? style : "")}>
                <Image width={400} height={400} alt="Apna chhota School" src={""} className=" brightness-75 absolute top-0  w-full h-full object-cover object-center" loading="lazy" /> 
            </div>
            <div className="title">
                {
                    title ? (<h5 className="text-center font-bold text-lg lg:text-xl mt-2">
                        {title}
                    </h5>)
                        : null
                }
            </div>
        </motion.div>
    )
}
