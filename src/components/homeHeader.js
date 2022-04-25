import React from "react";
import {Link} from 'react-router-dom';


const HomeHeader=()=>{
    
    return(
        <>
        <header className="header">
            <div className="header__container container">
                <h1 className="logo">Moje<span>Piwko</span></h1>
                <nav>
                    <ul className="header__nav">
                    <li className="nav__element"><Link to="/myBeerApp" className=" linkToApp">Moje Piwko </Link></li>
                    <li className="nav__element"><Link to = '/about' className="nav__link">O aplikacji</Link></li>
                    <li className="nav__element"><Link to= '/beerStyles' className="nav__link">Piwne Style</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
};
export default HomeHeader;