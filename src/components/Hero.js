import React from 'react'
import edouard from './../img/Camilo.png'
import "./../css/Hero.scss"
import trophy from "./../img/trophy.png"
import starhero from "./../img/hero-stars.png"


export default function Hero() {
    return (
        <section className='Hero' id='Hero'>
            {/* Hero-section */}
            <div className='container-hero'>
                <div className='hero-box-tt'>
                    <div className='box-lhero'>
                        <h2> <img alt='trophy' src={trophy}></img> Fungiball.io is the best Play to Earn</h2>
                        <h1>make it <span>yours</span></h1>
                        <p>Play with the reality of the game. FungiBall NFT cards are connected with reality, each card is connected to a <span className='weightt'>professional tennis player</span> and the value of this one is evolving according to the performance of the player.</p>
                        <p>Mix the skills of the best tennis player in the world, <span className='weightt'>create the ultimate tennis</span> player, participate to digital tournaments, and make profit!</p>
                        <div className='box'>
                            <a target='_blank' href='https://docdro.id/6pBPFPo'> GET STARTED</a>
                        </div>
                    </div>
                    <div className='box-rhero'>
                        <img alt='edouard' src={edouard}></img>
                    </div>
                </div>
                <div className='text-turn'>
                    <img alt='star-hero' src={starhero}></img>
                </div>
                <hr />
            </div>
        </section>
    )
}