import React, {useState} from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';

import MainWebsite from './Components/MainWebsite';


function App() {

  const [isLogeedIn, setIsLoggedIn] = useState(false)
  const [userLoginInfos, setUserLoginInfos] = useState([{username : "123", password : "123"}])
  if(isLogeedIn) {
    return (
      <>
        <MainWebsite isLoggedIn = {isLogeedIn} setIsLoggedIn={setIsLoggedIn}  />
      </>
    );
  }else {
    return(
      <>
        <LoginPage userLoginInfos={userLoginInfos} setUserLoginInfos={setUserLoginInfos} isLoggedIn = {isLogeedIn} setIsLoggedIn={setIsLoggedIn} />
      </>
    )
  }
}

export default App;
