import React from 'react'

function TentangHero() {
    return (
        <>
            <div className="hero-container container">
                <div className="row hero-row">
                    <div className="hero-col">
                        <h1>Tentang Kami</h1>
                        <p>Penjelasan Tentang Seokolah Kami Yang Dapat <br />
                            Menambah Referesi Anda</p>
                    </div>
                    <div className="hero-col">
                        <img className='hero-background' src='/img/hero-img.png' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TentangHero