import React from 'react'
import "./../css/Skills.scss"
import ball from "./../img/ball.png"
import retur from "./../img/return.png"
import thunder from "./../img/thunder.png"
import starSkills from "./../img/stars-skills.png"
import trophy from "./../img/trophy.png"


export default function Skills() {
    return (
        <section className='Skills' id='Skills'>
            {/* Skills-section */}
            <div className='title-skills'>
                <h1>5 Fungiskills</h1>
                <p>As we love to say, “Make it yours” </p>
                <p>With the great diversity of FungiSkills available, you will have the ability to design your own player while using the real statistics of the game.</p>
            </div>

            <div className='container-skils'>
                <div className='t'>
                    <div className='box-skills'>
                        <img alt='balle' src={ball}></img>
                        <div className="text-skills">
                            <h3>SERVICE</h3>
                            <p>% of success of the services game during the match</p>
                        </div>
                    </div>
                    <div className='box-skills c3'>
                        <img alt='return' src={retur}></img>
                        <div className="text-skills">
                            <h3>RETURN</h3>
                            <p>% of success of the return game during the match</p>
                        </div>
                    </div>
                    <div className='box-skills'>
                        <img alt='technic' src={starSkills}></img>
                        <div className="text-skills">
                            <h3>TECHNIC</h3>
                            <p>Technical skill of the player during the match</p>
                        </div>
                    </div>
                </div>
                <div className='b'>
                    <div className='box-skills c1'>
                        <img alt='score' src={trophy}></img>
                        <div className="text-skills">
                            <h3>match score</h3>
                            <p>% Net points won by the player during the match</p>
                        </div>
                    </div>
                    <div className='box-skills c2'>
                        <img alt='thunder' src={thunder}></img>
                        <div className="text-skills">
                            <h3>power</h3>
                            <p>General power delivered by the player during the match</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}