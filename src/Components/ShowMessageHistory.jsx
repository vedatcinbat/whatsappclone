import React, { useState } from 'react'
import img2 from "../Images/mountain2.jpg"
import img3 from "../Images/castle1.jpg"

function ShowMessageHistory({isClicked, currentPerson, setCurrentPerson}) {
  const [messageToSend, setMessageToSend] = useState('');
  if(!isClicked) {
    return(
      <div className = "bg-[#202C33] border-b-[#008069] border-b-[0.7vh] border-[0.1vh] border-[#4f4f4f] text-center text-[#cccccc] grid justify-items-center items-center h-[96vh]">
        <div className = "allMessages h-[70vh]  translate-y-[7vh] grid justify-between">
          <div className = "messageBox  grid items-end">
            <div className = "translate-y-[10vh] text-[6vh]">WhatsApp Web <span className = "text-[2.3vh] absolute translate-y-[7.2vh] -translate-x-[1vh]">Clone</span></div>
            <div className = "text-[#9f9f9f] p-[8vh]">You can send messages and recieve messages without keeping your phone online.</div>
          </div>
          <div className = "lastMessage">
            <div className = "text-[#6d6d6d] grid justify-items-center translate-y-[20vh]">
              All messages end-to-end encrypted.
            </div>
          </div>
        </div>
    </div>
    )
  }else {
    const handleSendToMessage = () => {
      setCurrentPerson(prevState => {
        return {...prevState, IveSend : [...currentPerson.IveSend, messageToSend]}
      })
      
    }
    
    return (
      <>
        <div className = "bg-[#202C33]  border-b-[#008069] border-b-[0.7vh] h-[96vh] flex flex-col border-[0.1vh] border-[#4f4f4f]">
          <div className = "top-showDetails-part  w-full h-[8vh] flex items-center justify-between">
            <div className = "user-image ml-[1.5vh] flex items-center font-bold text-white">
              <img src={img2} alt="IMG" className = "ml-[0.2vh] w-[6vh] mr-[2vh] h-[6vh] bg-slate-300 rounded-full" />
              <div className = "userName">{currentPerson.name}</div>  
            </div>
            <div className = "buttons bg-[#090d0f] mr-[1.5vh] w-[20vh] h-[6vh]">
              {/* <button>Button</button> */}
            </div>
          </div>
          <div className = "messageHistory grid grid-rows-6 relative overflow-y-scroll scrollbar-hide bg-black h-[79vh] p-[2vh]">
            
            {currentPerson.allMessages.map((mes) => {
              return(
                <div className = "flex bg-indigo-700 items-center mb-[3vh] border border-[#1e3028] rounded-lg shadow-sm shadow-[#777777] p-[2vh]">
                  <div className = "user-image ml-[1.5vh] flex items-center font-bold text-white">
                  <img src={img2} alt="IMG" className = "ml-[0.2vh] w-[6vh] mr-[2vh] h-[6vh] bg-slate-300 rounded-full" />
                  <div className = "userName text-[1.8vh]">({currentPerson.name})</div>  
                </div>
                  <div className = "text-white ml-[2vh]">{mes}</div>
                </div>
              )
            })}
            <div className = "Ivesend ">
            {currentPerson.IveSend.map((mes) => {
              return(
                <div className = "">
                  <div className = "flex justify-end bg-cyan-600 items-center mb-[3vh] border border-[#1e3028] rounded-lg shadow-sm shadow-[#777777] p-[2vh]">
                    <div className = "user-image order-2 ml-[1.5vh] flex items-center font-bold text-white">
                      <img src={img3} alt="IMG" className = "ml-[2vh] order-2 w-[6vh] mr-[2vh] h-[6vh] bg-slate-300 rounded-full" />
                      <div className = "userName text-[1.8vh]">(Me)</div>  
                    </div>
                    <div className = "text-white ml-[2vh]">
                      {mes}
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
            
          </div>
          <div className = "bottom-part bg-[#202C33] h-[8.3vh] flex items-center justify-center ">
            <input
            type = "text" 
            className = "h-[4vh] w-[90%] bg-[#283841] p-[2vh] text-white "
            placeholder= "Send message..."
            value = {messageToSend}
            onChange={(e) => setMessageToSend(e.target.value)}
            />
            <button
            onClick = {handleSendToMessage}
            className = " bg-indigo-600 rounded-lg text-mono font-bold text-white ml-[1vh] w-[7vh] text-center h-[5vh]"
            >Send</button>
          </div>
        </div>
      </>
    )
  }
}

export default ShowMessageHistory
