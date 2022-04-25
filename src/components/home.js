import React from "react";
import Footer from "./footer";
import HomeAbout from "./homeAbout";
import HomeHeader from "./homeHeader";
import LoginBar from "./homeLoginBar";
import HomeMenu from "./homeMenu";
import HomeSlider from "./homeSlider";
import HopBar from "./hopBar";


const Home=()=>{

    return(
        <>
        <LoginBar/>
        <HomeHeader/>
        <HomeMenu/>
        <HomeSlider/>
        <HopBar/>
        <HomeAbout/>
        <HopBar/>
        <Footer/>
        </>
    )
};

export default Home;
