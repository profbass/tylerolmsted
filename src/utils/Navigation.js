import { Link } from 'react-scroll'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LoadingContext } from './LoadingContext'
import { useContext, useEffect } from 'react'

//TODO: Fix the hover effect
//TODO: Mobile view cleanup

const menuItems = [
    { name: 'Home', href: 'home', id: 1 },
    { name: 'About', href: 'about', id: 2 },
    { name: 'Work', href: 'work', id: 3 },
    { name: 'Contact', href: 'contact', id: 4 },
]

const NavLink = ({ name, href }) => {
    return (
        <Link 
            to={href} 
            smooth={true}
            duration={500} 
            className="relative overflow-hidden cursor-pointer hidden lg:block"
        >
            <motion.div className="absolute inset-0 bg-yellow"
                initial={{ width: 0 }}
                whileHover={{ width: '100%', transition: { duration: 0.2, ease: "easeOut" } }}
            />
            <span className="relative z-10 px-4 py-1 text-white w-full block">
                {name}
            </span>
        </Link>
    )
}

function Navigation() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const mainControls = useAnimation()
    const { loadingComplete } = useContext(LoadingContext)

    useEffect(() => {
        if (inView && loadingComplete) {
            mainControls.start("visible")
        }
    }, [inView, mainControls, loadingComplete])
   
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, 
                delayChildren: 0.25, 
            },
        },
    }

   
    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        }
    }

    const navContainerVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                stiffness: 100,
            },
        }
    }

    return (
        <motion.div 
            className="fixed top-0 right-0 z-70 bg-black bg-opacity-50 overflow-hidden"
            variants={navContainerVariants}
            initial="hidden"
            animate={mainControls}
        >
            <motion.ul
                className="block"
                variants={containerVariants}
                initial="hidden"
                animate={mainControls}
            >
                {menuItems.map((link) => (
                    <motion.li 
                        key={link.name} 
                        variants={itemVariants}
                        ref={ref}
                        className='block'
                    >
                        <NavLink {...link} />
                    </motion.li>
                ))}
                {/* Hard link to my resume */}
                 <motion.li 
                        variants={itemVariants}
                        className='block border-t border-yellow'
                >
                    <a 
                        href="https://tylerco-assets.s3.us-east-2.amazonaws.com/Tyler-Olmsted-Resume.pdf" 
                        className="relative overflow-hidden cursor-pointer block"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <motion.div className="absolute inset-0 bg-yellow"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%', transition: { duration: 0.2, ease: "easeOut" } }}
                        />
                        <span className="relative z-10 px-4 py-1 text-white w-full block">
                            Resume
                        </span>
                    </a>
                </motion.li>
            </motion.ul>
        </motion.div>
    )
}

export default Navigation
