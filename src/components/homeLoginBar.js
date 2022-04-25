import React, { useEffect, useState } from "react";
import {Link,useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";


const LoginBar=()=>{
    const{currentUser, logout} = useAuth()
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const[error,setError] = useState("")
    const history = useHistory()

    useEffect(()=>{
        if(currentUser){
            setIsLoggedIn(true)
        }
    })

    async function handleLogout() {
        setError("")

        try{
        await logout()
        history.push("/logout")
        }catch{
            setError("nie udało sie wylogować")
        }
    }
    if(isLoggedIn===true){
      return(
        <>
        <section id="loginBar" className="loginBar">
        <div className="loginBar_container container">
          <h2>Cześć {currentUser.email}</h2>
          <div className="loginBar_item"><Link to='/myBeerApp'>Przejdź do aplikacji</Link></div>
          <div className="loginBar_item"><Link to= '/logout' onClick={handleLogout}>Wyloguj</Link></div>
        </div>
        </section>
        </>
      )
    }else{

      return(
        <>
        <section id="loginBar" className="loginBar">
        <div className="loginBar_container container">
          <div className="loginBar_item"><Link to='/login'>Zaloguj się</Link></div>
          <div className="loginBar_item"><Link to= '/registration'>Stwórz nowe konto</Link></div>
        </div>
        </section>
        </>
    )
  }
  };
export default LoginBar;