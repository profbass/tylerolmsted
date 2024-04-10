import { motion, AnimatePresence } from "framer-motion";

function Logo() {
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
                        y: 0,
                        transition: {
                            duration: 1,
                            bounce: 0.4,
                            type: "spring",
                            delay: 3
                        } 
                    }}
                    exit={{ 
                        y: -200 
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <a href="/">
                        <img 
                            src={process.env.PUBLIC_URL + '/img/logo-tyler-olmsted.svg'} 
                            className="w-20 lg:w-24" 
                            alt="Tyler Olmsted Logo" />
                    </a>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Logo;
