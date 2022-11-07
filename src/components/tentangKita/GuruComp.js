import React from 'react'
import './GuruComp.css'

function GuruComp() {
    const guru = [
        {
            img: './img/guru-1.png',
            name: 'Mrs.Y',
            jabatan: 'Kepala Sekolah'
        },
        {
            img: './img/guru-2.png',
            name: 'Mr.X',
            jabatan: 'Kepala Staff'
        },
        {
            img: './img/guru-3.png',
            name: 'Mrs.Y',
            jabatan: 'Guru Matematika'
        },
        {
            img: './img/guru-4.png',
            name: 'Mr.X',
            jabatan: 'Guru Biologi'
        },
        {
            img: './img/guru-5.png',
            name: 'Mrs.Y',
            jabatan: 'Guru Fisika'
        },
        {
            img: './img/guru-6.png',
            name: 'Mr.X',
            jabatan: 'Guru Bahasa'
        },
        {
            img: './img/guru-7.png',
            name: 'Mrs.Y',
            jabatan: 'Guru Kimia'
        },
        {
            img: './img/guru-8.png',
            name: 'Mr.X',
            jabatan: 'Guru Seni Budaya'
        }
    ]


    return (
        <>
            <div className="guru-container">
                <h1>Guru dan Staff Sekolah</h1>
                <div className="guru-section">
                    {
                        guru.map((gurus, index) => {
                            return (
                                <div className="card-guru" key={index}>
                                    <div className="card-guru-container">
                                        <img className="card-img-guru" src={gurus.img} alt={gurus.name} />
                                        <h3>{gurus.name}</h3>
                                        <p>{gurus.jabatan}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GuruComp