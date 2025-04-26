"use client";

import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

// To change variant of button add a className to the child of Button compoenent
// <Button asChild className={styles.cta}>
//  <a href={intro.button.url} target="_blank" rel="noopener noreferrer">
//   {intro.button.label}
//  </a>
// </Button>
//
//
// So far i defined primary, secondary, ghost and disabled

const Button = ({ children, asChild = false, className = "", disabled = false }) => {
    const classes = `${styles.button} ${disabled ? styles.disabled : ""} ${className}`;

    if (asChild) {
        return React.cloneElement(children, {
            className: `${classes} ${children.props.className || ""}`,
            'aria-disabled': disabled,
            onClick: disabled ? (e) => e.preventDefault() : children.props.onClick,
        });
    }

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
        }
    };

    return (
        <Link href="#" onClick={handleClick}>
            <span className={classes} aria-disabled={disabled}>
                {children}
            </span>
        </Link>
    );
};

export default Button;
