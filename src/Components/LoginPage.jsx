import React from 'react'
import { useState } from 'react';

function SignupPage({userLoginInfos, setUserLoginInfos, setSignedUp}) {
    const [currentUsername, setCurrentUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [currentPassword2, setCurrentPassword2] = useState('');
    const updateLoginInfos = () =>{
        
        if((currentPassword === currentPassword2) && (currentUsername !== '' && currentPassword !== '')) {
            setUserLoginInfos(prevState => {
                return [...prevState, {username : currentUsername, password : currentPassword}]
            })
            alert(`You have signed up with username : ${currentUsername} password : ${currentPassword}`)
        }else {
            alert('Passwords are not same !')
        }       
    }
    const loginPageLoad = () => {
        setSignedUp(prevVal => !prevVal)
    }
    return(
    <div className = "allpages w-[100%]  h-[100vh] bg-[#111B21] grid justify-items-center items-center">
        <div className = "login-container text-white  w-[75vh] h-[85vh]  flex flex-col justify-between">
            <div className = "header-part bg-[#202C33]  h-[15vh] grid text-center items-center">
                <div className= "text-[4vh]">Sign-up</div>
            </div>
            <div className = "signup-part  h-[60vh] flex flex-col justify-around items-center">
                <input 
                onChange = {(e) => setCurrentUsername(e.target.value)}
                type="text" className = "w-[74vh] p-[2vh] h-[10vh] bg-[#202C33] text-white rounded-lg " placeholder="username..." />
                <input 
                onChange = {(e) => setCurrentPassword(e.target.value)}
                type="password" className = "w-[74vh] p-[2vh] h-[10vh] bg-[#202C33] text-white rounded-lg " placeholder = "password..." /> 
                <input 
                value={currentPassword2}
                onChange = {(e) => setCurrentPassword2(e.target.value)}
                type="password" className = "w-[74vh] p-[2vh] h-[10vh] bg-[#202C33] text-white rounded-lg " placeholder = "password..." /> 
            </div>
            <div className = "buttons bg-[#202C33] h-[10vh] grid items-center justify-items-center grid-cols-2">
                <button 
                onClick = {updateLoginInfos}
                className = "bg-[#111B21] w-[12vh] h-[8vh] rounded-lg">Signup</button>
                <button 
                onClick = {loginPageLoad}
                className = "bg-[#111B21] w-[12vh] h-[8vh] rounded-lg">Login</button>
            </div>
        </div>
    </div>
    )
}


function MainLoginPage({isLoggedIn, setIsLoggedIn, userLoginInfos, setUserLoginInfos, setSignedUp}) {
    const [typedUsername, setTypedUsername] = useState('');
    const [typedPassword, setTypedPassword] = useState('');
    const [loginSuccesful, setLoginSuccesful] = useState(false)
    const loginToPage = () => {
        // if there is typedUsersetIsLoggedIn(prevVal => !prevVal)
        //console.log(userLoginInfos)
       //let size = userLoginInfos.length;
        /* for(let i = 0; i < size; i++) {
            if((userLoginInfos[i].username === typedUsername) && (userLoginInfos[i].password === typedPassword)) {
                setLoginSuccesful(true)
            }
        } */
        console.log(userLoginInfos)
         userLoginInfos.forEach((record) => {
            if((record.username === typedUsername) && (record.password === typedPassword)) {
                setLoginSuccesful(true)
            }
        })

         if(loginSuccesful) {
            setIsLoggedIn(prevVal => !prevVal)
        }else {
            alert('There is no such data !')
        }  
    }
    const gotoSignup = () => {
        setSignedUp(prevVal => !prevVal)
    }
    return(
        <>
        <div className = "allpages w-[100%]  h-[100vh] bg-[#111B21] grid justify-items-center items-center">
        <div className = "login-container text-white  w-[75vh] h-[85vh]  flex flex-col justify-between">
            <div className = "header-part bg-[#202C33]  h-[15vh] grid text-center items-center">
                <div className= "text-[4vh]">Log-in</div>
            </div>
            <div className = "signup-part  h-[60vh] flex flex-col justify-around items-center">
                <input 
                value = {typedUsername}
                onChange = {e => setTypedUsername(e.target.value)}
                type="text" className = "w-[74vh] p-[2vh] h-[10vh] bg-[#202C33] text-white rounded-lg " placeholder="username..." />
                <input 
                value = {typedPassword}
                onChange = {e => setTypedPassword(e.target.value)}
                type="password" className = "w-[74vh] p-[2vh] h-[10vh] bg-[#202C33] text-white rounded-lg " placeholder = "password..." /> 
                
            </div>
            <div className = "buttons bg-[#202C33] h-[10vh] grid items-center justify-items-center grid-cols-2">
                <button 
                onClick={gotoSignup}
                className = "bg-[#111B21] w-[12vh] h-[8vh] rounded-lg">Signup</button>
                <button 
                onClick = {loginToPage}
                className = "bg-[#111B21] w-[12vh] h-[8vh] rounded-lg">Login</button>
            </div>
        </div>
    </div>
            
        </>
    )
}


function LoginPage({isLoggedIn, setIsLoggedIn, userLoginInfos, setUserLoginInfos}) {
    const [signedUp, setSignedUp] = useState(false);
  if(!signedUp){
    return (
        <SignupPage signedUp={signedUp} setSignedUp={setSignedUp} userLoginInfos={userLoginInfos} setUserLoginInfos={setUserLoginInfos} />
      )
  }
  if(signedUp) {
    return(
        <MainLoginPage setSignedUp={setSignedUp} userLoginInfos={userLoginInfos} setUserLoginInfos={setUserLoginInfos} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    )
  }
}

export default LoginPage
