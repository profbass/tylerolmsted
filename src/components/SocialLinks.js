import React from 'react';

const socialMediaData = [
  {
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tyler-olmsted-8476716/',
    iconClass: 'bx bxl-linkedin',
    iconText: 'text-2xl text-white hover:text-yellow',
  },
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/slimanddangerous/',
    iconClass: 'bx bxl-instagram',
    iconText: 'text-2xl text-white hover:text-yellow',
  },
  {
    platform: 'Email',
    link: '#contact',
    iconClass: 'bx bx-envelope',
    iconText: 'text-2xl text-white hover:text-yellow',
  },
];

const SocialLinks = () => {
  return (
    <>
      {socialMediaData.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noreferrer"
          className="pl-4 hover: transform hover:scale-110 transition-all"
        >
          <i className={`${socialMedia.iconClass} ${socialMedia.iconText}`}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
