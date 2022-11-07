import React from 'react'
import GalariTerbaru from '../components/galeri/GalariTerbaru'
import GaleriComp from '../components/galeri/GaleriComp'
import HeroGaleri from '../components/galeri/HeroGaleri'

function Galeri() {
    return (
        <div>
            <HeroGaleri />
            <GalariTerbaru />
            <GaleriComp />
        </div>
    )
}

export default Galeri