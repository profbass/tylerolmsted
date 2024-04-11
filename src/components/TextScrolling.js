import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function TextScrolling() {
    const { scrollYProgress } = useViewportScroll();  // Track scroll progress (0 at top, 1 at bottom)

    // Dynamic x transform based on scroll progress
    const xLeftToRight = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
    const xRightToLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

    return (
        <div className="py-36 xs:py-20">
            <div className="flex w-screen overflow-hidden">
                <motion.h1
                    style={{ x: xLeftToRight }}
                    className="text-vw-xl text-primary font-header2 leading-extra-tight block font-bold"
                    initial={{ x: '-80%' }}  // Start from off-screen left
                >
                    CRAFTING
                </motion.h1>
            </div>
            <div className="flex w-screen overflow-hidden">
                <motion.h1
                    style={{ x: xRightToLeft }}
                    className="text-vw-xl text-yellow font-header2 leading-extra-tight block font-bold"
                    initial={{ x: '80%' }}  // Start from off-screen right
                >
                    CREATIVE
                </motion.h1>
            </div>
            <div className="flex w-screen overflow-hidden">
                <motion.h1
                    style={{ x: xLeftToRight }}
                    className="text-vw-xl text-secondary font-header2 leading-extra-tight block font-bold"
                    initial={{ x: '-80%' }}  // Start from off-screen left
                >
                    CONNECTIONS
                </motion.h1>
            </div>
        </div>
    );
}
