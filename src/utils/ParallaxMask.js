import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ParallaxMask = () => {
    const { scrollYProgress } = useViewportScroll();

    // This will map the scroll progress to translateY values
    const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 300]); // Modify 500 to the desired translation end value

    // This will map the scroll progress to a clip path change
    // const clipPathAnim = useTransform(scrollYProgress, [0, 1], [
    //     'circle(10% at 50% 50%)',
    //     'circle(50% at 50% 50%)' // Starting from a small circle to a larger circle
    // ]);

    const clipPathAnim = useTransform(scrollYProgress, [0, 1], [
        `rect(0px, 0px, 100%, 200px)`, // Top maskHeight visible
        'rect(0px, 0px, 100%, 100%)', // Entire element visible when scrolled
      ]);

    return (
        <div 
            className="overflow-hidden relative h-50 relative overflow-hidden"
        >
            <motion.div 
                className="background absolute top-0 left-0 bg-off-black"
                style={{y: yPosAnim}}
            >
                Content that scrolls at a different speed
            </motion.div>
            <motion.div 
                className="foreground absolute inset-0  flex items-center justify-center text-white" 
                style={{
                    y: yPosAnim,
                    pointerEvents: 'none', // Make sure clicks pass through to elements underneath
                }}
            >
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        clipPath: clipPathAnim,
                        WebkitClipPath: clipPathAnim, // Ensure compatibility with Webkit browsers
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }}
                >
                    This is the mask content
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ParallaxMask;
