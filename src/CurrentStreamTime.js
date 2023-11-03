import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

export const CurrentStreamTime = (props) => {

    const {src, type='audio', setCurrentTime} = props;

    const timeUpdate = (event) => {
        const minutes = Math.floor(event.target.currentTime / 60);
        const seconds = Math.floor(event.target.currentTime - minutes * 60);

        const currentTime = str_pad_left(minutes,'0',2) + ':' + str_pad_left(seconds,'0',2);

        setCurrentTime(currentTime);
    }

    const str_pad_left = (string,pad,length) => {
        return (new Array(length+1).join(pad)+string).slice(-length);
    }

    let htmlTag = '';

    if(type === 'audio') {
        htmlTag = 
        <div className='audioTrack'>
            <button className="skip-btn" id="goBack" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <audio className='musicTrack' src={src} autoPlay muted controls onTimeUpdate={timeUpdate} />
            <button className="skip-btn" id="skipForward" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>;
    }

    return (
        <>
            {htmlTag}
        </>
    );
}