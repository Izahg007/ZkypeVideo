import React, {useState} from 'react';
import "./navbar.css";
import { FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import {SiGmail} from 'react-icons/si';

const NavBar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    return (
        <>
            <nav className='main-nav' id='navbar'>
                {/* first logo part */}
                <div className='logo'>
                    <h2>
                        <span>Z</span>kype
                        <span>V</span>ideo
                    </h2>
                </div>

                {/* second nav part */}
                <div className={hamburgerMenu?"menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#call">Call</a>
                        </li>
                        <li>
                            <a href="#users">Online Users</a>
                        </li>
                    </ul>
                </div>

                {/* social media part */}
                <div className='social-media'>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/izahgnaya/" target="_ins" className='instagram'>
                                <FaInstagramSquare />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Izahg007" target="_git" className='facebook'><FaGithubSquare /></a>
                        </li>
                        <li>
                            <a href="mailto:ayan.ghazi007@gmail.com" className='youtube'><SiGmail /></a>
                        </li>
                    </ul>

                    {/* hamburger menu start */}
                    <div className='hamburger-menu' onClick={() => {setHamburgerMenu(!hamburgerMenu)}}>
                        <a href="#navbar"><GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>

            <section className='hero-section' id='home'>
                <p>Welcome to</p>
                <h1>Zkype VideoCalling</h1>
                <p style={{ fontWeight: 200, fontSize: 40 }}>call someone from your browser without signup or login</p>
            </section>
        </>
    );
};

export default NavBar;