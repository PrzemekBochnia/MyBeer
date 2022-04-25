import React from "react";
import Background from "../assets/beerAboutBackground.jpg"

const HomeAbout=()=>{
    return(
        <>
        <section id="about">
            <div className="about_all_container">
                <div className="about_img_container" >
                    <img className="about_img" src={Background} alt="background"/>
                </div>
                <div className="about_container container">
                    <h1>Moje Piwko</h1>
                    <p> Aplikacja Moje Piwko pozwoli ci na stworzenie własnej bazy piw których już próbowałeś. Będziesz mógł ocenić ich smak, barwę czy aromat. Aplikacja pozwoli ci na stworzenie własnego rankingu piw i listy piw których chcesz spróbować </p>
                </div>
            </div>
        </section>
        </>
    )
};
export default HomeAbout;