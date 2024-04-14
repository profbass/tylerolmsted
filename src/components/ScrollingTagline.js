import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from "react"
import ParallaxMask from '../utils/ParallaxMask';


export default function ScrollingTagline() {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start start", "end start"],
    // })
    
    // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // const textY = useTransform(scrollYProgress, [0, 1], ["20%", "40%"]);

    return (
        <ParallaxMask />        
        // <section id="scrollingTagline" className="my-20 overflow-hidden">
        //     <motion.div 
        //         className="flex lg:h-56 xs:h-32 w-screen overflow-hidden"
        //         style={{
        //             y: textY,
        //         }}
        //     ></motion.div>
        //     <motion.div 
        //         className="relative lg:h-56 xs:h-32 w-screen"
        //         style={{
        //             y: backgroundY,
        //         }}    
        //     >
        //         <motion.div
        //             className="text-off-black text-vw-xl font-bold leading-extra-tight uppercase w-100vw"
        //             style={{
        //                 marginTop: "-30px",
        //                 width:"1000vw"
        //             }}
        //             animate={{ 
        //                 x: ["0vw", "-1000vw", "0vw"],
        //                 transition: { 
        //                     ease: "linear",
        //                     duration: 300, 
        //                     yoyo: Infinity,
        //                 }
        //             }} 
                    
        //             transition={{
        //                 ease: "linear",
        //                 duration: 300, 
        //                 yoyo: Infinity, // Loop the animation indefinitely
        //             }}
        //         >
        //             Do you ever find yourself reading the same text <span className="text-yellow">over and over again</span> and not really understanding what it means
        //             But then you read it again and it makes <span className="text-secondary">perfect</span> sense but when you <span className="text-secondary">try to explain</span> it to someone else it doesn't <span className="text-secondary">make sense</span> anymore?
        //         </motion.div>
        //     </motion.div>
        // </section>
    )
}