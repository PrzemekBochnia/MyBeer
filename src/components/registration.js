import React, { useState, useRef } from "react";
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import HomeHeader from "./homeHeader";
import HomeMenu from "./homeMenu";
import HopBar from "./hopBar";

export default function Registration(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth();
    const[error,setError] = useState("")
    const[loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()   
              
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("hasła nie sa takie same")
        }
        
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
            setError("nie udało się założyć konta")
        }
        setLoading(false)
        
    }
    
    
    return(
        <>
       <section id="loginBar" className="loginBar">
        <div className="loginBar_container container">
          <div className="loginBar_item"><Link to='/'>Wróć do strony głównej</Link></div>
          <div className="loginBar_item"><Link to= '/login'>Zaloguj się</Link></div>
        </div>
        </section>
        <HomeHeader/>
        <HomeMenu/>
        <div className="logRegContainer">
            <HopBar/>
            <h1 className="logRegHeader">Załóż konto</h1>
            <h2></h2>
            <form className="logRegForm" onSubmit={handleSubmit} >
                <div className="logRegFormContainer">
                <label for="email">Email</label>
                <input type="text" name="Email" ref={emailRef}/>
                <label for="password">Hasło</label>
                <input type="password"ref={passwordRef}/>
                <label for="password">Powtórz hasło</label>
                <input type="password" ref={passwordConfirmRef}/>
                </div>
                <div className="logRegButtonsContainer">
                <button className="logRegBtn">
                    <Link to="login" >Zaloguj</Link>
                </button>
                <button className="logRegBtn">    
                    <input type="submit" value="Załóż konto" disabled={loading}></input>
                    </button>
                </div>
            </form>

        </div>
        </>
        
    )
};

// export default Registration;