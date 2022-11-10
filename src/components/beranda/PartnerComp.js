import React from 'react'
import './PartnerComp.css'

function PartnerComp() {
    return (
        <>
            <div className="partner-container container">
                <div className="header-partner-section">
                    <h1>Partner <br /> Kerja Sama</h1>
                    <p>Kami Bekerja sama dengan berbagai lembaga dan perusahaan besar diseluruh Indonesia untuk menyalurkan bakat siswa kami. diharapkan dengan adanaya kerja sama ini siswa dapat meraih prestasi</p>
                </div>
                <div className="logo-partner-section">
                    <ul>
                        <li> <img alt="logo" src='/img/partner-1.png' /> </li>
                        <li> <img alt="logo" src='/img/partner-2.png' /> </li>
                        <li> <img alt="logo" src='/img/partner-3.png' /> </li>
                        <li> <img alt="logo" src='/img/partner-4.png' /> </li>
                        <li> <img alt="logo" src='/img/partner-5.png' /> </li>
                        <li> <img alt="logo" src='/img/partner-6.png' /> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PartnerComp