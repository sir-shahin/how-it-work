import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export function VideoJS (props?: object) {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;

  React.useEffect(() => {

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
      <style jsx global>{`
        @media (min-width:760px){
          .video-js .vjs-tech, video-js{
            border-radius: 14px;
          }
        }
        
        .video-js .vjs-big-play-button {
          width: 2.2em;
          height: 2.2em;
          margin-left: -1em;
          border: none;
          transform: rotate(45deg);
          line-height: 2.5em;
        }
        .video-js .vjs-big-play-button .vjs-icon-placeholder:before{
          transform: rotate(-45deg);
          content: url(/play-icon.svg);
        }
      `}</style>
    </div>
  );
}

export default VideoJS;