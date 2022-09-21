import React, { useState} from 'react'
import icon from "./../img/fungiball.svg"
import { FaBars, FaTimes } from 'react-icons/fa'
import "./../css/Navbar.scss"


export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='Navbar'>

            <div className='menu-nav'>
                <div className='left-icon'>
                    <img alt='icon' src={icon}></img>
                </div>
                <div className='container-mnu'>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className={click ? 'right-text-active' : 'right-text'}>
                        <a className='mnu' onClick={e => {
                        let hero = document.getElementById("Collection");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }} > About</a>

                        <a className='mnu' onClick={e => {
                        let hero = document.getElementById("Series");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }}> Play to Earn</a>

                        <a className='mnu' onClick={e => {
                        let hero = document.getElementById("Roadmap");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }}> The Roadmap</a>

                        <a className='mnu'
                        onClick={e => {
                        let hero = document.getElementById("Team");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }}> Fungi Team</a>

                        <a className='mnu'onClick={e => {
                        let hero = document.getElementById("Faq");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }}> FAQ</a>

                        <a href='#' className='mnu'> White Paper</a>
                        <div className='blur-nav'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}