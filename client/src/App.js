import React from 'react';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
import NavBar from './components/NavBar';
import About from './components/About';
import Users from './components/Users';

const App = () => {
    return (
        <div>
            <NavBar />
            <Options>
                <Notifications />
            </Options>
            <VideoPlayer />
            <Users />
            <About />
        </div>
    );
}

export default App;