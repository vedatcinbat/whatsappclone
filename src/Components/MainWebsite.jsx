import React, { useState } from 'react'
import MessageOptions from './MessageOptions'
import ProfileComponent from './ProfileComponent'
import ShowMessageHistory from './ShowMessageHistory'


const profiles = [
    {
        name : 'Friend A',
        lastMessage : 'I will see ...',
        allMessages : [
            "I will see you tomorrow",
            "Okay I will do the same thing",
        ],
        IveSend : [
            "my message"
        ]
    },
    {
        name : 'My Family',
        lastMessage : 'Father : ... ?',
        allMessages : [
            "sdafasdfsadfsadfsadf",
            "Okay I will do the same thing",
        ],
        IveSend : [
            
        ]
    },
    {
        name : 'Person B',
        lastMessage : 'There is a little traffic here.',
        allMessages : [
            "asdfasdf",
            "Okay .......",
        ],
        IveSend : [
            
        ]
    },
    {
        name : 'Data Structure Group',
        lastMessage : 'This group has ended',
        allMessages : [
            "asdfsadf",
            "Okay I will do the same thing",
        ],
        IveSend : [
            "my message"
        ]
    },
    {
        name : 'Mother',
        lastMessage : 'Message .....',
        allMessages : [
            "asdfasdfasd",
            "See you soon",
        ],
        IveSend : [
            
        ]
    },
    {
        name : 'School Group',
        lastMessage : 'StudentA : Could you send the notes',
        allMessages : [
            "I willasdfasdfasdfadsw",
            "Ofakay I wadfhe same thing",
        ],
        IveSend : [
            "my message"
        ]
    },

]

function MainWebsite({isLoggedIn, setIsLoggedIn}) {
    const [isclicked, setIsClicked] = useState(false);
    const [currentPerson, setCurrentPerson] = useState({
        name : '',
        lastMessage : '',
        allMessages : [],
        IveSend: [],
        
    });
    const logout = () => {
        setIsLoggedIn((prevVal) => !prevVal)
    }
  return (
    <div className = "allpages w-[100%] h-[100vh] bg-[#111B21] grid justify-items-center items-center">
        <div className = "all-component-container bg-[#202C33] w-[165vh] h-[96vh]  flex">
            <div className = "left-container w-[50vh] h-full">
                <div className = "profile-details">
                    <ProfileComponent isClicked={isclicked} setIsClicked={setIsClicked} />
                </div>
                <div className = "message-options">
                    <MessageOptions currentPerson={currentPerson} setCurrentPerson={setCurrentPerson} isClicked={isclicked} setIsClicked={setIsClicked} userdetails = {profiles} />
                </div>
            </div>
            <div className = "right-container flex-grow h-full ">
                <ShowMessageHistory isClicked={isclicked} currentPerson = {currentPerson} setCurrentPerson={setCurrentPerson}   />
            </div> 
            <div className = "logoubutton">
            <button 
            onClick={logout}
            className = "text-white absolute">Logout</button>
        </div>
        </div>
    </div>
  )
}

export default MainWebsite
