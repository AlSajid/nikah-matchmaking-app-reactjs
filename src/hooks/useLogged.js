import { useEffect, useState } from "react"
import initializeAuthentication from "../components/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import jwt_decode from "jwt-decode";

initializeAuthentication();

const useLogged = () => {
  // initialization
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [interest, setInterest] = useState([]);
  const [loading, setLoading] = useState(false);

  const refresh = localStorage.getItem("refresh");
  const access = localStorage.getItem("access");
  const [logged, setLogged] = useState({ refresh, access });


  let storedSerial = localStorage.getItem("serial");

  if (!storedSerial) {
    storedSerial = 0;
    localStorage.setItem("serial", 0);
  }
  const [serial, setSerial] = useState(parseInt(storedSerial));


  useEffect(() => {
    const token = logged.access;

    if (token) {
      const decoded = jwt_decode(token);
      const id = decoded.user_id;

      let url = `https://eyafi.pythonanywhere.com/account/user/${id}`;
      fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.log(error));

      url = `https://eyafi.pythonanywhere.com/account/profile/${id}`;
      fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => console.log(error));

      url = `https://eyafi.pythonanywhere.com/account/matching/?toWhom=${id}`;
      console.log(url, { method: 'GET' });
      fetch(url)
        .then(response => response.json())
        .then(data => setInterest(data))
        .catch(error => console.log(error));
    }

  }, [logged, interest]);


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const signUpUsingGoogle = () => { return signInWithPopup(auth, googleProvider) }
  const signUpUsingFacebook = () => { return signInWithPopup(auth, facebookProvider); }



  const logout = () => {
    setUser({});
    setProfile({});
    setLogged({});
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.setItem("serial", 0);
  }

  return {
    user,
    logged,
    profile,
    serial,
    interest,
    loading,
    setLoading,
    setSerial,
    setProfile,
    setLogged,
    signUpUsingGoogle,
    signUpUsingFacebook,
    logout
  }
}

export default useLogged;