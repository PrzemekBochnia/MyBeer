import React,{useState} from "react";
import ImgComp from "./imgComp";
import i1 from "../assets/15.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import i5 from "../assets/5.jpg";
import i6 from "../assets/6.jpg";
import i7 from "../assets/7.jpg";
import i8 from "../assets/8.jpg";
import i9 from "../assets/9.jpg";
import i10 from "../assets/10.jpg";
import i11 from "../assets/11.jpg";
import i12 from "../assets/12.jpg";
import i13 from "../assets/13.jpg";
import i14 from "../assets/14.jpg";
import i15 from "../assets/1.jpg";
import arrowRight from "../assets/arrowright.svg";
import arrowLeft from "../assets/arrowleft.svg";

const HomeSlider=()=>{
    let sliderArr =[
    <ImgComp src={i1}/>,
    <ImgComp src={i3}/>,
    <ImgComp src={i4}/>,
    <ImgComp src={i5}/>,
    <ImgComp src={i6}/>,
    <ImgComp src={i7}/>,
    <ImgComp src={i8}/>,
    <ImgComp src={i9}/>,
    <ImgComp src={i10}/>,
    <ImgComp src={i11}/>,
    <ImgComp src={i12}/>,
    <ImgComp src={i13}/>,
    <ImgComp src={i14}/>,
    <ImgComp src={i15}/>,
    ];
    const[x,setX] = useState(0)
    const handlegoLeft=()=>{
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100)
    };
    const handlegoRight=()=>{
        x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100)
    };
    const style = {
        transform : `translate(${x}%)`
    };
    
    return(
        <>
        <div className="slider">
            {sliderArr.map((item,index)=>{
                return(
                    <div  key={index} className="slide" style = {style}>
                        {item}
                    </div>
                )
            })};
            <button id="goLeft" onClick={handlegoLeft}><img className="slider_btn" src={arrowLeft}/></button>
            <button id="goRight" onClick={handlegoRight} ><img className="slider_btn" src={arrowRight}/></button>
        </div>
        </>
    );
};

export default HomeSlider;
