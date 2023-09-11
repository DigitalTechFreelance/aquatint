/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import Slider from '@mui/material/Slider';

const format = (sec) => {
  if (isNaN(sec)) {
    return '00:00';
  }
  const date = new Date(sec * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm.toString().padStart(2, '0')}:${ss}`;
};

function VideoPlayer(props) {
  const [state, setState] = useState({
    playing: false,
    played: 0,
    seeking: false,
  });

  const { playing, played } = state;
  const playerRef = useRef(null);
  const playerWrapperRef = useRef(null);
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : '00:00';
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : '00:00';
  const initHandler = (e) => {
    //// console.log(e)
  };
  const playHandler = (e) => {
    setState({ ...state, playing: !state.playing });

    // console.log("eventName, play",  `clicked-on-${playing? `Pause-Video` : `Play-Video`.toLocaleLowerCase()}`)
    // pushCustomEventDataToDatalayer(
    //   `clicked-on-${
    //     playing ? `Pause-Video` : `Play-Video`.toLocaleLowerCase()
    //   }`,
    //   {}
    // );
    // eslint-disable-next-line react/prop-types
    props?.playingStatus && props?.playingStatus({ playing: !state.playing, buttonClose: true }, e);
  };

  const handleClose = () => {
    // eslint-disable-next-line react/prop-types

    props?.playingStatus && props?.playingStatus({ playing: false, buttonClose: false });
    // console.log("onclicked play",  `clicked-on-${playing? `Pause-Video` : `Play-Video`.toLocaleLowerCase()}`)

    // eslint-disable-next-line react/prop-types
    if (played > 0 && props.buttonClose) {
      setState({ ...state, playing: false, played: 0 });
    }
  };
  const handelProgress = (stateChange) => {
    if (!state.seeking) {
      setState({ ...state, ...stateChange });
    }
  };
  const handelSeekChange = (e, newValue) => {
    const playBackControlValue = parseFloat(newValue) / 100;
    setState({ ...state, played: playBackControlValue });
  };
  const handelSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  const handelSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };
  const handelPlayDone = () => {
    // playerRef.current.seekTo(0);
    setState({ ...state, playing: false });
  };

  const handleScroll = () => {
    setState({ ...state, playing: false });
  };

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      if (playing) {
        playHandler('playing video');
      }
    }
    // setState({ ...state, playing: true });
    return () => {
      if (isBrowser) {
        window.removeEventListener('scroll', () => handleScroll);
        if (playing) {
          playHandler('playing video');
        }
      }
    };
  }, [playing]);

  return (
    <>
      <div className="bs-videoplayer">
        {props.buttonClose && (
          <button onClick={handleClose} className="icon icon-close"></button>
        )}

        <div
          className="playerWrapper"
          ref={playerWrapperRef}
          onClick={playHandler}
        >
          <ReactPlayer
            width="100%"
            height={props.height}
            onEnded={handelPlayDone}
            progressInterval={100}
            ref={playerRef}
            // eslint-disable-next-line react/prop-types
            url={props.srcUrl?.includes?.('youtube.com/shorts') ? props.srcUrl.split('?')[0].replace('shorts/', 'watch?v=') : props.srcUrl}
            onReady={initHandler}
            playing={props?.autoPlay === true ? true : playing}
            onProgress={handelProgress}
            muted={props.muted}
            className={props.className}
            loop={props.loop}
          />
          <button className="action-btn" onClick={playHandler}>
            <span className={props?.autoPlay || playing ? "cm-hide" : ""}>
              <span className="cm-btn-watch">
                {/* <span className="text">play</span> */}
                <span className="icon icon-play1"></span>
              </span>
            </span>
            {/* <span className={!playing ? "cm-hide" : ""}>
              <span className="icon icon-play2"></span>
            </span> */}
          </button>
        </div>
        <div className="controls">
          <div className="timer-slider">
            <Slider
              min={0}
              max={100}
              onChange={handelSeekChange}
              onMouseDown={handelSeekMouseDown}
              onChangeCommitted={handelSeekMouseUp}
              defaultValue={0}
              value={played * 100}
            />
          </div>
          <div className="play-controls-wrap">
            <div className="left-cont">
              <button className="action-btn" onClick={playHandler}>
                <span className={playing ? "cm-hide" : ""}>
                  <span className="cm-btn-watch">
                    {/* <span className="text">play</span> */}
                    <span className="icon icon-play1"></span>
                  </span>
                </span>
                <span className={!playing ? "cm-hide" : ""}>
                  <span className="icon icon-pause"></span>
                </span>
              </button>
              <span className="video_time">{format(currentTime)}</span>
            </div>
            <div className="right-cont">
              <span className="video_length">{format(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;