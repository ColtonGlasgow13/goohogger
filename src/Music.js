import React, { useRef, useEffect } from 'react';

const Music = () => {
  const audioRef = useRef();
  const hasPlayed = useRef(false);

  const handlePlay = () => {
    if (!hasPlayed.current) {
      audioRef.current.play();
      hasPlayed.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener('click', handlePlay);

    return () => {
      window.removeEventListener('click', handlePlay);
    };
  }, []);

  return (
    <audio ref={audioRef} src="/Summer-of-Tomfoolery.mp3" preload="auto" controls loop/>
  );
};

export default Music;
