import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const menuItems = [
    { name: 'Home', href: 'home', id: 1 },
    { name: 'About', href: 'about', id: 2 },
    { name: 'Work', href: 'work', id: 3 },
    { name: 'Contact', href: 'contact', id: 4 },
];

function Navigation() {
    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger the animation of children
                delayChildren: 2.2, // Delay the animation of children
            },
        },
    };

    // Animation variants for each item
    const itemVariants = {
        hidden: { x: -50, opacity: 0 }, // Start above the original position
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        }
    };

    return (
        <div 
            className="fixed top-0 right-0 z-20 bg-black bg-opacity-50 p-4 overflow-hidden"
        >
            <motion.ul
                className=""
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {menuItems.map((item) => (
                    <motion.li key={item.id} variants={itemVariants}>
                        <Link
                            to={item.href}
                            smooth={true}
                            duration={500}
                            className="font-body text-sm uppercase text-white cursor-pointer hover:text-yellow transition-all duration-300"
                        >
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}

export default Navigation;
