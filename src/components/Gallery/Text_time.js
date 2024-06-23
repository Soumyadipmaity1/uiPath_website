import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';


const items = [
    {
        id: 1,
        name: "Abhik",
        title: "Patra",
    },
    {
        id: 2,
        name: "Abhik2",
        title: "Patra",
    }
    , {
        id: 3,
        name: "Abhik3",
        title: "Patra",
    },
    {
        id: 4,
        name: "Abhik4",
        title: "Patra",
    }
];

export default function Text_time() {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div className='mt-28 flex flex-wrap gap-2 relative'>
            {items.map((item, index) => (
                <motion.div className='w-5/12  h-[250px] bg-slate-700' key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <div className="wrapper absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <AnimatePresence>
                    {selectedId && (
                        <motion.div className='w-[600px] h-[250px] bg-red-700' layoutId={selectedId}>
                            <motion.h5>{"item.subtitle"}</motion.h5>
                            <motion.h2>{"item.title"}</motion.h2>
                            <button onClick={() => setSelectedId(null)} >
                                Click
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
