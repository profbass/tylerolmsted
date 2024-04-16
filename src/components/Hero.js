import Reveal from "../utils/Reveal"
import SocialLinks from "../utils/SocialLinks"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'


const Hero = () => {
    const isMobile = window.innerWidth <= 500;

    return (
        <section id="home">
            <ParallaxProvider>
            <div 
                className="relative w-full overflow-hidden lg:h-200 md:h-150 sm: h-85"
            >
                
                <div className="relative z-20">
                    <Parallax speed={-25}>
                    <div className="container mx-auto h-full lg:mt-60 xs:mt-32">
                        
                        <div className="flex flex-wrap lg:pl-20">
                            
                                <p 
                                    className="text-white font-body lg:text-vw-sm sm:text-vw-md pb-5vw leading-extra-loose"
                                >
                                    <Reveal delayInView="0.5" yValue={20}>Pioneering Next-Gen SaaS Solutions <br /></Reveal>
                                    <Reveal delayInView="0.7" yValue={20}>with Global Impact Through Visionary<br /></Reveal>
                                    <Reveal delayInView="0.9" yValue={20}>Engineering and Strategic Leadership</Reveal>
                                </p>
                            
                                <h1 className="text-white font-header2 text-vw-xl leading-extra-tight overflow-visible">
                                    <Reveal delayInView="0.25">Inspired<br /></Reveal>
                                    <Reveal delayInView="0.75">Digital<br /></Reveal>
                                    <Reveal delayInView="1.2">Experiences.</Reveal>
                                </h1>
                            
                        </div>
                        <div className="flex lg:flex-nowrap xs:flex-wrap w-full">
                            <div
                                className="flex lg:w-3/5 xs:w-full"
                            >
                                <Reveal delayInView="1">
                                    <p
                                        className="text-white font-body lg:text-vw-sm sm:text-vw-md pt-10vw leading-extra-loose"
                                    >
                                        My vision is to build cutting-edge products<br /> 
                                        by empowering teams to do their best work <br />
                                        yet, through cross-functional insights to ensure<br /> 
                                        we build resilient, enduring solutions that<br />
                                        deliver compelling value
                                    </p>
                                </Reveal>
                            </div>
                            <div
                                className="flex lg:w-2/5 xs:w-full text-white font-body lg:text-vw-xs sm:text-vw-sm pt-20vw leading-extra-loose"
                            >   
                                <Reveal delayInView="1.2">
                                    <div className="grid grid-cols-3 gap-1">
                                        <div className="text-right pr-5">Phone</div>
                                        <div className="col-span-2">
                                            <a href="tel:13039053904">+1 303 905 3904</a></div>
                                        <div className="text-right pr-5">Email</div>
                                        <div className="col-span-2">
                                            <a href="mailto:tylerdolmsted@gmail.com">tylerdolmsted@gmail.com</a>
                                        </div>
                                        <div></div>
                                        <div className="mt-3 col-span-2">
                                            <SocialLinks
                                                className="text-white text-3xl mr-5"
                                            />
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                </Parallax>
                </div>
                {isMobile ? (
                    <img
                        className="absolute inset-0 z-10 "
                        alt="waves"
                        style={{
                            objectPosition: "bottom",
                            objectFit: "cover",
                            width: "100%",
                            height: "100%"
                        }}
                        src={"https://tylerco-assets.s3.us-east-2.amazonaws.com/waves-img.jpg"}
                    />
                
                ) : (
                    <video
                        className="absolute inset-0 z-10"
                        style={{
                            objectPosition: "bottom",
                            objectFit: "cover",
                            width: "100%",
                            height: "100%"
                        }}
                        autoPlay
                        muted
                        loop
                        src={"https://tylerco-assets.s3.us-east-2.amazonaws.com/waves.mp4"}
                    />
                )}
            </div>
            
            </ParallaxProvider>
        </section>
    );
};

export default Hero;
