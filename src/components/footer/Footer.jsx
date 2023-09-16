import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                <strong>&copy; 2023.  </strong>
     All rights reserved.
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
