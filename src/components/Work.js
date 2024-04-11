import { motion } from 'framer-motion';

const WorkBlock = ({ title, description, tech }) => {
    // Animation variants for the image clip path
    const imageVariants = {
        hidden: {
            clipPath: "circle(0% at 0% 0%)", // Start with a tiny circle at the top left corner
        },
        visible: {
            clipPath: "circle(150% at 0% 0%)", // End with a large enough circle to fully reveal the image
            transition: {
                type: 'spring',
                stiffness: 50,
                restDelta: 2
            }
        }
    };

    return (
        <motion.div className="bg-paper relative p-8 min-h-100 overflow-hidden"
            whileHover="visible"
            initial="hidden"
            animate="hidden"
        >
            <div className="z-20">
                <i className="bx bx-right-arrow-alt text-4xl absolute top-0 right-0 -rotate-45"></i>
                <h2 className="text-vw-sm leading-tight font-semibold text-off-black">{title}</h2>
                <p className="text-body text-off-black py-8">{description}</p>
                <p className="absolute bottom-3 left-8 text-body text-xs text-grey-40">{tech}</p>
            </div>
            <motion.img 
                src="/img/bg-beach-sunset.jpg" 
                alt="placeholder" 
                className="absolute h-full top-0 bottom-0 left-0 z-10"
                variants={imageVariants}
            />
        </motion.div>
    )
}

export default function Work() {
    return (
        <div className="bg-off-black py-36 text-sand">
            <div className="text-base mb-3">
                <span className="text-primary pr-8 mr-2 inline-block border-b-4 border-b-secondary"></span>
                <span className="text-sand inline-block font-semibold">THE MAN OF ACTION</span>
            </div>
            <h1 className="text-center text-vw-xl font-semibold">Work</h1>
            <div className="container mx-auto my-10">
                <div className="w-full grid grid-cols-3 grid-flow-row gap-4">
                    <WorkBlock 
                        title="Backflip Mobile" 
                        description="Real Estate Investing made simple mobile apps for iOS and Android"
                        tech="React, SwiftUI, Kotlin, Django, AWS"
                    />
                    <WorkBlock 
                        title="RE/MAX" 
                        description="A comprehensive ground up custom real estate platform, from web to mobile. We built a suite of tools for agents, brokers, and consumers."
                        tech="VueJS, Laravel, Swift, Kotlin, GraphQL, AWS"
                    />
                    <WorkBlock 
                        title="MyOpenDoor" 
                        description="Open House contact management app for iOS"
                        tech="Swift, PHP, AWS"
                    />
                    <WorkBlock 
                        title="ENCON" 
                        description="Conference and event management platform for iOS"
                        tech="Swift, PHP, AWS"
                    />
                    <WorkBlock 
                        title="MyRealTour" 
                        description="Open house property tour app utilizing AR and bluetooth beacons to guide users through properties"
                        tech="Swift, PHP, AWS"
                    />
                    <WorkBlock 
                        title="Enterprise Network" 
                        description="The booj independent Real Estate broker platform"
                        tech="Smarty, Laravel, Python, Swift, Kotlin, AWS"
                    />
                </div>
            </div>
        </div>
    )
}
