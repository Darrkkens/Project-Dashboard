import React, { useState } from 'react';
import logo from '../../img/logo.png';
import profile from '../../img/avatar.webp';
import './navbar.css';

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <nav>
            <div className="container">
                <img src={logo} alt="logo" className="logo" />
                <div className="search-bar">
                    <span className="material-symbols-outlined">search</span>
                    <input type="search" placeholder="Search" />
                </div>
                <div className="profile-area">
                    <div className="theme-btn" onClick={toggleTheme}>
                        <span className={`material-icons ${isDarkTheme ? 'active' : ''}`}>dark_mode</span>
                        <span className={`material-icons ${isDarkTheme ? '' : 'active'}`}>light_mode</span>
                    </div>
                    <div className="profile">
                        <div className="profile-photo">
                            <img src={profile} alt="profile" />
                        </div>
                        <h5>Batman</h5>
                        <span className="material-icons">expand_more</span>
                    </div>
                    <button id="menu-btn" className="menu-btn">
                        <span className="material-icons">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
