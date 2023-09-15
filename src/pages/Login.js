import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/Config'
import { RecaptchaVerifier } from "firebase/auth";


export const Login = () => {

  // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'signinButton', {
  //   'size': 'invisible',
  //   'callback': (response) => {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onSignInSubmit();
  //   }
  // });

  const Navigate=useNavigate()
  const onSignInSubmit=()=>{
    localStorage.setItem("login",true)
        Navigate("/home")
    }
  return (
    <div className='login-div'>
        <h1>Login</h1>
       <input type="text" placeholder="enter id"/><br/>
       <input type="text" placeholder="enter password"/>
       <button onClick={onSignInSubmit} id="signinButton">submit</button>
        </div>
  )
}
