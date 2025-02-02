import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import createToken from "../utils/createToken";


export default function Login(){

   
    const {setUser, setToken, user} = useStateContext();


    async function loginUser(){
        const response = await fetch('https://http://localhost:5173/log?name=Juan')
        const {token: tokenResponse} = await response.json();
        setToken(tokenResponse);
    }


    
    return (
        <>
            <button onClick={loginUser('user')}>Login usuario normal</button><br />
            <button onClick={onLoginDoctor}>Login usuario doctor</button><br />
            <button onClick={onLoginAdmin}>Login usuario admin</button>
        </>
    );
}
