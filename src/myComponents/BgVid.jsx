import React from 'react'
import '../styles/BgVid.css'
import backgroundVideo from '../assets/images/BgVid.mp4'
const BgVid = () => {
    return (
        <video src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            className='background-video'></video>
    )
}

export default BgVid
