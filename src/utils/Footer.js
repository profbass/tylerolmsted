import React from 'react'
import SocialLinks from './SocialLinks';

// TODO: footer z-index is preventing the links from working
const Footer = () => {
    return (
        <footer id="footer" className="bg-off-black min-h-72 relative z-0 bottom-0 w-full">
                <div className="bottom-5 left-0 w-full">
                    <div className="container">
                        <div className="grid lg:grid-cols-3 xs:grid-cols-1 w-full text-sm text-white">
                            <div className="text-grey-40 relative pt-10">
                                
                                <p className="py-2 cursor-pointer">
                                    <a href="mailto:tylerdolmsted@gmail.com">tylerdolmsted@gmail.com</a>
                                </p>
                                <p className="">
                                    <a href="phone:+13039053904" className="text-yellow cursor-pointer block">+1 303 905 3904</a>
                                </p>
                                <p className="font-body pt-20 text-white block">
                                    &copy; {new Date().getFullYear()}. All rights reserved.
                                </p>
                            </div>
                            <div className="text-2xl pt-10">
                                <SocialLinks 
                                    type="Text"
                                    className="block pb-5"
                                />
                            </div>
                            <div className="text-right">
                                <img 
                                    src="/img/logo-tyler-olmsted.svg" 
                                    alt="Tyler Dug Olm." 
                                    className="lg:max-w-64 xs:max-w-20 float-end greyscale-100" 
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;
