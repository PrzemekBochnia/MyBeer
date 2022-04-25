import React from "react";
import {Link} from 'react-router-dom';
import HomeHeader from "./homeHeader";
import HomeMenu from "./homeMenu";
import HopBar from "./hopBar";


const Logout=()=>{

    return(
        <>
        <section id="loginBar" className="loginBar">
        <div className="loginBar_container container">
          <div className="loginBar_item"><Link to= '/'>Wróć do strony głównej</Link></div>
          <div className="loginBar_item"><Link to='/login'>Zaloguj się</Link></div>
        </div>
        </section>
        <HomeHeader/>
        <HomeMenu/>
        <div className="logoutContainer">
            <h1 className="logRegHeader">Wylogowanie nastąpiło</h1>
            <h1 className="logRegHeader">pomyślnie!</h1>
            <HopBar/>
        </div>
        </>
    )
};

export default Logout;