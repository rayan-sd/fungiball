import React from 'react'
// import Camilo from "./../img/Camilo1.png"
import gif from "./../img/gi.gif"
import CamiloPlatine from "./../img/CamiloPlatine1.png"
import edouard from './../img/Edouard1.png'
import Misaki from './../img/Misaki1.png'
import Unknown from './../img/Unknown1.png'
import "./../css/Collection.scss"



export default function Collection() {
    return (
        <section className='Collection' id='Collection'>
            {/* Collection-section */}
            <div className='box-title'>
                <h1>Collection</h1>
                <p>Bring the passion of tennis to a real NFT game. FungiBall NFT cards are connected with reality, each card is linked to a professional tennis player and the value of this one is evolving according to the performance of this player.</p>
                <h3>Don’t hesitate between one player or the other, just <br/> <span className='colors'>make it yours </span> </h3>
            </div>

            <div className='container-collection'>
            <div className='blur-container'></div>
                <div className='top'>
                    <img alt='edouard' src={edouard}></img>
                    <img alt='misaki' className='middle-top' src={gif}></img>
                    <img alt='unknown' src={Unknown}></img>
                </div>
                <div className='middle'>
                    <h1>MAKE IT YOURS</h1>
                </div>
                <div className='bottom'>
                    <img alt='camiloPlatine' src={CamiloPlatine}></img>
                    <img alt='gif' src={Misaki}></img>
                </div>
            </div>
        </section>
    )
}