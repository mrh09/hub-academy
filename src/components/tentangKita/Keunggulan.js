import React from 'react';
import './Keunggulan.css'
import { FiBook } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { FaPenNib } from 'react-icons/fa'

function Keunggulan() {
    return (
        <>
            <div className="keunggulan-container container">
                <h1>Keunggulan <br />Sekolah Kami</h1>
                <div className="keunggulan-wrapper">
                    <div className="keunggulan-section">
                        <div className="logo-icon-book">
                            <FiBook />
                        </div>
                        <p><b>Mengunakan Kurikulum Terbaru</b><br />
                            Menerapkan kurikulum terbaru saat proses belajar</p>
                    </div>
                    <div className="keunggulan-section">
                        <div className="logo-icon-time">
                            <BiTimeFive />
                        </div>
                        <p><b>Efektifitas Waktu Saat Belajar Disekolah</b><br />
                            Waktu belajar yang dirancang agar para siswa tidak jenuh</p>
                    </div>
                    <div className="keunggulan-section">
                        <div className="logo-icon-pen">
                            <FaPenNib />
                        </div>
                        <p><b>Penyaluran Bakat dan Minat Siswa</b><br />
                            Berbagai macam kegitan akademik maupun non akademik</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keunggulan