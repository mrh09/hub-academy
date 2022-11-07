import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'


function Navbar() {

    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const closeMenu = () => {
        setClick(false)
    }

    const handleClick = () => {
        setClick(!click)
    }


    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="navbar-container container">
                    <Link className='navbar-logo' to='/'>
                        <div className="logo-icon">
                            S
                        </div>
                        Schools
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className={click ? "nav-menu active" : "nav-menu"} onClick={handleClick}>
                        <ul className='menu-list'>
                            <li>
                                <Link className='nav-links' to='/' onClick={closeMenu}>
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-links' to='/tentang-kita' onClick={closeMenu}>
                                    Tentang Kita
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-links' to='/berita' onClick={closeMenu}>
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-links' to='/galeri' onClick={closeMenu}>
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link className='nav-links' to='/kontak' onClick={closeMenu}>
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                        <ul className='button-list'>
                            <li>
                                <button className='nav-btn' onClick={handleClick}>
                                    PPBO
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar