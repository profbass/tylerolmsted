import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { LoadingContext } from './LoadingContext'

const imageRevealVariants = {
    hidden: { 
        opacity: 0,
        y: "-50px",
        clipPath: "circle(0% at 50% 50%)",
    },
    visible: { 
        opacity: 1,
        y: 0,
        clipPath: "circle(70% at 50% 50%)", // Adjust the radius as needed
        transition: { 
            duration: 1.75, 
            ease: "easeIn", 
            delay: 0.25,
            bounce: 0.4,
            type: "spring",
        },
    }
}

const wrapperAnimation = {
    hidden: { y: '0vh' },
    show: { 
        y: '-100vh',
        transition: { 
            duration: 0.5, 
            ease: "easeIn", 
            delay: 0.25,
        }, 
    },
}

const PageLoader = () => {
    const { setLoadingComplete } = useContext(LoadingContext)
    const [wrapperAnimationStart, setWrapperAnimationStart] = React.useState(false)

    return (
        <motion.div
            className="fixed w-screen h-screen flex items-center justify-center bg-primary z-60"
            variants={wrapperAnimation}
            initial="hidden"
            animate={wrapperAnimationStart ? "show" : "hidden"}
            onAnimationComplete={() => setLoadingComplete(true)}
        >
        {/* Image reveal animation */}
            <motion.img
                src="/img/logo-tyler-olmsted-yellow.svg"
                className="color-primary"
                style={{ width: 200, height: 200 }}
                variants={imageRevealVariants}
                initial="hidden"
                animate="visible"
                onAnimationComplete={() => setWrapperAnimationStart(true)}
            />
        </motion.div>
    );
}

export default PageLoader;
