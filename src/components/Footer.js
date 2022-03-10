import React from "react";
import styles from '../styles/Footer.module.scss';
import SocialMediaAccounts from "./SocialMedia";

const Footer = () =>
{
    return (
        <div className={ styles.footer }>
            <div className="container">
                <div className={ styles.borderTop }></div>
                <div className={ styles.footer__centent }>
                    {/* <p>Built with Next.js, scss </p> */ }
                    <p>&copy; <em >{ new Date().getFullYear() }</em> Ghofrane Ben Hmaid</p>
                    <SocialMediaAccounts />

                </div>
            </div>
        </div>
    )
}

export default Footer;