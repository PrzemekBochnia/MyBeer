import React, { useState, useRef } from "react";
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import HomeHeader from "./homeHeader";
import HomeMenu from "./homeMenu";
import HopBar from "./hopBar";

export default function Login(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const {currentUser} = useAuth()
    const[error,setError] = useState("")
    const[loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()          

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError("nie udało się zalogowac")
        }
        setLoading(false)
    }

 
    return(
        <>
       <section id="loginBar" className="loginBar">
        <div className="loginBar_container container">
          <div className="loginBar_item"><Link to='/'>Wróć do strony głównej</Link></div>
          <div className="loginBar_item"><Link to= '/registration'>Stwórz nowe konto</Link></div>
        </div>
        </section>
        <HomeHeader/>
        <HomeMenu/>
        <div className="logRegContainer">
            <HopBar/>
            <h1 className="logRegHeader">Zaloguj się</h1>
            <h2>{error}</h2>
            <form className="logRegForm" onSubmit={handleSubmit}>
                <div className="logRegFormContainer">
                <label for="email" >Email</label>
                <input type="text" name="Email" ref={emailRef} />
                <label for="password" >Hasło</label>
                <input type="password" ref={passwordRef}/>
                </div>
                <div className="logRegButtonsContainer">
                    <button className="logRegBtn">
                    <Link to="/registration">Załóż konto</Link>
                    </button>
                    <button className="logRegBtn">
                    <input type="submit" value="Zaloguj"></input>
                    </button>
                </div>
            </form>

        </div>
        </>
        
    )
};

