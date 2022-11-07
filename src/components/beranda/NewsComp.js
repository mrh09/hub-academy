import React from 'react'
import { Link } from 'react-router-dom'
import './NewsComp.css'

function NewsComp() {
    return (
        <>
            <div className="news-container container">
                <div className="news-header-section">
                    <ul className='news-list'>
                        <li>Semua</li>
                        <li>Berita</li>
                        <li>Pengumuman</li>
                    </ul>
                    <span><Link className="news-link" to='/berita'>Lihat Semua</Link></span>
                </div>
                <div className="news-body-section">
                    <div className="card-news">
                        <div className="card-news-container">
                            <img className="card-img" src='/img/berita-1.png' alt="education" />
                            <h3>Kegiatan Belajar Mengajar Offline Dimulai</h3>
                            <p>Kegiatan yang diadakan saat siswa selesai melakukan studi sekolah</p>
                        </div>
                    </div>
                    <div className="card-news">
                        <div className="card-news-container">
                            <img className="card-img" src='/img/berita-2.png' alt="education" />
                            <h3>Pengambilan Raport Semester Ganjil</h3>
                            <p>Kegiatan yang diadakan saat siswa selesai melakukan studi sekolah</p>
                        </div>
                    </div>
                    <div className="card-news">
                        <div className="card-news-container">
                            <img className="card-img" src='/img/berita-3.png' alt="education" />
                            <h3>Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun</h3>
                            <p>Kegiatan yang diadakan saat siswa selesai melakukan studi sekolah</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsComp