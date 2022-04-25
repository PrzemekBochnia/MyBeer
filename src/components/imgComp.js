import React from "react";

const ImgComp=({src})=>{
    let imgStyles={
        width: 100 +"%",
        height:"700px"
    }
    return(
        <img src={src} alt="slide-img" style={imgStyles}></img>
    )
};
export default ImgComp;