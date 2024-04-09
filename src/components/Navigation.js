import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const menuItems = [
    { name: 'Home', href: 'home', id: 1 },
    { name: 'About', href: 'about', id: 2 },
    { name: 'Services', href: 'services', id: 3 },
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
                delayChildren: 0.75, // Delay the animation of children
            },
        },
    };

    // Animation variants for each item
    const itemVariants = {
        hidden: { y: -50, opacity: 0 }, // Start above the original position
        visible: {
            y: 0,
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
        <motion.ul
            className="hidden sm:flex items-center space-x-8 navigation"
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
                        className="font-body text-lg uppercase text-white cursor-pointer hover:text-yellow transition-all duration-300"
                    >
                        {item.name}
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default Navigation;
