import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import jwt from 'jsonwebtoken';

export default function Login(){

   
    const {setUser, setToken, user} = useStateContext();

    const handleLogin = async (ev) => {
        ev.preventDefault();
        const payload = {
            name: 'user_name ',
            role: 'user',
        }
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>   {
            console.log(json);
            const token = jwt.sign(JSON.stringify(payload), 'secret');
            console.log(token);
            setToken(token);
        })
        .catch(err => console.log(err));
    }    
    
    return (
        <>
        <form onSubmit={handleLogin}>
            <button type="submit">Login</button>
            </form>
        </>
    );
}
