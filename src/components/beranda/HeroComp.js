import React from 'react'
import './HeroComp.css'
// import hero from '/img/hero-img.png'

function HeroComp() {
    return (
        <>
            <div className="hero-container container">
                <div className="row hero-row">
                    <div className="hero-col">
                        <h1>Tuntut Ilmu Untuk <br /> Masa Depan Yang <br /> Cerah</h1>
                        <p>jelajahi  semua pengetahuan dan ilmu bermanfaat yang <br /> berguna untuk kehidupan anda kedepannya agar lebih <br /> bermanfaat dalam hidup anda dan orang lain</p>
                        <button className='hero-button' >Mulai Belajar</button>
                    </div>
                    <div className="hero-col">
                        <img className='hero-background' src='/img/hero-img.png' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComp