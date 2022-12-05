import React from 'react'
import './PartnerComp.css'

function PartnerComp() {

    let counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1
        }
    }, 5000);

    return (
        <>
            <div className="partner-container container">
                <div className="header-partner-section">
                    <h1>Partner <br /> Kerja Sama</h1>
                    <p>Kami Bekerja sama dengan berbagai lembaga dan perusahaan besar diseluruh Indonesia untuk menyalurkan bakat siswa kami. diharapkan dengan adanaya kerja sama ini siswa dapat meraih prestasi</p>
                </div>
                <div className="logo-partner-section">
                    {/* radio button */}
                    <input type='radio' name='radio-btn' id='radio1' />
                    <input type='radio' name='radio-btn' id='radio2' />

                    {/* radio button */}
                    <div className="slider-section first">
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-1.png' />
                        </div>
                        <div className="image-slider first">
                            <img alt="logo" src='/img/partner-2.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-3.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-4.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-5.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-6.png' />
                        </div>
                    </div>
                    <div className="slider-section">
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-6.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-5.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-4.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-3.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-2.png' />
                        </div>
                        <div className="image-slider">
                            <img alt="logo" src='/img/partner-1.png' />
                        </div>
                    </div>
                    <div className="slider-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                    </div>

                    <div className="slider-manual">
                        <label for='radio1' className="manual-btn"></label>
                        <label for='radio2' className="manual-btn"></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerComp