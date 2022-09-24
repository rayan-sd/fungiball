import React from 'react'
import "./../css/Footer.scss"
import fb from './../img/fb.svg'
import twitter from './../img/twitter.svg'
import linkedin from './../img/linkedin.svg'


export default function Footer() {
    return (
        <section className='Footer'>
            {/* Footer-section */}
            <div className='container-footer'>
                <div className='top-footer'>
                    <div className='box-t-left'>
                        <div className='text-footer'>
                            <h2>fungiballs</h2>
                            <h3>© 2021 - <span>fungiballs</span></h3>
                        </div>
                        <a href='https://discord.gg/9cWQE4f3'>Join Discord</a>
                    </div>
                    <div className='box-t-middle'>
                        <div className='box-footer'>
                            {/* <h2>Section</h2> */}
                            <div className='box-text-midlle'>
                                <a onClick={e => {
                                    let hero = document.getElementById("Collection");
                                    e.preventDefault();  // Stop Page Reloading
                                    hero && hero.scrollIntoView({ behavior: "smooth" });
                                }} > About</a>

                                <a onClick={e => {
                                    let hero = document.getElementById("Series");
                                    e.preventDefault();  // Stop Page Reloading
                                    hero && hero.scrollIntoView({ behavior: "smooth" });
                                }}> Play to Earn</a>

                                <a onClick={e => {
                                    let hero = document.getElementById("Roadmap");
                                    e.preventDefault();  // Stop Page Reloading
                                    hero && hero.scrollIntoView({ behavior: "smooth" });
                                }}> The Roadmap</a>
                            </div>
                        </div>
                        <div className='box-footer'>
                            {/* <h2>Section</h2> */}
                            <div className='box-text-midlle'>
                            <a onClick={e => {
                                    let hero = document.getElementById("Skills");
                                    e.preventDefault();  // Stop Page Reloading
                                    hero && hero.scrollIntoView({ behavior: "smooth" });
                                }}> Skills</a>
                                <a onClick={e => {
                                    let hero = document.getElementById("Team");
                                    e.preventDefault();  // Stop Page Reloading
                                    hero && hero.scrollIntoView({ behavior: "smooth" });
                                }}> Fungi Team</a>

                                <a onClick={e => {
                                    let hero = document.getElementById("Faq");
                                    e.preventDefault();  // Stop Page Reloading
                                    hero && hero.scrollIntoView({ behavior: "smooth" });
                                }}> FAQ</a>

                            </div>
                        </div>
                    </div>
                    <div className='box-t-right'>
                        <div className='gp'>
                            <h2>Contact</h2>
                            <div className='contact-footer'>
                                <a href=''><img alt='facebook' src={fb}></img></a>
                                <a href='https://twitter.com/Fungiball_off?s=20&t=7oX62YYsQA4UYdywwqc-Lg'><img alt='twitter' src={twitter}></img></a>
                                <a href='https://www.instagram.com/fungiball.io/'><img alt='linkedin' src={linkedin}></img></a>
                            </div>
                        </div>
                        <a href="mailto: contact@astate.io">contact@astate.io</a>
                    </div>
                </div>
                <div className='bottom-footer'>
                    <div className='box-b-left'>
                    <a href='https://www.vmstudio.xyz/' className='vms'>Produced by <span>Virtual Miracle Studio</span></a>
                    </div>
                    {/* <div className='box-b-right'>
                        <p>PERSONAL DATA PROTECTION POLICIES AND COOKIES MANAGEMENT</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}