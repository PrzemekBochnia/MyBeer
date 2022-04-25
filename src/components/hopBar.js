import React from "react";
import Hop from "../assets/hop.png";

const HopBar=()=>{
    return(
        <div className="hopbar_container">
            <div className="hopbar" style={{backgroundImage: `url(${Hop})`}}>
            </div>
        </div>
        
    )
}
export default HopBar;