import { type } from "@testing-library/user-event/dist/type";
import { motion } from "framer-motion";

// Text variants remain unchanged
const textVariants = {
    offscreen: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        }
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
            staggerChildren: 0.1,
        },
    }
};

// Child variants remain unchanged
const childVariants = {
    offscreen: {
        y: -200,
        rotate: -50,
    },
    onscreen: {
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
};

// LetterVariants component remains unchanged
const LetterVariants = ({ letter }) => {
    return (
        <motion.span 
            className="inline-block font-header text-yellow"
            variants={childVariants}
        >
            {letter}
        </motion.span>
    );
};


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

const PageLoader = () => {
    return (
        <motion.div
            className="fixed w-screen h-screen flex items-center justify-center bg-primary z-60"
            initial={{ }}
            animate={{ y: "-100vh" }}
            transition={{ 
                duration: 0.5,
                delay: 2,
             }}
        >
        {/* Image reveal animation */}
            <motion.img
                src="/img/logo-tyler-olmsted-yellow.svg"
                className="color-primary"
                style={{ width: 200, height: 200 }}
                variants={imageRevealVariants}
                initial="hidden"
                animate="visible"
            />
            <motion.div
                className="relative overflow-hidden"
            >
                {/* Text animation */}
                {/* <motion.h1
                    className="text-6xl font-logo relative overflow-hidden py-20"
                    variants={textVariants}
                    initial="offscreen"
                    animate="onscreen"
                >
                    {["O", "h", ", ", "  ", "h", "e", "l", "l", "o", "!"].map((letter, index) => (
                        <LetterVariants key={index} letter={letter} />
                    ))}
                </motion.h1> */}
            </motion.div>
        </motion.div>
    );
};

export default PageLoader;
