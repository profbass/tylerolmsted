import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Avatar from "./Avatar";
import Reveal from "../utils/Reveal";

const Hero = () => {

    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg-hero.jpg)`}}>
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48 transition-all">
                <Reveal>
                    <div className="flex justify-center py-10">
                        <Avatar />
                        <div className="pt-2 pl-8 ">
                            <Reveal delayInView="0.5">
                            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                                Oh, hello! It's me, Tyler
                            </h1>
                            </Reveal>
                            <Reveal delayInView="0.75" yValue={20}>
                            <div className="flex items-center justify-center pt-5 mt-5 sm:justify-start sm:pt-0">
                                <Button
                                    size="sm"
                                    text="My Resume"
                                    link="https://tylerco-assets.s3.us-east-2.amazonaws.com/Tyler-Olmsted-Resume.pdf"
                                    isNewTab={true}
                                />
                            </div>
                            </Reveal>
                            <Reveal delayInView="1">
                            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-0">
                                    <p className="font-body text-lg uppercase text-white">Let's connect</p>
                                    <div className="hidden sm:block">
                                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                                    <SocialLinks />
                                </div>
                            </div>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Hero;
