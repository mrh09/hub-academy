import React, { useState } from 'react'
import PaginationGaleri from './PaginationGaleri';

function GaleriComp() {

    const galeris = [
        {
            img: './img/galeri-1.png',
            title: 'Belajar Mengajar',
            activity: "Kegiatan belajar mengajar diadakan setiap hari senin hingga jum'at"
        },
        {
            img: './img/galeri-2.png',
            title: 'Sharing Session',
            activity: 'Kegiatan menukar pendapat dan pikiran antara murid dan guru'
        },
        {
            img: './img/galeri-3.png',
            title: 'Presentasi Project',
            activity: 'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatik keberanian'
        },
        {
            img: './img/galeri-4.png',
            title: 'Belajar Mengajar',
            activity: "Kegiatan belajar mengajar diadakan setiap hari senin hingga jum'at"
        },
        {
            img: './img/galeri-5.png',
            title: 'Sharing Session',
            activity: 'Kegiatan menukar pendapat dan pikiran antara murid dan guru'
        },
        {
            img: './img/galeri-6.png',
            title: 'Presentasi Project',
            activity: 'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatik keberanian'
        },
        {
            img: './img/galeri-7.png',
            title: 'Belajar Mengajar',
            activity: "Kegiatan belajar mengajar diadakan setiap hari senin hingga jum'at"
        },
        {
            img: './img/galeri-8.png',
            title: 'Sharing Session',
            activity: 'Kegiatan menukar pendapat dan pikiran antara murid dan guru'
        },
        {
            img: './img/galeri-9.png',
            title: 'Presentasi Project',
            activity: 'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatik keberanian'
        },
        {
            img: './img/galeri-9.png',
            title: 'Presentasi Project',
            activity: 'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatik keberanian'
        },
        {
            img: './img/galeri-8.png',
            title: 'Sharing Session',
            activity: 'Kegiatan menukar pendapat dan pikiran antara murid dan guru'
        },
        {
            img: './img/galeri-7.png',
            title: 'Belajar Mengajar',
            activity: "Kegiatan belajar mengajar diadakan setiap hari senin hingga jum'at"
        },
        {
            img: './img/galeri-6.png',
            title: 'Presentasi Project',
            activity: 'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatik keberanian'
        },
        {
            img: './img/galeri-5.png',
            title: 'Sharing Session',
            activity: 'Kegiatan menukar pendapat dan pikiran antara murid dan guru'
        },
        {
            img: './img/galeri-4.png',
            title: 'Belajar Mengajar',
            activity: "Kegiatan belajar mengajar diadakan setiap hari senin hingga jum'at"
        },
        {
            img: './img/galeri-3.png',
            title: 'Presentasi Project',
            activity: 'Kegiatan menunjukan hasil pekerjaan dari guru untuk melatik keberanian'
        },
        {
            img: './img/galeri-2.png',
            title: 'Sharing Session',
            activity: 'Kegiatan menukar pendapat dan pikiran antara murid dan guru'
        },
        {
            img: './img/galeri-1.png',
            title: 'Belajar Mengajar',
            activity: "Kegiatan belajar mengajar diadakan setiap hari senin hingga jum'at"
        },

    ]

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const lasPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lasPostIndex - postsPerPage;
    const totalPosts = galeris.length;

    const currentPosts = galeris.slice(firstPostIndex, lasPostIndex)

    return (
        <>

            <div className="activity-container container">
                <div className="body-berita-section">
                    {
                        currentPosts.map((galeri, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className="card-container">
                                        <img className="card-img" src={galeri.img} alt={galeri.title} />
                                        <h3>{galeri.title}</h3>
                                        <p>{galeri.activity}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pagination-section">
                    <PaginationGaleri totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>
        </>
    )
}

export default GaleriComp