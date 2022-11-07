import React from 'react'
import GuruComp from '../components/tentangKita/GuruComp'
import Keunggulan from '../components/tentangKita/Keunggulan'
import PartnerTentang from '../components/tentangKita/PartnerTentang'
import SekolahTetang from '../components/tentangKita/SekolahTetang'
import TentangHero from '../components/tentangKita/TentangHero'
import VideoComp from '../components/tentangKita/VideoComp'

function TentangKita() {
    return (
        <div>
            <TentangHero />
            <Keunggulan />
            <SekolahTetang />
            <VideoComp />
            <GuruComp />
            <PartnerTentang />
        </div>
    )
}

export default TentangKita