import { useEffect, useState } from "react"
import initializeAuthentication from "../components/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";

initializeAuthentication();



const useLogged = () => {
    // initialization
    const [user, setUser] = useState({});
    const [profile, setProfile] = useState({});
    const [error, setError] = useState('');
    const refresh = localStorage.getItem("refresh");
    const access = localStorage.getItem("access");

    const [logged, setLogged] = useState({ refresh, access });



    useEffect(() => {
        const token = logged.access;

        if (token) {
            const decoded = jwt_decode(token);
            const id = decoded.user_id;

            let url = `http://eyafi.pythonanywhere.com/account/user/${id}`;
            fetch(url, { method: 'GET' })
                .then(response => response.json())
                .then(data => setUser(data));

            url = `http://eyafi.pythonanywhere.com/account/profile/${id}`;
            fetch(url, { method: 'GET' })
                .then(response => response.json())
                .then(data => setProfile(data) );

        } else {
            setUser({});
            setProfile({});

        }

    }, [logged]);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const signUpUsingGoogle = () => { return signInWithPopup(auth, googleProvider) }
    const signUpUsingFacebook = () => { return signInWithPopup(auth, facebookProvider); }




    const navigate = useNavigate();

    const logout = () => {
        setUser({});
        setProfile({});
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/");
    }


    return {
        user,
        logged,
        profile,
        setProfile,
        setLogged,
        signUpUsingGoogle,
        signUpUsingFacebook,
        logout
    }
}

export default useLogged;