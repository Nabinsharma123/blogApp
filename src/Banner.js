import React from "react";
import "./Banner.css"



function App(props) {

    return (
        <div className="banner">

            <div className="banner_nav" >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white" />
                </svg>
                <button onClick={() => { props.popup() }} type="button" className="banner_nav_button btn btn-primary"> Join Group</button>
            </div>

            <img alt="1" className="banner_image_large banner_image" src={require("./images/banner.png")} />
            <img alt="1" className="banner_image_small banner_image" src={require("./images/banner_small.png")} />

            <div className="banner_inner" >
                <div className="banner_text" >
                    <h1 className="heading" >Computer Engineering</h1>
                    <h1 className="content" >142,765 Computer Engineers follow this</h1>
                </div>

            </div>

        </div>
    );
}

export default App;