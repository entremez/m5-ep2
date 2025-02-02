import { Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

export default function GuestLayout(){
    const {token, user} = useStateContext();
    var message = 'Hola, se necesita registro';
    if(token && user.role == 'user'){
        message = 'Hola {user.name}';
        return <Navigate to="/citas" />
    }

    if(token && user.role == 'doctor'){
        message = 'Hola {user.name}';
        return <Navigate to="/doctor" />
    } 

    if(token && user.role == 'admin'){
        message = 'Hola {user.name}';
        return <Navigate to="/admin" />
    } 

    return (
        <>
            <h1>{message}</h1>
            <Outlet />
        </>
    );
}