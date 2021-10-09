import React from "react";
import logo from "../logo.png";


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/#"><img className="logo" src={logo} alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">About me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">How work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Contacts</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
