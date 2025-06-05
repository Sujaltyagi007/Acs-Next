import React from 'react'
import { motion } from "motion/react"



export default function ImageCard({ Image, style, title,Img }) {
    return (
        <motion.div className="max-w-[260px] border border-black lg:max-w-[380px] mx-auto cursor-pointer "
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2, width: 400, zIndex: 10 }}
        >
            <div className="title">
                {
                    title ? (<h5 className={` relative z-10 text-center font-bold translate-y-24 text-lg lg:text-[15px] `+ ( style && ' translate-y-38')}>
                        {title}
                    </h5>)
                        : null
                }
            </div>
            <div className={"card relative flex justify-center items-center rounded-3xl h-[20rem]  bg-contain bg-no-repeat bg-center xl:scale-[85%] 2xl:scale-[100%]  lg:h-[25rem] bg-transparent overflow-hidden " + (style ? style : "")}
            style={{backgroundImage: `url(${Img.src})` }}
            >
                <img src={Image.src} alt="Apna chhota School" className=" brightness-75  absolute rounded-2xl overflow-hidden w-[70%] h-[50%] object-cover object-center" loading="lazy" />
            </div>
          
        </motion.div>
    )
}
