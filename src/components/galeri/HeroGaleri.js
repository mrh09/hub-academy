import React from 'react'

function HeroGaleri() {
    return (
        <>
            <div className="hero-container container">
                <div className="row hero-row">
                    <div className="hero-col">
                        <h1>Galeri</h1>
                        <p>Halaman Yang Akan Memberikan <br />
                            Dokumentasi Kegiatan Sekolah </p>
                    </div>
                    <div className="hero-col">
                        <img className='hero-background' src='/img/hero-img.png' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroGaleri