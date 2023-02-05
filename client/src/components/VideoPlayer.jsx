import React, { useContext } from 'react';
import '../styles.css';
import { SocketContext } from '../SocketContext';
//material UI is not supported
// import { Grid, Typography, Paper } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

const VideoPlayer = () => {
    const context = useContext(SocketContext);

    return (
        <div className='videos' id='video'>

            {
                context.stream && (
                    <div>
                        <div className='floatingName'>
                            <h3>{context.name || 'Name'}</h3>
                        </div>
                        <video playsInline muted ref={context.myVideo} autoPlay className='Video'></video>
                    </div>
                )
            }

            {
                context.callAccepted && !context.callEnded && (
                    <div>
                        <div className='floatingName'>
                            <h3>{context.call.name || 'Name'}</h3>
                        </div>
                        <video playsInline muted={context.callMuted} autoPlay ref={context.userVideo} className='Video'> </video>
                        {
                            !context.callMuted ? (
                                <button onClick={context.muteCall} > Mute </button>
                            ) : (
                                <button onClick={context.unMuteCall} > Unmute </button>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
export default VideoPlayer