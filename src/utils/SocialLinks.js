import React from 'react';

const socialMediaData = [
  {
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tyler-olmsted-8476716/',
    iconClass: 'bx bxl-linkedin',
    target: '_blank',
  },
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/slimanddangerous/',
    iconClass: 'bx bxl-instagram',
    target: '_blank',
  },
  {
    platform: 'Github',
    link: 'https://github.com/profbass',
    iconClass: 'bx bxl-github',
    target: '_blank',
  }
]

const SocialLinks = ({type="icon", className}) => {
  return (
    <>
      {socialMediaData.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target={socialMedia.target}
          rel="noreferrer"
        >
          {type === "icon" ? (
            <i className={`${socialMedia.iconClass} ${className} text-off-black text-2xl`}></i>
          ) : (
            <span className={className}>{socialMedia.platform}</span>
          )}
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
