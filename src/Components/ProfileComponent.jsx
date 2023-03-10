import React from "react";
import img2 from "../Images/castle1.jpg";
function ProfileComponent({setIsClicked}) {
  const returnHomepage = () => {
    setIsClicked(prevState => !prevState)
  }
  return (
    <>
      <div className="bg-[#202C33]  h-[12.9vh] border-l-[0.1vh] flex flex-col border-t-[0.1vh] border-b-[0.1vh] border-[#ffffff25]  ">
        <div className="profile-img-part  bg-[#202C33] h-[6.5vh] grid items-center ml-[1vh]">
          <button onClick = {returnHomepage}>
          <img
            src={img2}
            className="profile-image w-[2.5rem] h-[2.5rem] rounded-full"
            alt="imgae"
          />
          </button>
        </div>
        <div className="profile-search-part bg-[#111B21] flex-grow rounded-lg grid">
          <div className="grid justify-items-center items-center">
            <input
              type="text"
              placeholder="type..."
              className="w-[43vh] mt-[0.8vh] mb-[0.3vh] bg-[#202C33] hover:bg-[#2e2e2e] rounded-lg p-[0.5vh] pl-[1vh] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComponent;
