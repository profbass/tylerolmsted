import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Reveal from "../utils/Reveal";


const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["20%", "40%"]);

    return (
        <div 
            className="relative w-full overflow-hidden lg:h-200 md:h-150 sm: h-75"
            ref={ref}
        >
            <motion.div
                style={{ y: textY }}
                className="relative z-20"
            >
                <div className="container mx-auto h-full">
                    
                    <div className="flex flex-col lg:pl-20">
                        
                            <p 
                                className="text-white font-body lg:text-vw-sm sm:text-vw-md pb-10vw leading-extra-loose"
                            >
                                <Reveal delayInView="2.5" yValue={20}>Pioneering Next-Gen SaaS Solutions <br /></Reveal>
                                <Reveal delayInView="2.7" yValue={20}>with Global Impact Through Visionary<br /></Reveal>
                                <Reveal delayInView="2.9" yValue={20}>Engineering and Strategic Leadership</Reveal>
                            </p>
                        
                            <h1 className="text-white font-header2 text-vw-xl leading-tight">
                                <Reveal delayInView="3">Inspired<br /></Reveal>
                                <Reveal delayInView="3.2">Digital<br /></Reveal>
                                <Reveal>Experiences.</Reveal>
                            </h1>
                        
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div
                            className="flex w-2/3"
                        >
                            <Reveal delayInView="1">
                                <p
                                    className="text-white font-body lg:text-vw-sm sm:text-vw-md pt-10vw leading-extra-loose"
                                >
                                    My vision is empowering teams by <br /> 
                                    integratingcross-functional insights <br />
                                    to ensure we build resilient solutions<br />
                                    that deliver compelling value.
                                </p>
                            </Reveal>
                        </div>
                        <div
                            className="flex w-1/3 text-white font-body lg:text-vw-xs sm:text-vw-sm pt-10vw leading-extra-loose"
                        >   
                            <Reveal delayInView="1.2">
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="text-right pr-5">Phone</div>
                                    <div className="">+1 303 905 3904</div>
                                    <div className="text-right pr-5">Email</div>
                                    <div className="">tylerdolmsted@gmail.com</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="absolute inset-0 z-0"
                style={{
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(30, 81, 106, 0.75), rgba(30, 81, 106, 0.75)), url(${process.env.PUBLIC_URL}/img/bg-beach-sunset-2.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
};

export default Hero;
