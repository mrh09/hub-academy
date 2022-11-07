import React from 'react'

const PaginationGaleri = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            <div className="pagination-container container">
                <div className="pagination-section">
                    <p>Menampilkan {postsPerPage} data dari {totalPosts}</p>
                    <div className="button-pagination-section">
                        {
                            pages.map((page, index) => {
                                return (
                                    <button onClick={() => setCurrentPage(page)} className={page == currentPage ? "active" : ""} key={index}>{page}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginationGaleri