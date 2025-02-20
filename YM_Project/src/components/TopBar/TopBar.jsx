import "./topBar.css";

import profilePic from "../../Image/profilePic.png"
const TopBar = () => {
    return(
        <>
        <div className="topRow ">
        <div><h1 class="text-6xl"><span class="text-red-600 font-sans text-7xl">YM </span><sopan class="font-serif font-small">Products</sopan></h1></div>
        
        <div className="accountBar">
            <img src={profilePic} alt="" />
            <div className="dropD">
            <button>
                {/* <div className="row"> */}
                
                <span > Admin</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                {/* </div> */}
            </button>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default TopBar;