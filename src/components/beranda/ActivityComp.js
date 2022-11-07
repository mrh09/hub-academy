import React from 'react'
import { Link } from 'react-router-dom'
import './ActivityComp.css'

function ActivityComp() {
    return (
        <>
            <div className="activity-container container">
                <div className="activity-header-section">
                    <h1>Kumpulan Kegiatan Sekolah</h1>
                    <span><Link className="activity-link" to='/galeri'>Lihat Semua</Link></span>
                </div>
                <div className="activity-body-section">
                    <div className="card">
                        <div className="card-container">
                            <img className="card-img" src='/img/kegiatan-1.png' alt="education" />
                            <h3>Belajar Mengajar</h3>
                            <p>Kegiatan belajar mengajar diadakan setiap
                                hari Senin hingga Jum’at
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <img className="card-img" src='/img/kegiatan-2.png' alt="education" />
                            <h3>Sharing Session</h3>
                            <p>Kegiatan menukan pendapat dan pikiran
                                antara guru dan murid
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <img className="card-img" src='/img/kegiatan-3.png' alt="education" />
                            <h3>Presentasi Projek</h3>
                            <p>Kegiatan menunjukan hasil pekerjaan dari
                                guru untuk melatih keberanian
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityComp