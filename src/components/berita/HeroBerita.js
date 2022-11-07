import React from 'react'

function HeroBerita() {
    return (
        <>
            <div className="hero-container container">
                <div className="row hero-row">
                    <div className="hero-col">
                        <h1>Berita</h1>
                        <p>Halaman Yang Akan Memberikan Pemberitahuan <br />
                            dan Pengetahuan Untuk Anda </p>
                    </div>
                    <div className="hero-col">
                        <img className='hero-background' src='/img/hero-img.png' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBerita