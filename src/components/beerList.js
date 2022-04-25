import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore"





const BeerList=()=>{
    const db = firebase.firestore();
    const{currentUser} = useAuth()

    const beerList = document.querySelector(".beerList")

    function renderBeers(doc){
        let li = document.createElement("li")
        let beerName = document.createElement("span")

        li.setAttribute("data-id", doc.id)
        beerName.textContent = doc.data().beerName

        li.appendChild(beerName)

        beerList.appendChild(li)
    }
 
    // db.collection('users').get().then((snapshot)=>{
    //     snapshot.docs.forEach(doc=>{
    //         renderBeers(doc);
    //     })
    // })
    const dbRef = firebase.database().ref();
    dbRef.child("users").child(currentUser.uid).get().then((snapshot) => {
            snapshot.doc.forEach(doc=>{
                renderBeers(doc)
            })
        });

    
    return(
        <>
        <div>
            <li className="beerList"></li>
        </div>
        </>
    )

   
}
export default BeerList
