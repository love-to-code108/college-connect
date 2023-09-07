
import "../index.css"

import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

import { useAuthState } from "react-firebase-hooks/auth"

export const Navbar = () => {


    const [user] = useAuthState(auth);

    

    return(
        <div>
            <Link to="/">Post</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            

            <img src={user?.photoURL || ""} width='100' height='100' alt="" />
        </div>
    );
}