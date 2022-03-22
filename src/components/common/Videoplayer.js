import React from "react";
import ReactPlayer from "react-player";
// import { Slider } from "@material-ui/core";
import Slider from '@mui/material/Slider';
const format = (sec) => {
  if (isNaN(sec)) {
    return "00:00";
  }
  const date = new Date(sec * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm.toString().padStart(2, "0")}:${ss}`;
};
function Videoplayer(props) {
  const [state, setState] = React.useState({
    playing: false,
    played: 0,
    seeking: false,
  });

  const { playing, played, seeking } = state;
  const playerRef = React.useRef(null);
  const playerWrapperRef = React.useRef(null);
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";
  const initHandler = (e) => {

  };
  const playHandler = (e) => {
    setState({ ...state, playing: !state.playing });
    props.playingStatus({ playing: !state.playing, buttonClose: true }, e);
  };

  const handleClose = () => {
    props.playingStatus({ playing: false, buttonClose: false });

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
    setState({ ...state, played: parseFloat(newValue / 100) });
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
    setState({ ...state, playing: false});
  };

  React.useEffect(() => {
    const isBrowser = typeof window !== "undefined"
    if(isBrowser)
    {
        window.addEventListener('scroll', handleScroll);
    }  

    return () => {
      if(isBrowser)
      {
        window.removeEventListener('scroll', () => handleScroll);
      }  
    };
  }, []);
  return (
    <>
      <div className="videoPlayer">
        {/* {props.buttonClose && (
          <button onClick={handleClose} className="icon icon-close"></button>
        )} */}

        <div
          className="playerWrapper"
          ref={playerWrapperRef}
          onClick={playHandler}
        >
          <ReactPlayer
            width="100%"
            onEnded={handelPlayDone}
            progressInterval={100}
            ref={playerRef}
            url={props.srcUrl}
            onReady={initHandler}
            playing={playing}
            onProgress={handelProgress}
          />
        </div>
        <div className="controls">
          <button className="action-btn" onClick={playHandler}>
            <span className={playing ? "hide" : ""}>
              <span className="cm-btn-watch">
                <span className="text">watch</span>
                <span className="icon icon-Play-button"></span>
              </span>
            </span>
            
            <span className={!playing ? "hide" : ""}>
              <span className="icon icon-pause"></span>
            </span>
          </button>
          <div className="timer-slider">
            <span className="video_time">{format(currentTime)}</span>
            <Slider
              min={0}
              max={100}
              onChange={handelSeekChange}
              onMouseDown={handelSeekMouseDown}
              onChangeCommitted={handelSeekMouseUp}
              defaultValue={0}
              value={played * 100}
            />
            <span className="video_length">{format(duration)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videoplayer;
