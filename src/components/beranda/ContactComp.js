import React from 'react'
import './ContactComp.css'
import { useNavigate } from 'react-router-dom'

function ContactComp() {

    let navigate = useNavigate();
    const changePage = () => {
        navigate('/kontak')
    }

    return (
        <>
            <div className="contact-container container">
                <div className="contact-row">
                    <div className="contact-col">
                        <h1>Siap Untuk Bergabung ?</h1>
                        <p>Kami akan senantiasa menunggu keikut sertaan <br />
                            anak-anak untuk belajar bersama kami
                        </p>
                    </div>
                    <div className="contact-col">
                        <button className="btn-contact" onClick={changePage}>Kontak Kami</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp