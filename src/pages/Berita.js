import React from 'react'
import BeritaComp from '../components/berita/BeritaComp'
import HeroBerita from '../components/berita/HeroBerita'
import InformasiBerita from '../components/berita/InformasiBerita'
import InformasiTerbaru from '../components/berita/InformasiTerbaru'

function Berita() {
    return (
        <div>
            <HeroBerita />
            <InformasiBerita />
            <InformasiTerbaru />
            <BeritaComp />
        </div>
    )
}

export default Berita