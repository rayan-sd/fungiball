import React, { useEffect } from 'react'
// import edouard from './../img/Edouard.png'
import "./../css/Roadmap.scss"
// import Aos from "aos"
import "aos/dist/aos.css"
// import roadmap from "./../img/roadmap.png"


export default function Roadmap() {
    window.addEventListener('scroll', function(e) { 
        console.log(window.scrollY);
        if (window.scrollY >= 5200) {
            if (document.getElementsByClassName('back-color')[0].style.width !== "10%") {
                document.getElementsByClassName('back-color')[0].style.animation = 'slidein2 3s';
                document.getElementsByClassName('back-color')[0].style.width = "10%"
            }
        }
        if (window.scrollY >= 5700) {
            if (document.getElementsByClassName('back-color1')[0].style.width !== "20%") {
                document.getElementsByClassName('back-color1')[0].style.animation = 'slidein3 3s';
                document.getElementsByClassName('back-color1')[0].style.width = "20%"
            }
        }
        if (window.scrollY >= 6100) {
            if (document.getElementsByClassName('back-color3')[0].style.width !== "30%") {
                document.getElementsByClassName('back-color3')[0].style.animation = 'slidein4 3s';
                document.getElementsByClassName('back-color3')[0].style.width = "30%"
            }
        }
        if (window.scrollY >= 6450) {
            if (document.getElementsByClassName('back-color4')[0].style.width !== "40%") {
                document.getElementsByClassName('back-color4')[0].style.animation = 'slidein5 3s linear';
                document.getElementsByClassName('back-color4')[0].style.width = "40%"
            }
        }
        if (window.scrollY >= 6900) {
            if (document.getElementsByClassName('back-color5')[0].style.width !== "50%") {
                document.getElementsByClassName('back-color5')[0].style.animation = 'slidein6 3s ease';
                document.getElementsByClassName('back-color5')[0].style.width = "50%"
            }
        }
        if (window.scrollY >= 7200) {
            if (document.getElementsByClassName('back-color6')[0].style.width !== "60%") {
                document.getElementsByClassName('back-color6')[0].style.animation = 'slidein7 3s linear ';
                document.getElementsByClassName('back-color6')[0].style.width = "60%"
            }
        }
    })
    return (
        <section className='Roadmap' id='Roadmap'>
            {/* Roadmap-section */}
            <div className='box-title-Roadmap'>
                <h1>The Roadmap</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, elit vitae facilisis eleifend, ipsum elit lobortis eros, elementum porta mi felis ut massa. Suspendisse eleifend pharetra tortor rhoncus condimentum. Aliquam ac est vel purus posuere lacinia.</p>
            </div>
            <div className='container-Roadmap'>
                {/* <img alt='roadmap' src={roadmap}></img> */}
                <div className='l1'>
                    <div className='case'>
                    <div  className='back-color'></div>
                        <span>10%</span>
                    </div>
                    <div className='box'>
                        <h2>30 PLAYERS SIGNED</h2>
                        <p>More than 30 tennis players have joined the project, you will discover theses players in our Marketplace.</p>
                    </div>
                </div>
                <div className='l2'>
                    <div className='box'>
                        <h2>50 PLAYER SIGNED/ REALISING the marketplace</h2>
                        <p>It’s time ! You can buy NFT of your favorite tennis players in early access before the game start <br /> Fungiteam is increasing, with the marketplace released, more and more tennis players will join the team and participate in our amazing project.</p>
                    </div>
                    <div className='case'>
                        <div className='back-color1 test'></div>
                        <span>20%</span>
                    </div>
                </div>
                <div className='l3'>
                <div className='case'>
                <div  className='back-color3 test'></div>
                    <span>30%</span>
                </div>    
                    <div className='box'>
                        <h2>10 000 NFT sold/ special giveaway for Fungiball NFT owners.</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p> */}
                    </div>
                </div>
                <div className='l4'>
                    <div className='box'>
                        <h2>Open access to the gameplay</h2>
                        <p>It’s time, you can now try to be the best fungiplayer. Participate in the online events and earn rewards!</p>
                    </div>
                    <div className='case'>
                    <div className='back-color4 test'></div>
                        <span>40%</span>
                    </div>
                </div>
                <div className='l5'>
                <div className='case'>
                <div className='back-color5 test'></div>
                    <span>50%</span>
                </div>
                    <div className='box'>
                        <h2>Sign 300 players, celebration day !</h2>
                        <p>Fungiteam will increase, we intend to join more than 300 Players to the game and make them the main actors of their own NFT game.</p>
                    </div>
                </div>
                <div className='l6'>
                    <div className='box'>
                        <h2>FUNGI BRAND EXPANSION</h2>
                        <p>Fungiball is a vaste universe ! New functionalities, new tournaments are coming !</p>
                    </div>
                    <div className='case'>
                    <div className='back-color6 test'></div>
                        <span>60%</span>
                    </div>
                </div>
            </div>
        </section>
    )
}