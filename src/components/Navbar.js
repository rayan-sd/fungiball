import React, { useState} from 'react'
import icon from "./../img/fungiball.svg"
import { FaBars, FaTimes } from 'react-icons/fa'
import "./../css/Navbar.scss"
import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaDiscord} from "react-icons/fa";


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
                        <div className='mnu-left'>
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
                        let hero = document.getElementById("Skills");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }}>Skills</a>

                        <a className='mnu' onClick={e => {
                        let hero = document.getElementById("Roadmap");
                        e.preventDefault();  // Stop Page Reloading
                        hero && hero.scrollIntoView({behavior: "smooth"});
                        }}>Roadmap</a>

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
                        <a target='_blank' href='https://docdro.id/6pBPFPo' className='mnu'> White Paper</a>
                        </div>

                        <div className='blur-nav'></div>
                        <div className='social-nav'>
                            <a target='_blank'  href='https://discord.gg/6QsBQ2KDP7'><FaDiscord className='icon'/></a>
                            <a target='_blank' href='https://twitter.com/Fungiball_off?s=20&t=7oX62YYsQA4UYdywwqc-Lg'><BsTwitter className='icon'/></a>
                            <a target='_blank' href='https://www.instagram.com/fungiball.io/'><BsInstagram className='icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}