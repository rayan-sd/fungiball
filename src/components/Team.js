import React from 'react'
import "./../css/Teams.scss"

import victor from "./../img/TEAM/victor.png"
import jean from "./../img/TEAM/jean.png"
import vasselin from "./../img/TEAM/vasselin1.png"
import alexandre from "./../img/TEAM/alexandre1.png"
import antoine from "./../img/TEAM/antoine1.png"
import louis from "./../img/TEAM/louis.png"
import guillaume from "./../img/TEAM/guillaume.png"
import nills from "./../img/TEAM/nills.png"
import pierre from "./../img/TEAM/pierre.png"

import { Swiper, SwiperSlide } from "swiper/react";
import './../css/slider.scss'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const tab = [
    {name : "Victor Molette" ,poste : "Co-Founder & CEO", img : victor},
    {name : "Jean Matias" ,poste : "Co-Founder & COO", img : jean},
    {name : "E. Roger-Vasselin" ,poste : "Tennis Player", img : vasselin},
    {name : "Antoine Pruvot" ,poste : "CFO & Advisor", img : antoine},
    {name : "Alexandre Thevenet" ,poste : "Communication Director", img : alexandre},
    {name : "Pierre Brill" ,poste : "Crypto Broker", img : guillaume},
    {name : "Nils Tessier" ,poste : "CTO", img : nills},
    {name : "Guillaume Franc" ,poste : "Advisor", img : pierre},
    {name : "Louis Etienne" ,poste : "Advisor", img : louis},
]


export default class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = { slidesPerView: 2, back: "//" }
    }
    render() {
        return (
            <section className='Team' id='Team'>
                {/* Team-section */}
                <div className='box-title-Team'>
                    <h1>The Fungi Team</h1>
                </div>
                <div className='container-team'>
                    <div className='blur-team'></div>
                    <div className='box-top-team'>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={victor}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2> Victor Molette</h2>
                                <p> Co-Founder & CEO</p>
                            </div>
                            <div className='social-box'>
                                <a>LinkedIn</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={jean}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2> Jean Matias</h2>
                                <p> Co-Founder & COO</p>
                            </div>
                            <div className='social-box'>
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className='box-top-team'>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={vasselin}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>E. Roger-Vasselin</h2>
                                <p>Tennis Player</p>
                            </div>
                            <div className='social-box'>
                                <a>LinkedIn</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={louis}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Louis Etienne</h2>
                                <p>Advisor</p>
                            </div>
                            <div className='social-box'>
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={antoine}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Antoine Pruvot</h2>
                                <p>CFO & Advisor</p>
                            </div>
                            <div className='social-box'>
                                <a>LinkedIn</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={alexandre}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Alexandre Thevenet</h2>
                                <p>Communication Director</p>
                            </div>
                            <div className='social-box'>
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className='box-top-team'>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={pierre}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Pierre Brill</h2>
                                <p>Crypto Broker</p>
                            </div>
                            <div className='social-box'>
                                <a>LinkedIn</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={nills}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Nils Tessier</h2>
                                <p>CTO</p>
                            </div>
                            <div className='social-box'>
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={guillaume}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Guillaume Franc</h2>
                                <p>Advisor</p>
                            </div>
                            <div className='social-box'>
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-team-mobile'>
                    <div className='box-top-team-mobile'>
                    <Swiper
                        slidesPerView={this.state.slidesPerView}
                        spaceBetween={30}
                        navigation={{
                            // nextEl: '.review-swiper-button-next',
                            // prevEl: '.review-swiper-button-prev',
                          }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="swiper"
                    >
                        {tab.map((value) => {
                            return (
                                <SwiperSlide>
                                    <div className='box-team-mobile'>
                                        <div className="box-img-team-mobile">
                                            <img alt='team1' src={value.img}></img>
                                        </div>
                                        <div className='box-text-Team-mobile'>
                                            <h2>{value.name}</h2>
                                            <p>{value.poste}</p>
                                        </div>
                                        <div className='social-box-mobile'>
                                            <a>LinkedIn</a>
                                            <a>Twitter</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        )})}
                        </Swiper>
                    </div>
                </div>
            </section>
        )
    }
}