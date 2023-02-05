import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='About' id='about'>
            <div>
                <h1>About the Project</h1>
                <p>This project is made using ReactJs with NodeJs for the backend</p>
                <p>I have used Socket.io, WebRTC and express to make the backend</p>
                <p>You can call any other person using the website by sharing your unique ID with them</p>
                <p>Also talk to various random online users and make new friends</p>
            </div>
        </div>
    )
}

export default About;