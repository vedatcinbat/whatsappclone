import React, {useEffect, useState} from 'react'
import img2 from "../Images/mountain2.jpg"


function MessageBoxDesign({userInfo}) {
  

  
  return(
    
      <div className = "text-white m-2 h-[10.2vh] overflow-hidden w-[96%] border-b-[0.1vh] border-[#4f4f4f7e] text-left  rounded-lg flex items-center cursor-pointer hover:bg-slate-700">
      <div className = "user-image">
        <img src={img2} alt="IMG" className = "  ml-[1vh] w-[5vh] mr-[2vh] h-[5vh] bg-slate-300 rounded-full" />  
      </div>
      <div className = "user-texts mt-[0.1vh]">
        <div className = "user-name mb-[0.1vh] font-bold">
          {userInfo.name}  
        </div> 
        <div className = "user-lastMessage text-[#8b8b8b]">
          {userInfo.lastMessage}  
        </div>
      </div> 
    </div>
    
  )
}


function MessageOptions({userdetails, isClicked, setIsClicked, setCurrentPerson}) {
  const [userInfos, setUserInfos] = useState(userdetails)
  
  
  return (
      <div className = "bg-[#111B21]  h-[84vh]">
      {
        userInfos.map((user) => {
          const updatePerson = () => {
            setCurrentPerson({name : user.name, lastMessage: user.lastMessage, allMessages: user.allMessages, IveSend : user.IveSend})
            setIsClicked(prevVal => true)
            
          }
          return (
            <button
            onClick = {updatePerson}
            className = "w-full">
              <MessageBoxDesign isClicked={isClicked} setIsClicked={setIsClicked} userInfo = {user}   />
            </button>
          )
        })
      }
      
    </div>
    
  )
}

export default MessageOptions
