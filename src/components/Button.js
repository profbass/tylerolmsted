import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string,
    isNewTab: PropTypes.bool,
    iconClass: PropTypes.string,
    buttonClass: PropTypes.string,
};

Button.defaultProps = {
    size: "sm",
    color: "yellow",
    text: "Button",
    link: "#",
    type: "button",
    isNewTab: false,
    iconClass: "",
    buttonClass: "",
};

function Button({ size, text, link, type, isNewTab, buttonClass , iconClass}) {

    let buttonProps;

    switch (size) {
        case "sm":
            buttonProps = "rounded bg-yellow px-4 py-2 font-body text-sm font-bold uppercase text-primary hover:bg-grey-40 hover: transform hover:scale-105 transition-all";
            break;
        case "md":
            buttonProps = "g-yellow px-4 py-2 font-body text-md font-bold uppercase text-primary hover:bg-grey-50 hover: transform hover:scale-105 transition-all";
            break;
        case "lg":
            buttonProps = "mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20 hover: transform hover:scale-105 transition-all";
            break;
        default:
            buttonProps = "";
    }

    if (buttonClass) {
        buttonProps = buttonClass;
    }

    return (
        <a href={link} target={isNewTab ? "_blank" : "_self"} rel="noreferrer">
            <button
                className={buttonProps}
                alt={text}
                type={type}
            >
                {text}
                {iconClass && (
                    <i className={`bx ${iconClass} relative -right-2 text-3xl`}></i>
                )}
            </button>
        </a>
    );
}

export default Button;
