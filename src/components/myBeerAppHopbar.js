import React from "react";
import Hop from "../assets/hop.png";

const MyBeerAppHopBar=()=>{
    return(
        <div className="myBeerAppHopbar_container">
            <div className="myBeerAppHopbar" style={{backgroundImage: `url(${Hop})`}}>
            </div>
        </div>
        
    )
}
export default MyBeerAppHopBar;