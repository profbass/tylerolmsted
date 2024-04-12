import { motion, useAnimation } from 'framer-motion';
import Reveal from '../utils/Reveal';

const WorkBlock = ({ title, description, tech, media }) => {
    const controls = useAnimation();
    
    const workBlockVariants = {
        hidden: {
            zIndex: 0,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.4,
            }
        },
        visible: {
            zIndex: 20,
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.4,
            }
        }
    }

    const imageVariants = {
        hidden: {
            clipPath: "circle(0% at 0% 0%)",  // Starts as a tiny circle at the bottom right
        },
        visible: {
            clipPath: "circle(150% at 0% 0%)",  // Expands the circle to cover the full image from the top left
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.4,
            }
        }
    }

    const iconVariants = {
        hidden: {
            color: "#919091",
            rotate: -45, 
            scale: 1,
            top: 0,
            right: 0,
            transition: {
                duration: 0.25,
            }
        },
        visible: {
            color: "rgba(255,255,255, 0.2)",
            rotate: 135, 
            scale: 3,
            top: 10,
            right: 10,
            transition: {
                duration: 0.25,
            }
        }
    }

    const headerVarient = {
        hidden: {
            color: "#303030",
            y: 0,
            fontSize: "1.25rem",
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.4,
            }
        },
        visible: {
            opacity: 1,
            y: "-20px",
            fontSize: "1rem",
            color: "#ff775e",
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.4,
            }
        }
    }

    const bodyTextVariants = {
        hidden: {
            color: "#303030",
            y: 0,
            transition: {
                type: 'spring',
                duration: 0.5,
                bounce: 0.4,
            }
        },
        visible: {
            color: "#fff",
            y:"-30px",
            transition: {
                type: 'spring',
                duration: 0.5,
                bounce: 0.4,
            }
        }
    }

    const techTextVariants = {
        hidden: {
            color: "#929293",
            transition: {
                type: 'spring',
                duration: 0.5,
                bounce: 0.4,
            }
        },
        visible: {
            color: "#fff",
            transition: {
                type: 'spring',
                duration: 0.5,
                bounce: 0.4,
            }
        }
    }

    return (
        <motion.div className="bg-paper relative p-8 min-h-96 overflow-hidden hover:cusor-pointer xs:mb-5"
            whileHover="visible"
            initial="hidden"
            animate={controls}
            onClick={() => controls.start('visible')}
            variants={workBlockVariants}
        >
            {/* <motion.div 
                className="absolute inset-0 z-0"
                variants={imageVariants}
                style={{
                    objectPosition: "bottom",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
            /> */}

            <motion.video
                className="absolute inset-0 z-10"
                variants={imageVariants}
                style={{
                    objectPosition: "bottom",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
                autoPlay
                muted
                loop
                src={media ? media : "https://tylerco-assets.s3.us-east-2.amazonaws.com/waves.mp4"}
            />
            <motion.i 
                className="bx bx-right-arrow-alt text-4xl absolute top-0 right-0 -rotate-45 z-10" 
                variants={iconVariants} 
            />
            <motion.h2 className="relative text-vw-sm xs:text-4xl leading-tight font-semibold text-off-black z-10" variants={headerVarient}>{title}</motion.h2>
            <motion.p className="relative text-xl text-off-black py-8 z-10" variants={bodyTextVariants}>{description}</motion.p>
            <motion.p className="absolute bottom-3 left-8 text-body text-xs text-grey-40 z-10" variants={techTextVariants}>{tech}</motion.p>
        </motion.div>
    )
}
// TODO: Get actual media for each project
export default function Work() {
    return (
        <section id="work">
            <div className="overflow-hidden bg-off-black py-36 xs:py-20 text-sand">
                <div className="container mx-auto lg:my-10 xs:my-0 z-20">
                    <div className="flex xs:flex-wrap lg:px-20 xs:px-0 mb-10">
                        <div className="">
                            <Reveal yValue={20}>
                                <div className="text-base">
                                    <span className="text-primary pr-8 mr-2 inline-block border-b-4 border-b-secondary"></span>
                                    <span className="text-sand inline-block font-semibold">RECENT PROJECTS</span>
                                </div>
                            </Reveal>
                            <Reveal delayInView="0.25">
                                <h1 className="lg:text-vw-xl xs:text-8xl font-semibold leading-tight xs:mb-10">Work</h1>
                            </Reveal>
                        </div>
                        <div
                            className="flex-initial w-100 "
                        >
                            <Reveal delayInView="0.5">
                                <p className="text-xl leading-relaxed lg:pt-15 lg:pl-15">
                                    I've had the pleasure of working on a variety of <span className="text-yellow font-bold underline">awesome</span> projects over the years 🎉. Here are a few of my recent favorites.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 xs:grid-cols-1 w-full gap-4">
                        <Reveal delayInView="0.75">
                            <WorkBlock 
                                title="Backflip Mobile" 
                                description="Real Estate Investing made simple mobile apps for iOS and Android"
                                tech="React, SwiftUI, Kotlin, Django, GraphQL, AWS"
                                media="https://tylerco-assets.s3.us-east-2.amazonaws.com/clouds.mp4"
                            />
                        </Reveal>
                        <Reveal delayInView="1">
                            <WorkBlock 
                                title="RE/MAX" 
                                description="A comprehensive ground up custom real estate platform, from web to mobile. We built a suite of tools for agents, brokers, and consumers."
                                tech="VueJS, React Native, Swift, Kotlin, Laravel, GraphQL, AWS"
                                media="https://tylerco-assets.s3.us-east-2.amazonaws.com/color-lines.mp4"
                            />
                        </Reveal>
                        <Reveal delayInView="1.25">
                            <WorkBlock 
                                title="MyOpenDoor" 
                                description="Open House contact management app for iOS"
                                tech="Swift, PHP, AWS"
                                media="https://tylerco-assets.s3.us-east-2.amazonaws.com/stars.mp4"
                            />
                        </Reveal>
                        <Reveal delayInView="1.5">
                            <WorkBlock 
                                title="ENCON" 
                                description="Conference and event management platform for iOS"
                                tech="Swift, PHP, AWS"
                                media="https://tylerco-assets.s3.us-east-2.amazonaws.com/coding.mp4"
                            />
                        </Reveal>
                        <Reveal delayInView="1.75">
                            <WorkBlock 
                                title="MyRealTour" 
                                description="Open house property tour app utilizing AR and bluetooth beacons to guide users through properties"
                                tech="Swift, PHP, AWS"
                            />
                        </Reveal>  
                        <Reveal delayInView="2">
                            <WorkBlock 
                                title="Enterprise Network" 
                                description="The booj independent Real Estate broker platform"
                                tech="VueJS, Laravel, PHP, Python, Swift, Kotlin, AWS"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
