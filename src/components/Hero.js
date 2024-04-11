import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Reveal from "../utils/Reveal"


const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["20%", "40%"]);

    return (
        <section id="home">
            <div 
                className="relative w-full overflow-hidden lg:h-200 md:h-150 sm: h-85"
                ref={ref}
            >
                <motion.div
                    style={{ y: textY }}
                    className="relative z-20"
                >
                    <div className="container mx-auto h-full xs:mt-10">
                        
                        <div className="flex flex-wrap lg:pl-20">
                            
                                <p 
                                    className="text-white font-body lg:text-vw-sm sm:text-vw-md pb-5vw leading-extra-loose"
                                >
                                    <Reveal delayInView="0.5" yValue={20}>Pioneering Next-Gen SaaS Solutions <br /></Reveal>
                                    <Reveal delayInView="0.7" yValue={20}>with Global Impact Through Visionary<br /></Reveal>
                                    <Reveal delayInView="0.9" yValue={20}>Engineering and Strategic Leadership</Reveal>
                                </p>
                            
                                <h1 className="text-white font-header2 text-vw-xl leading-tight">
                                    <Reveal delayInView="2">Inspired<br /></Reveal>
                                    <Reveal delayInView="2.2">Digital<br /></Reveal>
                                    <Reveal delayInView="2.4">Experiences.</Reveal>
                                </h1>
                            
                        </div>
                        <div className="flex lg:flex-nowrap xs:flex-wrap w-full">
                            <div
                                className="flex lg:w-2/3 xs:w-full"
                            >
                                <Reveal delayInView="1">
                                    <p
                                        className="text-white font-body lg:text-vw-sm sm:text-vw-md pt-10vw leading-extra-loose"
                                    >
                                        My vision is to empower teams by <br /> 
                                        integrating cross-functional insights <br />
                                        to ensure we build resilient solutions<br />
                                        that deliver compelling value.
                                    </p>
                                </Reveal>
                            </div>
                            <div
                                className="flex lg:w-1/3 xs:w-full text-white font-body lg:text-vw-sm sm:text-vw-sm pt-10vw leading-extra-loose"
                            >   
                                <Reveal delayInView="1.2" yValue={20}>
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
                <video
                    className="absolute inset-0 z-10"
                    style={{
                        objectPosition: "bottom",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }}
                    autoPlay
                    muted
                    loop
                    src={"https://tylerco-assets.s3.us-east-2.amazonaws.com/waves.mp4"}
                />
            </div>
        </section>
    );
};

export default Hero;
