import  React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Reveal({children, delayInView="0", durationInView="2", yValue=50}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const mainControls = useAnimation()

    useEffect(() => {
        if (inView) {
            mainControls.start("visible")
        }
    }, [inView, mainControls])

    return(
        <div 
            className='relative w-full overflow-hidden'
        >
            <motion.div
                ref={ref}
                variants={{
                    hidden: { 
                        opacity: 0, 
                        rotateY: 20,
                        y: yValue
                    },
                    visible: { 
                        opacity: 1, 
                        rotateY: 0,
                        y: 0
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration: parseFloat(durationInView), 
                    bounce: 0.4,
                    delay: parseFloat(delayInView), 
                    type: "spring" 
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}