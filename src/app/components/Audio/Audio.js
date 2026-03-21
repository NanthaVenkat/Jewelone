"use client"
import React, { useRef, useEffect } from 'react';

const AudioSection = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(error => {
        // Handle the error, e.g., log it
        console.error('Failed to play audio:', error.message);
      });
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='container-fluid position-relative'>
      {/* Hidden button with transparent styles */}
      <button
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
        }}
      />
      <audio ref={audioRef} style={{ display: 'none' }} autoPlay>
        <source src="audio.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default AudioSection;

