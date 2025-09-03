'use client';

import { useRef, useCallback } from 'react';

const useSound = soundFile => {
  const audioRef = useRef(null);

  const play = useCallback(() => {
    if (audioRef.current && typeof window !== 'undefined') {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log('Error playing sound:', error);
      });
    }
  }, []);

  const load = useCallback(() => {
    if (!audioRef.current && typeof window !== 'undefined') {
      audioRef.current = new Audio(soundFile);
      audioRef.current.preload = 'auto';
    }
  }, [soundFile]);

  return { play, load };
};

export default useSound;
