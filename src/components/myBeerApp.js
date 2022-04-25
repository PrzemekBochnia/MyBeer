import React, { useEffect, useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { database } from "../firebase";
import firebase from "firebase";
import   storage  from "../firebase";
import Footer from "./footer";
import HomeHeader from "./homeHeader";
import HomeMenu from "./homeMenu";
import Login from "./login";
import MyBeerAppHopBar from "./myBeerAppHopbar";
import Background from "../assets/background.jpg";
import BackgroundForm from "../assets/backgroundStyle.jpg";
import Tavern from "../assets/tavern.jpg";


const MyBeerApp=()=>{
    
    const{currentUser, logout} = useAuth()
    const[error,setError] = useState("")
    const history = useHistory()
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const[beerName,setBeerName]=useState([""]);
    const[brewery,setBrewery]=useState([""]);
    const[description,setDescription]=useState([""]);
    const[color,setColor]=useState([""]);
    const[aroma,setAroma]=useState([""]);
    const[bitter,setBitter]=useState([""]);
    const[flavor,setFlavor]=useState([""]);
    const[rate,setRate]=useState([""]);
    const [postsList,setPostsList] = useState([]);
    const[image, setImage] = useState('');
    const[url, setUrl] = useState("");
    const[progress,setProgress]=useState(0)


    const handleBeerName=(e)=>{
        setBeerName(e.target.value)
    };
    const handleBrewery=(e)=>{
        setBrewery(e.target.value)
    };
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    };
    const handleColor=(e)=>{
        setColor(e.target.value)
    };
    const handleAroma=(e)=>{
        setAroma(e.target.value)
    };
    const handleBitter=(e)=>{
    setBitter(e.target.value)
    };
    const handleFlavor=(e)=>{
    setFlavor(e.target.value)
    };
    const handleRate=(e)=>{
    setRate(e.target.value)
    };
    async function handleLogout() {
        setError("")
        
        try{
        await logout()
        history.push("/logout")
        }catch{
            setError("nie udało sie wylogować")
        }
    }
    useEffect(()=>{
        if(currentUser){
            setIsLoggedIn(true)
        }
    })
    const handleWelcome=()=>{
        const welcomePage = document.querySelector(".welcomePageContainer");
        const beerListContainer = document.querySelector(".beerListContainer");
        const form = document.querySelector(".addBeerForm");
        beerListContainer.style.display = "none"
        form.style.display = "none"; 
        welcomePage.style.display = "flex";
    }
    const handleAddBeerBtn=()=>{
        const form = document.querySelector(".addBeerForm");
        const beerListContainer = document.querySelector(".beerListContainer")
        const welcomePage = document.querySelector(".welcomePageContainer");
        beerListContainer.style.display = "none"
        form.style.display = "none" ? "flex" : "none";
        welcomePage.style.display = "none";
    }
    const handleShowBeerList=()=>{
        const beerListContainer = document.querySelector(".beerListContainer")
        const welcomePage = document.querySelector(".welcomePageContainer");
        const form = document.querySelector(".addBeerForm");
        beerListContainer.style.display = "flex";
        form.style.display = "none"; 
        welcomePage.style.display = "none";
    }

    const handleImage=async(e)=>{
        e.preventDefault()
        if(e.target.files[0]){
            setImage(e.target.files[0])}
            return new Promise((resolve,reject)=>{
                console.log("uploading image...");
                const storageRef =firebase.storage().ref();
                const uploadTask = storageRef.child(`images/${image.name}`).put(image);
                uploadTask.on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot) => {
                      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log("Upload is " + progress + "% done");
                      setProgress(progress)
                      console.log(image.name);
                    },
                    (error) => {
                    if(image.name==="undefined"){

                        console.log(error+"blabla");
                        reject(error);
                    }
                    },
                    async () => {
                        const imgURL = await uploadTask.snapshot.ref.getDownloadURL();
                        console.log("uploaded image: " + imgURL);
                        setUrl(imgURL)
                        resolve();
                    },
                    );
                  });
                }
                
                useEffect(()=>{
                    const dbRef = firebase.database().ref();
                    dbRef.child('users').child(currentUser.uid).child('posts').on('value',(snapshot)=>{
                        const posts = snapshot.val();
                        let postsList=[]
                        for (let id in posts){
                            postsList.push(posts[id])
                        }
                        setPostsList(postsList)
                    })
                    
                },[]);
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = document.querySelector(".addBeerForm");
        const beerListContainer = document.querySelector(".beerListContainer")
        form.style.display = "none"
        beerListContainer.style.display = "flex"
        
    
        const postListRef = firebase.database().ref('users/' + currentUser.uid + '/posts');
        const newPostRef =  postListRef.push();
        newPostRef.set({
            beerName,
            brewery,
            description,
            color,
            aroma,
            bitter,
            flavor,
            rate,
            url
        });
    }

    
    
    if(isLoggedIn!==true){
        return(
            <>
            <Login/>
            </>
        )
    }else{
        
        return(
            <>
        <section id="loginBar" className="loginBar">
        <div className="loginBar_container container">
          <h2>Cześć {currentUser.email}</h2>
          <div className="loginBar_item"><Link to='/'>Wróć do strony głównej</Link></div>
          <div className="loginBar_item"><Link to= '/logout' onClick={handleLogout}>Wyloguj</Link></div>
        </div>
        </section>
        <HomeHeader/>
        <HomeMenu/>
        <div className="myBeerContent">
        <div className="menu_App_left">
            <h1 className="welcome" onClick={handleWelcome}>{currentUser.email}</h1>
            <div className="menu_App_item" onClick={handleShowBeerList}>Moje Piwa</div>
            <div className="menu_App_item">Do Wypicia</div>
            <div className="menu_App_item">Ranking</div>
            <button className="addBeerBtn" onClick={handleAddBeerBtn}>Dodaj Piwo</button>
        </div>
        <div className="addBeerForm" style={{backgroundImage: `url(${BackgroundForm})`}}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="beername">Nazwa Piwa</label>
                <input className="beerName" type="text" placeholder="nazwa piwa" onChange={e=>{handleBeerName(e)}}></input>
                <label htmlFor="beername">Nazwa Browaru</label>
                <input className="brewery" type="text" placeholder="nazwa browaru" onChange={e=>{handleBrewery(e)}}></input>
                <label htmlFor="file">Dodaj Zdjęcie</label>
                <input type="file"onChange={e=>{handleImage(e)}} ></input>
                <progress id="file" value={progress} max="100"></progress>

                <label htmlFor="textarea">Dodaj opis piwa</label>
                <input type="textarea" placeholder="opis" onChange={e=>{handleDescription(e)}}></input>
                <label htmlFor="text">Barwa</label>
                <select placeholder="opisz barwę piwa" onChange={e=>{handleColor(e)}}>
                    <option className="firstColor">Słomkowa</option>
                    <option className="secondColor">Żółta</option>
                    <option className="thirdColor">Ciemnozłota</option>
                    <option className="fourthColor">Jasnobrązowa</option>
                    <option className="fifthColor">Brązowa</option>
                    <option className="sixthColor">Ciemnobrązowa</option>
                    <option>Inna</option>
                </select>
                <label htmlFor="text">Aromat</label>
                <input type="text" placeholder="opisz aromat piwa" onChange={e=>{handleAroma(e)}}></input>
                <label htmlFor="text">Smak</label>
                <input type="text" placeholder="opisz smak piwa" onChange={e=>{handleFlavor(e)}}></input>
                <label htmlFor="quantity">Goryczka</label>
                <input type="number" id="quantity" name="quantity" min="1" max="10" onChange={e=>{handleBitter(e)}}></input>
                <label htmlFor="quantity">Ocena ogólna</label>
                <input type="number" id="quantity" name="quantity" min="1" max="100"  onChange={e=>{handleRate(e)}}></input>
                <input type="submit" value="Dodaj" className="sendBtn"/>
            </form>
        </div>
        <div className="welcomePageContainer">
            <div className="welcomePageText">Witaj {currentUser.email}, po lewej stronie znajdziesz swoją listę piw oraz ranking, jeśli jeszcze jej nie masz kliknij przycisk dodaj i zacznij tworzyć swoją bazę piw. </div>
            <div className="welcomePageImg" style={{backgroundImage: `url(${Tavern})`}}></div>
        </div>
        <div className="beerListContainer" style={{backgroundImage: `url(${Background})`}}>
            <ul className="beerList">
            {postsList ? postsList.map((posts) => <li key={posts.id}className="beerListItem">Nazwa piwa: {posts.beerName}<br/>Browar: {posts.brewery}<br/>Opis: {posts.description}<br/>Barwa: {posts.color}<br/>Aromat: {posts.aroma}<br/>
            Smak:  {posts.flavor}<br/>Goryczka: {posts.bitter}/10<br/>Ocena: {posts.rate}/100<br/>   <img className="beerImage" src={posts.url}></img><MyBeerAppHopBar/></li>): ""}
            </ul>
        </div>
        </div>
      
        <Footer/>
        </>
    )
}
};

export default MyBeerApp;