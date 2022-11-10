import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer-container container">
                <div className="footer-section">
                    <div className="about-footer-section">
                        <h2>Inagata <br /> Template</h2>
                        <p>Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                        <div className="footer-icon-section">
                            <div className="footer-icon">
                                <FaTwitter />
                            </div>
                            <div className="footer-icon">
                                <FaFacebookF />
                            </div>
                            <div className="footer-icon">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="link-footer-section">
                        <div className="link-footer-item">
                            <h2>Informasi</h2>
                            <Link to='/berita'>Artikel</Link>
                            <Link to='/galeri'>Galeri</Link>
                        </div>
                        <div className="link-footer-item">
                            <h2>Tentang</h2>
                            <Link to='/tentang-kita'>Tentang Kami</Link>
                            <Link to='/kontak'>Kontak Kami</Link>
                        </div>
                        <div className="link-footer-item">
                            <h2>Kantor Kami</h2>
                            <p>Indonesia <br />
                                Unamed road RT 01 RW 02 <br />
                                Surabaya
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <p>Copyright © 2021. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer