import Button from "./Button";
import SocialLinks from "./SocialLinks";

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg-hero.jpg)`}}>
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="rounded-full border-8 border-yellow shadow-xl hover: transform hover:scale-105 transition-all">
                        <img
                            src={process.env.PUBLIC_URL + "/img/blog-author.jpg"}
                            className="h-48 rounded-full sm:h-56"
                            alt="author"
                        />
                    </div>
                    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                            Oh, hello! It's me, Tyler
                        </h1>
                        <div className="flex items-center justify-center pt-5 mt-5 sm:justify-start sm:pt-0">
                            <Button
                                size="sm"
                                text="My Resume"
                                link="https://tylerco-assets.s3.us-east-2.amazonaws.com/Tyler-Olmsted-Resume.pdf"
                                isNewTab={true}
                            />
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
