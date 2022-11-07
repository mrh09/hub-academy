import React from 'react'
import ActivityComp from '../components/beranda/ActivityComp'
import ContactComp from '../components/beranda/ContactComp'
import HeroComp from '../components/beranda/HeroComp'
import NewsComp from '../components/beranda/NewsComp'
import PartnerComp from '../components/beranda/PartnerComp'
import ProgramComp from '../components/beranda/ProgramComp'
import SekolahComp from '../components/beranda/SekolahComp'


function Beranda() {
    return (
        <div>
            <HeroComp />
            <ProgramComp />
            <SekolahComp />
            <PartnerComp />
            <ActivityComp />
            <ContactComp />
            <NewsComp />
        </div>
    )
}

export default Beranda