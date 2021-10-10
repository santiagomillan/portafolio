import React from "react";
import Typed from "react-typed"; 


const Header = () => {
    return (
        <div>
            <div className = "header-wraper">
                <div className = "main-info">
                    <h1>Web developent and websites promotions</h1>
                    <Typed
                        className = "typed-text"
                        strings= {["Web Design" , "Web Developer" , "Facebook Ads SMM" , "Google Developer"]}
                        typeSpeed ={40}
                        backSpeed = {60}
                        loop
                    />
                    <a href="/" className="btn-main-offer">contact me</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
