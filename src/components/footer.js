import React from "react";
import FacebookImg from "../assets/Facebook.svg";
import InstagramImg from "../assets/Instagram.svg";

const Footer=()=>{
    return(
        <>
         <footer className="footer">
            <div className="footer_container container">
                <h1 className="logo_footer">Moje<span> Piwko</span></h1>
            </div>
            <div className="footerImg">
                <img className="facebookimg" src={FacebookImg} alt="facebook"/>
                <img className="instagramImg" src={InstagramImg} alt="instagram"/>
            </div>
        </footer>
        </>
    )
};
export default Footer;