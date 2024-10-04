import React, { useEffect, useRef, useState } from 'react';

const YouTubeShortPlayer = ({ videoId }) => {
  const playerRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    // Load the IFrame Player API code asynchronously
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = initializePlayer;

    // Cleanup function
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, [videoId]);

  const initializePlayer = () => {
    console.log('Initializing player');
    if (!playerRef.current) return;

    new window.YT.Player(playerRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: videoId, // This is needed for looping
        controls: 1,
        rel: 0,
        playsinline: 1, // This helps with mobile playback
        mute: 0, // Start muted to ensure autoplay works
      },
      events: {
        onReady: (event) => {
          console.log('Player is ready');
          setIsPlayerReady(true);
          // Attempt to play video
          attemptAutoplay(event.target);
        },
        onStateChange: (event) => {
          console.log('Player state changed:', event.data);
          if (event.data === window.YT.PlayerState.PLAYING) {
            console.log('Video is playing');
          }
        },
        onError: (event) => {
          console.error('Player error:', event.data);
        },
      },
    });
  };

  const attemptAutoplay = (player) => {
    player.playVideo().then(() => {
      console.log('Autoplay started successfully');
    }).catch((error) => {
      console.error('Autoplay failed:', error);
      // If autoplay fails, we can show a play button or message to the user
      // For now, we'll just log the error
    });
  };

  return (
    <div className="w-full">
      <div
        ref={playerRef}
        className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center"
      >
        {!isPlayerReady && <p>Loading YouTube player...</p>}
      </div>
    </div>
  );
};

export default YouTubeShortPlayer;