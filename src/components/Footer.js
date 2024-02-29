import React from 'react';

const Footer = () => {
    return (
        <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                    <a href="https://www.linkedin.com/in/tyler-olmsted-8476716/" target="_blank" rel="noreferrer" className="pl-4">
                        <i className="bx bxl-linkedin text-2xl text-white hover:text-coral"></i>
                    </a>
                    <a href="https://www.instagram.com/slimanddangerous/" target="_blank" rel="noreferrer" className="pl-4">
                        <i className="bx bxl-instagram text-2xl text-white hover:text-coral"></i>
                    </a>
                    <a href="#contact" className="pl-4">
                        <i className="bx bx-envelope text-2xl text-white hover:text-coral"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
