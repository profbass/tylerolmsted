import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default Footer;
