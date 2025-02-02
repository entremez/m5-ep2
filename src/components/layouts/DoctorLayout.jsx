import { Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

export default function DoctorLayout(){
    const { user, token, setToken, setUser } = useStateContext();

    if(!token){
        return <Navigate to="/login" />
    }

    if(user.role != 'doctor'){
        return <Navigate to="/" />
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        setToken(null);
        setUser(null);
    }
    return (
        <>
            <h1>Hola Doctor {user.name}</h1>
            <a href="#" onClick={onLogout}>Logout</a>
            <Outlet />
        </>
    );
}