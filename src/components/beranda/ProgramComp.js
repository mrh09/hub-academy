import React from 'react'
import { FiBook } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { FaPenNib } from 'react-icons/fa'
import './ProgramComp.css'

function ProgramComp() {
    return (
        <>
            <div className="program-container container">
                <div className="program-section">
                    <div className="logo-icon-book">
                        <FiBook />
                    </div>
                    Mengunakan Kurikulum Terbaru
                </div>
                <div className="program-section">
                    <div className="logo-icon-time">
                        <BiTimeFive />
                    </div>
                    Efektifitas Waktu Saat Belajar Disekolah
                </div>
                <div className="program-section">
                    <div className="logo-icon-pen">
                        <FaPenNib />
                    </div>
                    Penyaluran Bakat dan Minat Siswa
                </div>
            </div>
        </>
    )
}

export default ProgramComp