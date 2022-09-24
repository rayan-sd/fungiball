import React, { useEffect, useState} from 'react'
// import edouard from './../img/Edouard.png'
import "./../css/Roadmap.scss"
// import Aos from "aos"
import "aos/dist/aos.css"
// import roadmap from "./../img/roadmap.png"

export default function Roadmap() {
    const [time, setTime] = useState(0);
    const [scroll, setScroll] = useState(false);
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

    setTimeout(settime, 400);
    function settime() {
        if (scroll) {
            setTime(time + 1)
        }
    }
    window.addEventListener('scroll', function(e) { 
        console.log(window.scrollY);
        if (window.scrollY >= 5200) {
            setScroll(true);
            if (document.getElementsByClassName('back-color')[0].style.width !== "15%") {
                document.getElementsByClassName('back-color')[0].style.animation = 'slidein2 3s';
                document.getElementsByClassName('back-color')[0].style.width = "15%"
            }
        }
        if (window.scrollY >= 5700) {
            if (document.getElementsByClassName('back-color1')[0].style.width !== "30%") {
                document.getElementsByClassName('back-color1')[0].style.animation = 'slidein3 3s';
                document.getElementsByClassName('back-color1')[0].style.width = "30%"
            }
        }
        if (window.scrollY >= 6100) {
            if (document.getElementsByClassName('back-color3')[0].style.width !== "45%") {
                document.getElementsByClassName('back-color3')[0].style.animation = 'slidein4 3s';
                document.getElementsByClassName('back-color3')[0].style.width = "45%"
            }
        }
        if (window.scrollY >= 6450) {
            if (document.getElementsByClassName('back-color4')[0].style.width !== "60%") {
                document.getElementsByClassName('back-color4')[0].style.animation = 'slidein5 3s linear';
                document.getElementsByClassName('back-color4')[0].style.width = "60%"
            }
        }
        if (window.scrollY >= 6900) {
            if (document.getElementsByClassName('back-color5')[0].style.width !== "80%") {
                document.getElementsByClassName('back-color5')[0].style.animation = 'slidein6 3s ease';
                document.getElementsByClassName('back-color5')[0].style.width = "80%"
            }
        }
        if (window.scrollY >= 7050) {
            if (document.getElementsByClassName('back-color6')[0].style.width !== "100%") {
                document.getElementsByClassName('back-color6')[0].style.animation = 'slidein7 3s linear ';
                document.getElementsByClassName('back-color6')[0].style.width = "100%"
            }
        }

        // this.document.getElementsByClassName('box-counter')[0].style.position = 'sticky'
        // this.document.getElementsByClassName('box-counter')[0].style.top = '100px'


        // if (this.document.getElementsByClassName('Team') === true) {
        //     this.document.getElementsByClassName('box-counter')[0].style.display = 'none'
        // }
    })
    function compteur() {
        if (time < 10)
            return (
                <>
                    <span className='num'>0</span>
                    <span className='num'>{time%10}</span>
                </>
            )
        else if (time < 36)
            return (
                <>
                    <span className='num'>{Math.floor(time /10)}</span>
                    <span className='num'>{time%10}</span>
                </>
            )
        else 
            return (
                <>

                    <span className='num'>3</span>
                    <span className='num'>6</span>
                </>
            )
    }
    return (
        <section className='Roadmap' id='Roadmap'>
            {/* Roadmap-section */}
            <div className='box-title-Roadmap'>
                <h1>Roadmap</h1>
                <p>The journey has only just begun, be the first to follow us and participate to rhe best play to earn game. Become the best fungiplayer and follow the steps of our project. Earn exclusive rewards by joining our discord !</p>
            </div>
            <div className='container-all'>
            <div className='container-Roadmap'>
                {/* <img alt='roadmap' src={roadmap}></img> */}
                <div className='l1'>
                    <div className='case'>
                    <div  className='back-color'></div>
                        <span>15%</span>
                    </div>
                    <div className='box'>
                        <h2>30 PLAYERS JOINED US</h2>
                        <p>Already more than 30 tennis players have joined the project, so we can already create a collection of 16 650 NFT. But remember you need to get 5 of them to enter in the game.</p>
                    </div>
                </div>
                <div className='l2'>
                    <div className='box'>
                        <h2>5000 MEMBERS ON DISCORD, INSTAGRAM, TWITTER</h2>
                        <p>NFT giveaway celebration</p>
                    </div>
                    <div className='case'>
                        <div className='back-color1 test'></div>
                        <span>30%</span>
                    </div>
                </div>
                <div className='l3'>
                <div className='case'>
                <div  className='back-color3 test'></div>
                    <span>45%</span>
                </div>    
                    <div className='box'>
                        <h2>REALISING THE MARKETPLACE</h2>
                        <p>You will can buy NFT of your favorite tennis players in early access before the game start.</p>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p> */}
                    </div>
                </div>
                <div className='l4'>
                    <div className='box'>
                        <h2>20 000 NFT SOLD</h2>
                        <p>Start with an advantage, NFT owners of card from 1 to 10 000 will get special tips to perform in the game and early access to the platform.

Trad your card between each other to find the best combo, the game is coming soon !</p>
                    </div>
                    <div className='case'>
                    <div className='back-color4 test'></div>
                        <span>60%</span>
                    </div>
                </div>
                <div className='l5'>
                <div className='case'>
                <div className='back-color5 test'></div>
                    <span>80%</span>
                </div>
                    <div className='box'>
                        <h2>OPEN ACCESS TO THE GAMEPLAY</h2>
                        <p>It’s time, you can now try to be the best fungiplayer. Participate in the online events and earn rewards!</p>
                    </div>
                </div>
                <div className='l6'>
                    <div className='box'>
                        <h2>FUNGI BRAND EXPANSION</h2>
                        <p>Fungiball is a vaste universe ! New functionalities, new tournaments are coming !</p>
                    </div>
                    <div className='case'>
                    <div className='back-color6 test'></div>
                        <span>100%</span>
                    </div>
                </div>
            </div>
            <div className='container-counter'>
                <div className='box-counter stickybox'>
                    <h3>Number of tennis players signed</h3>
                    <div className='counter'>
                    {/* <Clock endTime={360000} /> */}
                    {/* <FlipClockCountdown to={-36000000000000} /> */}
                        { compteur()}
                        {/* <div className='digit' data-digit-before="0" data-digit-after="1">
                            <div className='card' className={isActive ? "card flipped" : "card"} onClick={handleToggle}>
                                <div className='card-face card-face-front'>0</div>
                                <div className='card-face card-face-back'>1</div>
                            </div>
                        </div> */}
                        {/* <span className='num'>{time%10}</span>
                        <span className='num'>6</span> */}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}