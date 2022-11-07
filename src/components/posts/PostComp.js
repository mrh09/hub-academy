import React from 'react'
import { BsFacebook, BsLink45Deg, BsWhatsapp } from 'react-icons/bs';
import './PostComp.css'

function PostComp() {

    const artikels = [
        {
            img: "./img/berita-1.png",
            date: "12 Desember 2020",
            title: "Kegiatan Belajar Mengajar Offline Dimulai"
        },
        {
            img: "./img/berita-2.png",
            date: "12 Desember 2020",
            title: "Pengambilan Raport Semester Ganjil"
        },
        {
            img: "./img/berita-3.png",
            date: "12 Desember 2020",
            title: "Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun"
        }
    ]

    return (
        <>
            <div className="post-container container">
                <div className="post-section">
                    <h1>Kegiatan Belajar Mengajar Offline Dimulai</h1>
                    <h4>12 Desember 2020</h4>
                    <img className='berita-img' src='./img/Berita.png' />
                    <p>Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di depan layar gawainya bukan hanya untuk belajar namun juga untuk bermain game. Belum lagi harus menemani dan membantu anak-anak belajar sementara pekerjaan di rumah tidaklah sedikit. <br /> <br />

                        Namun perlahan demi perlahan sejak Oktober lalu, beberapa sekolah di Indonesia sudah mulai menerapkan Pembelajaran Tatap Muka atau PTM namun secara terbatas termasuk di Purwakarta kota saya tercinta. Seminggu sekali anak-anak bersekolah tentunya dengan pembatasan jarak ataupun waktu belajar yang mengalami pengurangan. <br /> <br />

                        Sekolah tempat saya mengabdi yaitu SMPN 8 Purwakarta baru di Januari tahun 2022 ini akan mulai melaksanakan pembelajaran tatap muka secara terbatas setelah memenuhi persyaratan yang ditentukan oleh Pemerintah Daerah dalam hal ini Dinas Pendidikan yang beberapa syaratnya antara lain tersedianya fasilitas kesehatan, siswa-siswi serta civitas sekolah yang sudah di vaksin dan beberapa persyaratan lainnya. <br /> <br />

                        Karenanya untuk mewujudkan mimpi para siswa yang ingin kembali belajar di sekolah, di hari Jumat tanggal 7 Januari 2022 diselenggarakan kegiatan gotong royong membersihkan sekolah yang dilaksanakan oleh perwakilan orang tua siswa, perwakilan siswa, perwakilan OSIS dan tentunya dilaksanakan juga oleh segenap civitas sekolah baik itu Guru maupun Staff Tata Usaha. <br /> <br />

                        Kegiatan gotong royong membersihkan sekolah tersebut diadakan agar ketika anak kembali ke kelasnya, kelasnya sudah dalam keadaan bersih. Seperti yang dikatakan oleh perwakilan orang tua dari kelas 7 dan 9 yang mengatakan alasan ikut gotong royong membersihkan kelas anaknya agar anaknya dapat belajar dengan nyaman dan sehat karena lingkungan kelas maupun sekolahnya yang bersih. Selain itu mengingat salah satu syarat bisa diadakan pembelajaran tatap muka adalah lingkungan pembelajaran yang bersih dan sehat. <br /> <br />

                        Selain membawa peralatan kebersihan masing-masing, ada pula orang tua yang membawa makanan untuk dikonsumsi setelah kelas selesai. Terjalin pula kerjasama yang baik antar orang tua padahal ada yang tidak kenal awalnya begitu juga anak-anak kelas 7 yang akhirnya bisa bertemu dengan teman kelasnya secara langsung setelah di semester ganjil ini hanya bertemu di pembelajaran online. Semuanya hadir demi mewujudkan pembelajaran tatap muka meskipun terbatas.
                    </p>

                    <div className="icon-post-section">
                        <p>Bagikan Artikel</p>
                        <div className="icon-post-wrapper">
                            <div className="icon-post">
                                <BsLink45Deg />
                            </div>
                            <div className="icon-post">
                                <BsFacebook />
                            </div>
                            <div className="icon-post">
                                <BsWhatsapp />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="other-post-section">
                    <h1>Artikel Lainnya</h1>
                    <div className="body-berita-section">
                        {
                            artikels.map((beritas, index) => {
                                return (
                                    <div className="card-news" key={index}>
                                        <div className="card-news-container">
                                            <img className="card-img" src={beritas.img} alt={beritas.title} />
                                            <p>{beritas.date}</p>
                                            <h3>{beritas.title}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostComp