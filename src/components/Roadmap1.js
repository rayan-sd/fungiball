import React, { useEffect } from 'react'
// import edouard from './../img/Edouard.png'
import "./../css/Roadmap.scss"
// import Aos from "aos"
import "aos/dist/aos.css"
import roadmap from "./../img/roadmap.png"


export default function Roadmap() {
    // useEffect(() => {
    //     Aos.init({duration: 2000});
    // }, []);

    return (
        <section className='Roadmap'>
            {/* Roadmap-section */}
            <div className='box-title-Roadmap'>
                <h1>The Roadmap</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, elit vitae facilisis eleifend, ipsum elit lobortis eros, elementum porta mi felis ut massa. Suspendisse eleifend pharetra tortor rhoncus condimentum. Aliquam ac est vel purus posuere lacinia.</p>
            </div>
            <div className='container-Roadmap'>
                {/* <img alt='roadmap' src={roadmap}></img> */}
                <div className='l1'>
                    <div className='case'>
                    <div  className='back-color test'></div>
                        <span>10%</span>
                    </div>
                    <div className='box'>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p>
                    </div>
                </div>
                <div className='l2'>
                    <div className='box'>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p>
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
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p>
                    </div>
                </div>
                <div className='l4'>
                    <div className='box'>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p>
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
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p>
                    </div>
                </div>
                <div className='l6'>
                    <div className='box'>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vitae nulla pharetra semper neque nisi. Nisl congue ullamcorper porttitor tincidunt cursus. Feugiat egestas non fringilla congue augue ac vehicula lorem.</p>
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