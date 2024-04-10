import { type } from '@testing-library/user-event/dist/type';
import { motion } from 'framer-motion';

export default function Avatar() {
    // Animation variants for the mask
    const maskVariants = {
        hidden: { 
            opacity: 0,
            clipPath: 'circle(0% at 50% 50%)',
            transition: {
                duration: 0.8,
                ease: 'easeInOut'
            }
        },
        visible: { 
            opacity: 1,
            clipPath: 'circle(75% at 50% 50%)',
            transition: {
                duration: 5,
                ease: 'easeInOut',
                delay: 2,
                bounce: 0.4,
                type: 'spring'
            }
        }
    };

    return (
        // The mask element that will animate from hidden to visible
        <motion.div 
            className="overflow-hidden rounded-full border-8 border-yellow shadow-xl hover:transform hover:scale-105 transition-all"
            initial="hidden"
            animate="visible"
            variants={maskVariants}
        >
            <img
                src={process.env.PUBLIC_URL + "/img/blog-author.jpg"} // Fixed the src path
                className="h-48 w-48 sm:h-56 sm:w-56 object-cover rounded-full" // Ensure the image covers the masked area and is rounded
                alt="author"
            />
        </motion.div>
    );
}
