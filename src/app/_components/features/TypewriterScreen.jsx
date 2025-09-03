'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Icon, IconButton } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function TypewriterScreen({ content }) {
  const [showAll, setShowAll] = useState(false);
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const scrollRef = useRef(null);
  const audioRef = useRef(null);
  const router = useRouter();

  // Inicializar el audio
  useEffect(() => {
    audioRef.current = new Audio('/sounds/typing.mp3');
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // Mostrar el botón Skip después de 10 segundos
  useEffect(() => {
    if (!hasStarted) return;
    const timer = setTimeout(() => setShowSkip(true), 10000);
    return () => clearTimeout(timer);
  }, [hasStarted]);

  // Typewriter effect y control de audio
  useEffect(() => {
    if (!hasStarted) return;

    if (showAll) {
      setDisplayedContent(content);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      return;
    }

    if (currentIndex < content.length) {
      // Iniciar el sonido si es el primer carácter y no está muteado
      if (currentIndex === 0 && audioRef.current && !isMuted) {
        audioRef.current
          .play()
          .catch(error => console.log('Audio autoplay was prevented'));
      }

      const timer = setTimeout(() => {
        setDisplayedContent(content.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => {
        clearTimeout(timer);
        // Si llegamos al final, detener el sonido
        if (currentIndex === content.length - 1 && audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };
    }
  }, [currentIndex, content, showAll, hasStarted, isMuted]);

  // Autoscroll effect (medium speed)
  useEffect(() => {
    if (!hasStarted) return;

    const container = scrollRef.current;
    if (!container) return;
    let animationFrame;
    let lastScrollTop = container.scrollTop;
    let lastTimestamp = null;
    const speed = 0.7; // px per ms (medium speed)
    function step(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      // Only scroll if not at the bottom
      if (
        container.scrollTop + container.clientHeight <
        container.scrollHeight
      ) {
        container.scrollTop = container.scrollTop + speed * elapsed;
        animationFrame = requestAnimationFrame(step);
      }
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [displayedContent, hasStarted]);

  const isCompleted = showAll || displayedContent.length === content.length;

  useEffect(() => {
    if (scrollRef.current && !isCompleted) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [displayedContent, isCompleted]);

  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setShowAll(true);
  };

  const handleStart = async () => {
    try {
      if (!isMuted) {
        await audioRef.current.play();
      }
      setHasStarted(true);
    } catch (error) {
      console.log('Audio play failed:', error);
      // Iniciamos aunque el audio falle
      setHasStarted(true);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current
          .play()
          .catch(error => console.log('Audio play failed'));
      } else {
        audioRef.current.pause();
      }
    }
    setIsMuted(!isMuted);
  };

  const handleContinue = () => {
    try {
      router.push('/home');
    } catch (error) {
      console.error('Navigation failed:', error);
      // Fallback to window.location if router.push fails
      window.location.href = '/home';
    }
  };

  return (
    <>
      {hasStarted && (
        <Box
          className="flex justify-center items-center m-2"
          role="toolbar"
          aria-label="Audio controls"
        >
          <IconButton
            variant="ghost"
            icon={<Icon as={isMuted ? FaVolumeMute : FaVolumeUp} />}
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            aria-pressed={isMuted}
          />
        </Box>
      )}
      <Box
        ref={scrollRef}
        className="relative h-[500px] overflow-y-auto shadow-xl notes-container"
        role="region"
        aria-label="Typewriter content"
      >
        {!hasStarted ? (
          <Box className="h-full flex items-center justify-center">
            <Button
              variant="outline"
              onClick={handleStart}
              aria-label="Start the typewriter animation"
              className="font-mono"
            >
              Open Archive
            </Button>
          </Box>
        ) : (
          <Box
            className="prose prose-invert font-mono prose-sm md:prose-md max-w-none px-4 py-10 md:p-8"
            aria-live="polite"
            aria-busy={!isCompleted}
          >
            <ReactMarkdown>{displayedContent}</ReactMarkdown>
          </Box>
        )}
      </Box>
      <Box className="mt-6" style={{ minHeight: 56 }}>
        <Box className="flex justify-center items-center">
          {!isCompleted && showSkip && (
            <Button
              variant="ghost"
              onClick={handleSkip}
              aria-label="Skip typewriter animation"
            >
              Skip
            </Button>
          )}
        </Box>
        <Box>
          {isCompleted && (
            <Box className="flex justify-center items-center">
              <Button
                variant="solid"
                onClick={handleContinue}
                aria-label="Continue to main portfolio"
              >
                Continue
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
