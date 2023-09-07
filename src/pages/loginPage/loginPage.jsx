import "../../index.css"

// REACT RELATED INPUTS
import { useNavigate } from "react-router-dom";

// IMPORTING FIREBASE RELATED STUFF BELOW
import { signInWithPopup, signOut } from "firebase/auth";

// FROM THE CONFIG FILE
import { auth, providerGoogle } from "../../config/firebase";

export const LoginPage = () => {
    const navigate = useNavigate();



    // TRYING TO SIGN IN USING GOOGLE HERE
    const SignInWithGoogle = async () => {

        try {
            const googleUserData = await signInWithPopup(auth, providerGoogle);
            // console.log(googleUserData);
            navigate("/");



        } catch (err) {
            console.error(err);
        }

    }



    // LOG OUT HERE
    const SignOut = async () => {

        try {
            await signOut(auth);
            // console.log(googleUserData);
            navigate("/login");



        } catch (err) {
            console.error(err);
        }

    }


    return (
        <div>
            <div onClick={SignInWithGoogle}
                className="text-5xl cursor-pointer">Sign In With Google To Continue</div>


            <div onClick={SignOut}
                className="text-5xl cursor-pointer">Sign Out</div>

                <div>{auth?.currentUser?.email}</div>
        </div>
    );
}