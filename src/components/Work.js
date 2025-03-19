import { motion, useAnimation } from 'framer-motion';
import Reveal from '../utils/Reveal';
import { assets } from '../config/assets';
const WorkBlock = ({ title, description, tech, video, image }) => {
    const controls = useAnimation();
    const isMobile = window.innerWidth <= 500;
    
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
            fontSize: "1.7rem",
            transition: {
                type: 'spring',
                duration: 1,
                bounce: 0.4,
            }
        },
        visible: {
            opacity: 1,
            y: "-20px",
            fontSize: "1.25rem",
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
        <motion.div className="bg-paper relative p-8 min-h-120 overflow-hidden hover:cusor-pointer lg:mb-0 xs:mb-5"
            whileHover="visible"
            initial="hidden"
            animate={controls}
            onClick={() => controls.start('visible')}
            variants={workBlockVariants}
        >
            <motion.div 
                className="absolute inset-0 z-20" 
                variants={imageVariants} 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}/>
            {isMobile && image ? ( 
                <motion.img
                className="absolute inset-0 z-10"
                variants={imageVariants}
                style={{
                    objectPosition: "bottom",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
                src={image ? image : "https://tylerco-assets.s3.us-east-2.amazonaws.com/waves.mp4"} 
                />
            ) : (
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
                    src={video ? video : "https://tylerco-assets.s3.us-east-2.amazonaws.com/waves.mp4"}
                />
            )}
            <motion.i 
                className="bx bx-right-arrow-alt text-4xl absolute top-0 right-0 -rotate-45 z-20" 
                variants={iconVariants} 
            />
            <motion.h2 className="relative text-vw-sm xs:text-4xl leading-tight font-semibold text-off-black z-50" variants={headerVarient}>{title}</motion.h2>
            <motion.p className="relative text-xl text-off-black py-8 z-50" variants={bodyTextVariants}>{description}</motion.p>
            <motion.p className="absolute bottom-3 left-8 text-body text-xs text-grey-40 z-50" variants={techTextVariants}>built using: {tech}</motion.p>
        </motion.div>
    )
}

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
                                description="The Backflip mobile application revolutionizes real estate investing on iOS and Android by leveraging native mobile code for optimal performance and integrating machine learning to automate the identification and evaluation of potential deals. Backflip helps investors efficiently source potential home deals with tailored financial options, making complex investment decisions accessible and actionable at the touch of a button."
                                tech="React, SwiftUI, Kotlin, Django, GraphQL, AWS"
                                video={assets.videos.portfolio.backflip}
                                image="https://tylerco-assets.s3.us-east-2.amazonaws.com/backflip-logo.jpg"
                            />
                        </Reveal>
                        <Reveal delayInView="1">
                            <WorkBlock 
                                title="RE/MAX" 
                                description="RE/MAX's in-house Agent/Consumer platform included a custom suite of tools designed specifically for agents, brokers, and consumers, enhancing the property buying and selling process, from consumer mobile searcn tools, to agent and brokerage management tools including customizable brokerage and agent websites, a suite of mobile apps, lead management software, a custom CRM, dynamic reporting, agent productivity tools, and much more."
                                tech="VueJS, React Native, Swift, Kotlin, Laravel, GraphQL, AWS"
                                video="https://tylerco-assets.s3.us-east-2.amazonaws.com/remax-vid.mp4"
                                image="https://tylerco-assets.s3.us-east-2.amazonaws.com/remax.png"
                            />
                        </Reveal>
                        {/* TODO: I need to add a better image for mobile */}
                        <Reveal delayInView="2">
                            <WorkBlock 
                                title="booj - TEN" 
                                description=" booj's TEN is a customized Real Estate platform specifically tailored to the needs of independent real estate brokers under the booj brand. Our mission is to empower brokers and agents with the technology needed to stay competitive in their local markets. Therefore, we offer a complete end-to-end solution that has been developed in-house which included customizable brokerage and agent websites, a suite of mobile apps, lead management software, a custom CRM, dynamic reporting, agent productivity tools, and much more."
                                tech="VueJS, Laravel, PHP, Python, Swift, Kotlin, AWS"
                                video="https://tylerco-assets.s3.us-east-2.amazonaws.com/booj.mp4"
                                image="https://tylerco-assets.s3.us-east-2.amazonaws.com/booj-logo.png"
                            />
                        </Reveal>
                        {/* TODO: I need a better image for this */}
                        <Reveal delayInView="1.25">
                            <WorkBlock 
                                title="MyEventManager" 
                                description="A white-labeled open house contact management app for iOS, tailored specifically for real estate agents to streamline visitor tracking and follow-ups at open houses. This bespoke solution simplifies the capture and organization of potential buyer data, enables immediate communication, and facilitates efficient lead management directly from their mobile devices. By automating these processes, our app helps agents enhance engagement, improve follow-up accuracy, and ultimately, increase the likelihood of closing sales swiftly."
                                tech="Swift, PHP, AWS"
                                video="https://tylerco-assets.s3.us-east-2.amazonaws.com/MyEventManager.mp4"
                                image="https://tylerco-assets.s3.us-east-2.amazonaws.com/my-event-manager.PNG"   
                            />
                        </Reveal>
                        {/* TODO: I need a better image for this */}
                        <Reveal delayInView="1.5">
                            <WorkBlock 
                                title="ENCON" 
                                description="ENCON is a white-labeled conference and event management platform for iOS, designed to enhance attendee engagement and streamline event logistics. This comprehensive application allows attendees to follow along with presentation slides in real-time, view the event schedule, and communicate directly with the event team. Tailored to meet the needs of both organizers and participants, our platform facilitates a seamless interaction flow, ensuring that attendees can maximize their event experience through timely updates, interactive features, and essential organizational tools. "
                                tech="Swift, PHP, AWS"
                                video={assets.videos.portfolio.encon}
                                image="https://tylerco-assets.s3.us-east-2.amazonaws.com/encon.jpg"
                            />
                        </Reveal>
                        <Reveal delayInView="1.75">
                            <WorkBlock 
                                title="MyRealTour" 
                                description="We engineered an innovative platform for The Enterprise Network, specifically tailored to the distinctive needs of independent real estate brokers associated with the booj brand. This white-labeled solution revolutionizes open house experiences by integrating Bluetooth beacons to create interactive augmented reality (AR) tours. These tours guide potential buyers through properties with real-time informational overlays and immersive walkthroughs, enhancing client engagement and understanding. Alongside AR capabilities."
                                tech="Swift, PHP, AWS"
                                video="https://tylerco-assets.s3.us-east-2.amazonaws.com/coding.mp4"
                                image="https://tylerco-assets.s3.us-east-2.amazonaws.com/myrealtour.jpg"
                            />
                        </Reveal>  
                    </div>
                </div>
            </div>
        </section>
    )
}
