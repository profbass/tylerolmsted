import React, { useContext } from 'react'; // Import useContext
import { motion, AnimatePresence } from "framer-motion";
import { LoadingContext } from './LoadingContext'; // Adjust the path according to your project structure

function Logo() {
    const { loadingComplete } = useContext(LoadingContext); // Use the context

    return (
        <div className="fixed top-0 left-0 z-50 p-4">
            <AnimatePresence>
                <motion.div
                    initial={{ 
                        y: -200,
                        transition: {
                            duration: 0.5
                        }
                    }}
                    animate={{ 
                        y: loadingComplete ? 0 : -200, // Use loadingComplete to control the animation
                        transition: {
                            duration: 1,
                            bounce: 0.4,
                            type: "spring",
                            delay: 0.5,
                        } 
                    }}
                    exit={{ 
                        y: -200 
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <a href="/">
                        <img 
                            src={process.env.PUBLIC_URL + '/img/logo-tyler-olmsted-yellow.svg'} 
                            className="w-20 lg:w-24" 
                            alt="Tyler Olmsted Logo" />
                    </a>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Logo;