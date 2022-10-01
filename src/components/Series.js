import React from 'react'
// import edouard from './../img/Edouard.png'
import "./../css/Series.scss"
import icon1 from "./../img/icon1.png"
import icon2 from "./../img/icon2.png"
import icon3 from "./../img/icon3.png"


export default function Series() {
    return (
        <section className='Series' id='Series'>
            {/* Series-section */}
            <div className='title-series'>
                <h1>3 star series</h1>
                <div className='blur'></div>
                <p>The goal is to be able to offer at the same time: a unique experience for those who wants to collect the rarest and most powerful form of NFT cards that exist and the ability for everyone to be part a bit more in the tennis world and enjoy the game.</p>
            </div>
            <div className='container-series'>
                <div className='blur-mobile'></div>
                <div className='box-series'>
                    <div className='cercle'></div>
                    <h3>PLATINUM</h3>
                    <p>1 card per skill per players per year</p>
                </div>
                <div className='box-series'>
                    <div className='cercle co2'></div>
                    <h3>GOLD</h3>
                    <p>10 cards per skill per players per year</p>
                </div>
                <div className='box-series'>
                    <div className='cercle co3'></div>
                    <h3>SILVER</h3>
                    <p>100 cards per skill per players per year</p>
                </div>
            </div>

            <div className='timeline'>
                <div className='outer'>
                    <div className='card-serie'>
                        <div className='info-card-l'>
                            <h2 className='t1'>Play to <span>EARN</span></h2>
                            <div className='text-card'>
                                <p>Making profit out of your NFTs is really easy but first you need to understand few things :</p>
                                <p>As you already know we have developed 5 categories of NFTs (FungiSkills) based on real tennis players statistics. Each of them is marked from 0 to 100 points.
                                    Well what you only need to do is to gather what you believe will be FungiSkill of each category for the next digitevent so your FungiPlayer will be the best and will make you earn a lot.</p>
                                <div className='box-button'>
                                    <a href='https://discord.gg/JeCaNyf74y'>LEARN MORE</a>
                                </div>                                   
                            </div>
                        </div>
                        <div className='info-card-r'>
                            <img alt='icon1' src={icon1}></img>
                        </div>
                    </div>
                    <div className='card-serie'>
                        <div className='info-card-l'>
                            <h2 className='t2'>What is a <span>FungiPlayer</span></h2>
                            <div className='text-card'>
                                <p>Your FungiPlayer is the digital tennis player that you will use to participate to all the digitevent that will happen on FungiBall. he or she will be your avatar in the digital world of Tennis, so take care of it !</p>
                                <p>The FungPlayer needs to be equipped with the 5 FungiSkills in order to be able to play Tennis, so as you understand, the better are your Skills the better will be your Player and so your rank in the competition.</p>
                                <div className='box-button p2'>
                                    <a href='https://discord.gg/JeCaNyf74y'>JOIN DISCORD</a>
                                </div>                                 
                            </div>
                        </div>
                        <div className='info-card-r'>
                            <img alt='icon1' src={icon2}></img>
                        </div>
                    </div>
                    <div className='card-serie'>
                        <div className='info-card-l'>
                            <h2 className='t3'>How to get <span>rewarded</span></h2>
                            <div className='text-card'>
                                <p>At the end of each events, FungiPlayers are ranked according to their performances during the tournaments.
Then, Top players gets rewarded in ETH, NFT cards and others special prizes according to their performances.</p>
                                <p>See more detail in the REWARD section.</p>
                                <div className='box-button'>
                                    <a href='https://discord.gg/JeCaNyf74y'>GET STARTED</a>
                                </div>
                            </div>
                        </div>
                        <div className='info-card-r'>
                            <img alt='icon1' src={icon3}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}