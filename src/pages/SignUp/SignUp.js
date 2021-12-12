import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// images
import google from './g-logo.png';
import facebook from './f-logo.png';


const SignUp = () => {
  //initializations
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { signUpUsingGoogle, signUpUsingFacebook, setIsLoading } = useAuth();


  //handling manual sign up form
  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRef2 = useRef();

  function handleSignUp(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const password2 = passwordRef2.current.value;

    if (password === password2) {
      const user = { name: name, username: username, email: email, password: password }

      fetch('http://eyafi.pythonanywhere.com/account/user/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => data.id ? navigate("/update-profile") : setError("ভুল হয়েছে"));
    }
    else {
      setError("আপনার পাসওয়ার্ড অনিশ্চিত");
    }


  }



  //---

  // sign in with google
  const handleGoogleSignin = () => {
    signUpUsingGoogle()
      .then((result) => {
        nameRef.current.value = result.user.displayName;
        usernameRef.current.value = result.user.displayName.replace(/\s/g, '');
        emailRef.current.value = result.user.email;
        setError("পাসওয়ার্ড লিখুন");

      })
      .catch((error) => { })
  }
  // ---

  // sign in with facebook
  const handleFacebookSignin = () => {
    signUpUsingFacebook()
      .then((result) => {
        nameRef.current.value = result.user.displayName;
        usernameRef.current.value = result.user.displayName.replace(/\s/g, '');
        emailRef.current.value = result.user.email;
        setError("পাসওয়ার্ড লিখুন");

      })
      .catch((error) => { })
  }

  // ---


  return (
    <div className="h-screen mx-auto mt-12">
      <Header></Header>

      <div className="container mx-auto">
        <div className="bg-white lg:w-1/4 md:w-1/2 sm:w-full  p-1 mx-auto">

          <div>
            <h5 className="text-red-600 text-center text-3xl py-3 tarunya">নতুন অ্যাকাউন্ট</h5>

            <div className="text-center bg-red-900 my-3 rounded-md text-white p-1">
              {error}
            </div>

          </div>

          <form autoComplete="off" onSubmit={handleSignUp}>

            <div className="p-1 my-1">
              <label htmlFor="name" className="font-semibold">
                <FontAwesomeIcon icon="signature" /> নাম
              </label>
              <input type="text" ref={nameRef} className=" border w-full p-1 my-1" name="name" />
            </div>

            <div className="p-1 my-1">
              <label htmlFor="username">
                <FontAwesomeIcon icon="user" /> ইউজার নেইম
              </label>
              <input type="text" ref={usernameRef} className=" border w-full p-1 my-1" name="username" />
            </div>

            <div className="p-1 my-1">
              <label htmlFor="email" >
                <FontAwesomeIcon icon="at" /> ইমেইল
              </label>
              <input type="email" ref={emailRef} className=" border w-full p-1 my-1" name="email" />
            </div>

            <div className="p-1 my-1">
              <label htmlFor="password">
                <FontAwesomeIcon icon="key" /> পাসওয়ার্ড
              </label>
              <input type="password" ref={passwordRef} className=" border w-full p-1 my-1" name="password" />
            </div>

            <div className="p-1 my-1">
              <label htmlFor="password">
                <FontAwesomeIcon icon="key" /> পাসওয়ার্ড নিশ্চিতকরণ
              </label>
              <input type="password" ref={passwordRef2} className=" border w-full p-1 my-1" name="password" />
            </div>

            <div className="text-center p-1 ">
              <button type="submit" className="bg-red-600 text-white shadow p-3 my-3 rounded-md">শুরু করা যাক</button>
            </div>

          </form>

          {/* google sign up button */}
          <div className="text-center m-1">
            <button onClick={handleGoogleSignin} type="submit" className="rounded-md shadow border-2 border-red-600 w-5/6 p-1 m-1">
              <img src={google} alt="logo" className="w-5 m-1 inline" />
              গুগল সাইন ইন
            </button>
          </div>

          {/* facebook sign up button */}
          <div className="text-center m-1">
            <button onClick={handleFacebookSignin} type="submit" className="rounded-md shadow border-2 border-red-600 w-5/6 p-1 m-1">
              <img src={facebook} alt="logo" className="w-5 m-1 inline" />
              ফেসবুক লগইন
            </button>
          </div>

          <div className="p-1 text-center m-1">
            <p className="w3-center"> ইতোমধ্যে অ্যাকাউন্ট আছে?
              <Link to="/signin"><span className="text-red-600 font-semibold"> প্রবেশ করুন</span></Link>
            </p>
          </div>

        </div>
      </div>
    </div >
  );
};

export default SignUp;