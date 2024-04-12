import React from 'react';
import PropTypes from 'prop-types';
// TODO: make this cool af
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

function Button({ size, color, text, link, type, isNewTab, buttonClass , iconClass}) {

    let buttonProps;

    switch (size) {
        case "xs":
            buttonProps = `rounded bg-${color} px-2 py-1 font-body text-xs font-bold text-white`;
            break;
        case "sm":
            buttonProps = `rounded bg-${color} px-4 py-2 font-body text-sm font-bold text-white`;
            break;
        case "md":
            buttonProps = `bg-${color} px-4 py-2 font-body text-md font-bold text-white`;
            break;
        case "lg":
            buttonProps = `mt-6 flex items-center justify-center rounded bg-${color} px-8 py-3 font-header text-lg font-bold text-white hover:bg-grey-20`;
            break;
        default:
            buttonProps = "";
    }

    if (buttonClass) {
        buttonProps = buttonClass + " cursor-pointer " + buttonProps;
    }

    return (
        <a 
            href={link} 
            target={isNewTab ? "_blank" : "_self"} 
            rel="noreferrer"
            className={buttonProps}
            alt={text}
            type={type}
        >
            {text}
            {iconClass && (
                <i className={`bx ${iconClass} relative -right-2 text-3xl`}></i>
            )}
        </a>
    );
}

export default Button;
