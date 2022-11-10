import { React, useState } from 'react'
import './BeritaComp.css'
import Pagination from './Pagination';

function BeritaComp() {

    const berita = [
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
        },
        {
            img: "./img/berita-3.png",
            date: "12 Desember 2020",
            title: "Kegiatan Belajar Mengajar Offline Dimulai"
        },
        {
            img: "./img/berita-2.png",
            date: "12 Desember 2020",
            title: "Pengambilan Raport Semester Ganjil"
        },
        {
            img: "./img/berita-1.png",
            date: "12 Desember 2020",
            title: "Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun"
        },
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
        },
        {
            img: "./img/berita-3.png",
            date: "12 Desember 2020",
            title: "Kegiatan Belajar Mengajar Offline Dimulai"
        },
        {
            img: "./img/berita-2.png",
            date: "12 Desember 2020",
            title: "Pengambilan Raport Semester Ganjil"
        },
        {
            img: "./img/berita-1.png",
            date: "12 Desember 2020",
            title: "Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun"
        },
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
        },
        {
            img: "./img/berita-3.png",
            date: "12 Desember 2020",
            title: "Kegiatan Belajar Mengajar Offline Dimulai"
        },
        {
            img: "./img/berita-2.png",
            date: "12 Desember 2020",
            title: "Pengambilan Raport Semester Ganjil"
        },
        {
            img: "./img/berita-1.png",
            date: "12 Desember 2020",
            title: "Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun"
        },

    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const lasPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lasPostIndex - postsPerPage;
    const totalPosts = berita.length;

    const currentPosts = berita.slice(firstPostIndex, lasPostIndex)


    return (
        <>
            <div className="news-container container">
                <div className="news-header-section">
                    <ul className='news-list'>
                        <li>Semua</li>
                        <li>Berita</li>
                        <li>Pengumuman</li>
                    </ul>
                </div>
                <div className="body-berita-section">
                    {
                        currentPosts.map((beritas, index) => {
                            return (
                                <div className="card-news" key={index}>
                                    <div className="card-news-container">
                                        <img className="card-news-img" src={beritas.img} alt={beritas.title} />
                                        <p>{beritas.date}</p>
                                        <h3>{beritas.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pagination-section">
                    <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>
        </>
    )
}

export default BeritaComp