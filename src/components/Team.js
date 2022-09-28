import React from 'react'
import "./../css/Teams.scss"

import victor from "./../img/TEAM/victor.png"
import jean from "./../img/TEAM/jean.png"
import vasselin from "./../img/TEAM/vasselin1.png"
import alexandre from "./../img/TEAM/alexandre1.png"
import antoine from "./../img/TEAM/antoine1.png"
import guillaume from "./../img/TEAM/guillaume.png"
import pierre from "./../img/TEAM/pierre.png"
import designer from "./../img/TEAM/designer.png"
import vms from "./../img/TEAM/vms.png"

import { Swiper, SwiperSlide } from "swiper/react";
import './../css/slider.scss'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const tab = [
    {name : "Victor Molette" ,poste : "Co-Founder & CEO", img : victor, twitter: "https://twitter.com/VictorMolette?s=20&t=UEoz5MEklIy_MYdOtKMWbw", Instagram: "https://www.instagram.com/victormolette/", Linkedin: "https://www.linkedin.com/in/victormolette"},
    {name : "Jean Matias" ,poste : "Co-Founder & Chairman", img : jean, twitter: "https://twitter.com/JeanMAT39740767", Instagram: "https://www.instagram.com/joao_gmts/", Linkedin: ""},
    {name : "E. Roger-Vasselin" ,poste : "Tennis Player", img : vasselin, twitter: "", Instagram: "https://www.instagram.com/edouardrogervasselin/", Linkedin: ""},
    {name : "Antoine Pruvot" ,poste : "CFO Advisor", img : antoine, twitter: "", Instagram: "", Linkedin: "https://www.linkedin.com/in/antoine-pruvot-7876b1113"},
    {name : "Alexandre Thevenet" ,poste : "Communication Director", img : alexandre, twitter: "", Instagram: "", Linkedin: ""},
    {name : "Pierre Brill" ,poste : "Crypto Broker", img : guillaume, twitter: "", Instagram: "", Linkedin: "https://www.linkedin.com/in/pierre-brill-036448b9"},
    {name : "Guillaume Franc" ,poste : "Advisor", img : pierre, twitter: "", Instagram: "", Linkedin: ""},
    {name : "Lucka Ndaye" ,poste : "Designer", img : designer, twitter: "", Instagram: "https://www.instagram.com/luckandaye/", Linkedin: ""},
    {name : "VMS" ,poste : "Web3 Consulting Agency", img : vms, twitter: "", Instagram: "", Linkedin: ""},
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
                    <h1>Fungi Team</h1>
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
                                <a href='https://www.linkedin.com/in/victormolette'>LinkedIn</a>
                                <a href='https://twitter.com/VictorMolette?s=20&t=UEoz5MEklIy_MYdOtKMWbw'>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={jean}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2> Jean Matias</h2>
                                <p> Co-Founder & Chairman</p>
                            </div>
                            <div className='social-box'>
                                <a href="https://www.instagram.com/joao_gmts/">Instagram</a>
                                <a href="https://twitter.com/JeanMAT39740767">Twitter</a>
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
                                <a href='https://www.instagram.com/edouardrogervasselin/'>Instagram</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={designer}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Lucka Ndaye</h2>
                                <p>Designer</p>
                            </div>
                            <div className='social-box'>
                                <a href="https://www.instagram.com/luckandaye/">Instagram</a>
                                <a>LinkedIn</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='team1' src={antoine}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Antoine Pruvot</h2>
                                <p>CFO Advisor</p>
                            </div>
                            <div className='social-box'>
                                <a href='https://www.linkedin.com/in/antoine-pruvot-7876b1113'>LinkedIn</a>
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
                                <a>LinkedIn</a>
                                <a>Twitter</a>
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
                                <a href='https://www.linkedin.com/in/pierre-brill-036448b9'>LinkedIn</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className='box-team'>
                            <div className="box-img-team">
                                <img alt='vms' src={vms}></img>
                            </div>
                            <div className='box-text-Team'>
                                <h2>Virtual Miracle Studio</h2>
                                <p>Web3 Consulting Agency</p>
                            </div>
                            <div className='social-box'>
                                <a>LinkedIn</a>
                                <a href='https://www.vmstudio.xyz/'>Website</a>
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
                                <a>LinkedIn</a>
                                <a>Twitter</a>
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
                                            <a href={value.Linkedin}>LinkedIn</a>
                                            <a href={value.twitter}>Twitter</a>
                                            <div>
                                                <a href={value.Instagram}>Instagram</a>
                                            </div>
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