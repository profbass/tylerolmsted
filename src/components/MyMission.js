import { motion } from 'framer-motion';
import Reveal from "../utils/Reveal";

export default function MyMission() {
   
    const svgVariants = {
        initial: { x: 0 },
        hover: {
            x: [0, 300, -300, 0],
            transition: { duration: 2 }
        }
    }

    return (
        <Reveal>
            <div className="container xs:my-32 lg:my-60  px-5 relative">
                <span className="absolute lg:top-3 md:top-0 inline-block text-secondary font-bold px-5 text-base py-2 underline">
                    MY MISSION
                </span>
                <motion.h2 
                    className="text-indent-2 lg:text-vw-base xs:text-3xl text-primary font-header2 leading-loose inline-block"
                    style={{ textIndent: '9rem' }}
                    whileHover="hover" // Trigger hover state
                >
                    Craft, <code className="text-green">code</code>, and ship 🚀. Leveraging a lean mindset 🧠 with vision and cutting-edge technology
                    <motion.span className="inline-block mx-3 overflow-hidden" variants={svgVariants} initial="initial" whileHover="hover">
                        <svg width="84" height="22" viewBox="0 0 84 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5" stroke="currentColor"></path>
                            <path d="M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5" stroke="currentColor"></path>
                        </svg>
                    </motion.span>
                    oh, and building <em>stellar</em> 🧑‍🚀 teams.
                </motion.h2>
            </div>
        </Reveal>
    )
}
