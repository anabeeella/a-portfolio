'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Box,
  Link,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  VStack,
  useColorModeValue,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaLaptopCode, FaAddressCard, FaComment } from 'react-icons/fa';
import IDcard from '../ui/IDcard';
import NotificationDialog from '../ui/NotificationDialog';
import useSound from '@/hooks/useSound';
import FeedbackDialog from '../ui/FeedbackDialog';

import notes from '@/app/_content/notes';

const Location = ({ notifications = [] }) => {
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isBellEnabled, setIsBellEnabled] = useState(false);
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const hoverColor = useColorModeValue('earth.300', 'earth.300');
  const observerRef = useRef(null);
  const { play: playBell, load: loadBell } = useSound('/sounds/bell1.mp3');
  const isMobile = useBreakpointValue({ base: true, xl: false });
  const pathname = usePathname();

  useEffect(() => {
    loadBell();
  }, [loadBell]);

  useEffect(() => {
    const sectionNotes = notes[pathname.split('/')[1]] || [];

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsBellEnabled(true);
            setIsBellRinging(true);
            // Solo reproducir el sonido si no estamos en móvil
            if (!isMobile) {
              playBell();
            }
            // Stop ringing after animation
            setTimeout(() => {
              setIsBellRinging(false);
            }, 1000);
          } else {
            setIsBellEnabled(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe elements based on section notes
    sectionNotes.forEach(note => {
      const element = document.getElementById(note.id);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname, playBell, isMobile]);

  const handleOpenModal = (e, type) => {
    e.preventDefault();

    // Only allow ID modal to open when on /about page
    if (type === 'id' && pathname !== '/about') {
      return;
    }

    if (type === 'id') {
      onOpen();
    } else if (type === 'bell' && isBellEnabled) {
      setIsNotificationModalOpen(true);
    }
  };

  const handleOpenFeedbackModal = () => {
    setIsFeedbackModalOpen(true);
  };

  return (
    <Box
      hideBelow="lg"
      position="fixed"
      right={8}
      top="50%"
      transform="translateY(-50%)"
      zIndex={10}
      pointerEvents="none"
    >
      <VStack className="flex items-end" gap={8} pointerEvents="auto">
        <Tooltip
          bg="blackAlpha.300"
          color="earth.200"
          label="Go to ID Archive to see this content"
          isDisabled={pathname === '/about'}
          placement="right"
        >
          <Link
            onClick={e => handleOpenModal(e, 'id')}
            cursor={pathname === '/about' ? 'pointer' : 'not-allowed'}
            opacity={pathname === '/about' ? 1 : 0.5}
            _hover={{
              textDecoration: 'none',
              color: pathname === '/about' ? hoverColor : 'inherit',
            }}
            className={pathname === '/about' ? 'bell-ring' : ''}
          >
            <Icon w={6} h={6} as={FaAddressCard} />
          </Link>
        </Tooltip>
        <Tooltip
          bg="blackAlpha.300"
          color="earth.200"
          label="There are no notes for this section."
          isDisabled={isBellEnabled}
          placement="right"
        >
          <Link
            onClick={e => handleOpenModal(e, 'bell')}
            cursor={isBellEnabled ? 'pointer' : 'not-allowed'}
            opacity={isBellEnabled ? 1 : 0.5}
            _hover={{
              textDecoration: 'none',
              color: isBellEnabled ? hoverColor : 'inherit',
            }}
            className={isBellRinging ? 'bell-ring' : ''}
            style={{ transformOrigin: 'top' }}
            position="relative"
          >
            <Icon w={6} h={6} as={FaLaptopCode} />
            {isBellEnabled && (
              <Box
                position="absolute"
                top="-2px"
                right="-2px"
                w="8px"
                h="8px"
                borderRadius="full"
                bg="red.500"
                boxShadow="0 0 4px rgba(255, 0, 0, 0.5)"
              />
            )}
          </Link>
        </Tooltip>
        <Tooltip
          bg="blackAlpha.300"
          color="earth.200"
          label="Feedback temporarily disabled"
          placement="right"
        >
          <Link
            onClick={e => e.preventDefault()}
            cursor="not-allowed"
            opacity={0.3}
            _hover={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Icon w={6} h={6} as={FaComment} />
          </Link>
        </Tooltip>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />
        <ModalContent
          backgroundColor="transparent"
          border="none"
          boxShadow="none"
        >
          <IDcard />
        </ModalContent>
      </Modal>
      <NotificationDialog
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        notifications={notifications}
      />
      <FeedbackDialog
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />

      <style jsx global>{`
        @keyframes bellRing {
          0% {
            transform: rotate(0);
          }
          20% {
            transform: translateY(-5px);
          }
          40% {
            transform: translateY(5px);
          }
          60% {
            transform: translateY(-5px);
          }
          80% {
            transform: translateY(5px);
          }
          100% {
            transform: rotate(0);
          }
        }
        .bell-ring {
          animation: bellRing 0.8s ease-in-out;
        }
      `}</style>
    </Box>
  );
};

export default Location;
