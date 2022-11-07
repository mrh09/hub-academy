import React from 'react'
import { Link } from 'react-router-dom'
import './InformasiTerbaru.css'

function InformasiTerbaru() {
    return (
        <>
            <div className="information-container container">
                <div className="information-section">
                    <img className='berita-img' src='./img/Berita.png' />
                    <h2>Kegiatan Belajar Mengajar Offline Dimulai</h2>
                    <p>Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu <Link to='/post'>Read More....</Link></p>
                </div>
            </div>
        </>
    )
}

export default InformasiTerbaru