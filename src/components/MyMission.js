import { motion } from 'framer-motion';
import Reveal from "../utils/Reveal";

export default function MyMission() {
    // Define animation variants for the SVG
    const svgVariants = {
        initial: { x: 0 },
        hover: {
            x: [0, 300, -300, 0], // Move right, then offscreen to the left, then back to start
            transition: { duration: 2 } // Adjust timing here
        }
    };

    return (
        <Reveal>
            <div className="container my-60 px-5 relative">
                <span className="absolute top-5 inline-block text-secondary font-bold px-5 text-base py-2 underline">
                    MY MISSION
                </span>
                <motion.h2 
                    className="text-indent-2 text-vw-base text-primary font-header2 leading-loose inline-block"
                    style={{ textIndent: '10rem' }}
                    whileHover="hover" // Trigger hover state
                >
                    Craft, <code className="text-yellow">code</code>, and ship 🚀. Synthesizing agile frameworks with strategic vision and cutting-edge technology
                    <motion.span className="inline-block mx-3 overflow-hidden" variants={svgVariants} initial="initial" whileHover="hover">
                        <svg width="84" height="22" viewBox="0 0 84 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5" stroke="currentColor"></path>
                            <path d="M0 11H83M83 11L72.5 0.5M83 11L72.5 21.5" stroke="currentColor"></path>
                        </svg>
                    </motion.span>
                    oh, and building <em>stellar</em> teams.
                </motion.h2>
            </div>
        </Reveal>
    );
}