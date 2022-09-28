import React, { useState} from 'react'
import "./../css/Faq.scss"
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

// AiOutlineUp
export default function Faq() {
    const [click, setClick] = useState(0)
    function handleClick(val) {
        if (click === val)
            setClick(0);
        else
            setClick(val)
        console.log(click);
    }
    return (
        <section className='Faq' id="Faq">
            {/* FAQ-section */}
            <div className='container-Faq'>
                <div className='left-faq'>
                    <div className='col1'>
                        <h3>FAQ</h3>
                        <h2>Frequently Asked <span>Questions</span></h2>
                    </div>
                    <div className='col2'>
                        <span>Couldn’t find what you were looking for? write to us at</span>
                        <a href="mailto: contact@astate.io">contact@astate.io</a>
                        {/* <a href = "mailto: abc@example.com">Send Email</a> */}
                    </div>
                </div>
                <div className='right-faq'>
                    <div className='accordion'>
                        <div className={(click === 1) ? 'accordium-item-active' : 'accordium-item'} id='question1'>
                            <div className='container-accordium' onClick={() => handleClick(1)}>
                                <a href='#question1' >WHICH COIN IS USED IN FUNGIBALL ?</a>
                                <div>{(click === 1) ? <BiChevronUp className="i-active" /> : <BiChevronDown className="i-remove" />}</div>
                            </div>
                            <div className='answer'>Fungiball is using Ethereum.</div>
                        </div>
                        <div className={(click === 2) ? 'accordium-item-active' : 'accordium-item'} id='question2'>
                            <div className='container-accordium' onClick={() => handleClick(2)}>
                                <a href='#question2'>HOW CAN I DEPOSIT MONEY TO BUY NFT CARDS ON FUNGIBALL ?</a>
                                <div>{(click === 2) ? <BiChevronUp className="i-active" /> : <BiChevronDown className="i-remove" />}</div>
                            </div>
                            <div className='answer'>
                                There are two ways to do it: <br />
                                – You have already a cryptowallet sush as metamask, so you can connect it directly to your fungiball account and start collecting NFT’s. <br />
                                – Or you don’t have a cryptowallet yet, so you can directly deposit money with your credit/debit card on your fungiball account via a protocol that will allow you to exchange your currency in ETH directly on Fungiball.
                            </div>
                        </div>
                        <div className={(click === 3) ? 'accordium-item-active' : 'accordium-item'} id='question3'>
                            <div className='container-accordium' onClick={() => handleClick(3)}>
                                <a href='#question3'>HOW WORKS THE ROYALTIES ?</a>
                                <div>{(click === 3) ? <BiChevronUp className="i-active" /> : <BiChevronDown className="i-remove" />}</div>
                            </div>
                            <div className='answer'>The first owner of a card will receive 0,5% of the revenue of the sales each time the card is sold in the secondary market.</div>
                        </div>
                        <div className={(click === 4) ? 'accordium-item-active' : 'accordium-item'} id='question4'>
                            <div className='container-accordium' onClick={() => handleClick(4)}>
                                <a href='#question4'>WHAT KIND OF PARTNERSHIPS DO HAVE FUNGIBALL WITH THE TENNIS PLAYERS?</a>
                                <div>{(click === 4) ? <BiChevronUp className="i-active" /> : <BiChevronDown className="i-remove" />}</div>
                            </div>
                            <div className='answer'>Fungiball use the image of the tennis players to create NFT on the platform, so we give back at part of the benefices to the players.</div>
                        </div>

                    </div>
                        <div className='col-social-faq'>
                            <span>Couldn’t find what you were looking for? write to us at</span>
                            <a href="mailto: contact@astate.io">contact@astate.io</a>
                        </div>
                </div>
            </div>
            <div className='blur-faq'></div>
        </section>
    )
}