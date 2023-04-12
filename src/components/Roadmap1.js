import React, { useState} from 'react'
import "./../css/Roadmap1.scss"

export default function Roadmap() {
    const [time, setTime] = useState(0);
    const [scroll, setScroll] = useState(false);
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
        if (window.scrollY >= 6700) {
            if (document.getElementsByClassName('back-color5')[0].style.width !== "80%") {
                document.getElementsByClassName('back-color5')[0].style.animation = 'slidein6 3s ease';
                document.getElementsByClassName('back-color5')[0].style.width = "80%"
            }
        }
        if (window.scrollY >= 7000) {
            if (document.getElementsByClassName('back-color6')[0].style.width !== "100%") {
                document.getElementsByClassName('back-color6')[0].style.animation = 'slidein7 3s linear ';
                document.getElementsByClassName('back-color6')[0].style.width = "100%"
            }
        }
    })
    
    function initElements() {
        const els = [{}, {}];
    
        const target = document.querySelector(`.flip-clock-s`);
    
        if (!target) return els;
    
        let el;
    
        el = els[0];
        el.digit = target.querySelector('.digit-left');
        el.card = el.digit.querySelector('.card');
        el.cardFaces = el.card.querySelectorAll('.card-face');
        el.cardFaceA = el.cardFaces[0];
        el.cardFaceB = el.cardFaces[1];
    
        el = els[1];
        el.digit = target.querySelector('.digit-right');
        el.card = el.digit.querySelector('.card');
        el.cardFaces = el.card.querySelectorAll('.card-face');
        el.cardFaceA = el.cardFaces[0];
        el.cardFaceB = el.cardFaces[1];
        return els;
    }
    function runClock() {
          if (!document.hidden && scroll) {
            const now = {
              s: time,
            };
            now.s = time < 10 ? `0${now.s}` : `${now.s}`;
            now.s0 = now.s[0];
            now.s1 = now.s[1];

            if (parseInt(now.s0 + now.s1) <= 36)
                    for (const i of ['0', '1']) {
                        const curr = now[`s${i}`];
                        let next = +curr + 1;
                        if (i === '0') next = next <= 3 ? `${next}` : '0';
                        if (i === '1') next = next <= 9 ? `${next}` : '0';

                        const el = initElements('s')[i];
                        if (el && el.digit) {
                            if (!el.digit.dataset.digitBefore) {
                                el.digit.dataset.digitBefore = curr;
                                el.cardFaceA.textContent = el.digit.dataset.digitBefore;
                                el.digit.dataset.digitAfter = next;
                                el.cardFaceB.textContent = el.digit.dataset.digitAfter;
                            } else if (el.digit.dataset.digitBefore !== curr) {
                                el.card.addEventListener('transitionend', function () {
                                el.digit.dataset.digitBefore = curr;
                                el.cardFaceA.textContent = el.digit.dataset.digitBefore;
                
                                const cardClone = el.card.cloneNode(true);
                                cardClone.classList.remove('flipped');
                                el.digit.replaceChild(cardClone, el.card);
                                el.card = cardClone;
                                el.cardFaces = el.card.querySelectorAll('.card-face');
                                el.cardFaceA = el.cardFaces[0];
                                el.cardFaceB = el.cardFaces[1];
                
                                el.digit.dataset.digitAfter = next;
                                el.cardFaceB.textContent = el.digit.dataset.digitAfter;
                                }, { once: true });
                                if (!el.card.classList.contains('flipped')) {
                                    el.card.classList.add('flipped');
                                }
                            }
                        }
                    }
                setTime(time + 1)
            }
        }
        setTimeout(runClock, 300);
        
    return (
        <section className='Roadmap' id='Roadmap'>
            {/* Roadmap-section */}
            <div className='box-title-Roadmap'>
                <h1>The Roadmap</h1>
                <p>The journey has only just begun, be the first to follow us and participate to the best play to earn game. Become the best fungiplayer and follow the steps of our project. Earn exclusive rewards by joining our discord !</p>
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
                        <h2>5 000 MEMBERS ON DISCORD, INSTAGRAM, TWITTER</h2>
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
                        <p>Start with an advantage, NFT owners of card from 1 to 10 000 will get special tips to perform in the game and early access to the platform. Trad your card between each other to find the best combo, the game is coming soon !</p>
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
                    <h3>Number tennis players who joined us</h3>
                    <div className='counter'>
                        <div class="flip-clock-container">
                            <div class="flip-clock flip-clock-s">
                                <div class="digit digit-left">
                                
                                <div class="card">
                                    <div class="card-face card-face-front"></div>
                                    <div class="card-face card-face-back"></div>
                                </div>
                                
                                </div>
                                <div class="digit digit-right">
                                <div class="card">
                                    <div class="card-face card-face-front"></div>
                                    <div class="card-face card-face-back"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}