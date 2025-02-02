import { Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

export default function AdminLayout(){
    const { user, token, setToken, setUser } = useStateContext();

    if(!token){
        return <Navigate to="/login" />
    }
    if(user.role != 'admin'){
        return <Navigate to="/" />
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        setToken(null);
        setUser(null);
    }
    return (
        <>
            <h1>Hola Admin</h1>
            <a href="#" onClick={onLogout}>Logout</a>
            <Outlet />
        </>
    );
}