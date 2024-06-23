import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
export default function GalleryCardPreview({ selectedId, setImage, image ,onTap}) {

   

    

   

    return (
        <div  className={`${image ? 'main_full_screen_wrapper w-screen h-screen fixed top-0 left-0' : ''}`}>
            <div className="wrapper absolute top-[50%]  translate-y-[-50%] left-[50%] translate-x-[-50%] z-50">
                <AnimatePresence>
                    {image && (
                        <div className='w-[600px] rounded-lg h-[450px] bg-slate-700 py-4 px-2 ' layoutId={image}>
                            <img src={image} />
                            <button onClick={onTap} >
                                Click
                            </button>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
