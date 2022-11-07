import React from 'react'
import ReactPlayer from 'react-player';
import './VideoComp.css';

function VideoComp() {
    return (
        <>
            <div className="video-container container">
                <h1>Video Profil</h1>
                <p>Berikut Adalah Video Profil dari Sekolah Kami</p>
                <div className="player-wrapper">
                    <ReactPlayer className="video-player" url='https://www.youtube.com/watch?v=AUPnG-VidS8' width='100%' height='100%' />
                </div>
            </div>
        </>
    )
}

export default VideoComp