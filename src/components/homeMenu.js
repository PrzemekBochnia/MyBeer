import React from "react";
import {Link} from 'react-router-dom';

const HomeMenu=()=>{
    return(
        <>
        <section id="menu">
        <div className="menu_container container">
          <div className="menu_item"><Link to='/history'>Historia Piwa</Link></div>
          <div className="menu_item"><Link to= '/glass'>Szkło do piwa</Link></div>
        </div>
        </section>
        </>
    )
};
export default HomeMenu;