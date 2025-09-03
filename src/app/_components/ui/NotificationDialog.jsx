'use client';

import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react';
import useSound from '@/app/_hooks/useSound';
import notes from '@/app/_content/notes';
import { usePathname } from 'next/navigation';
import Typewriter from './TypewriterText';

const NotificationDialog = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { play: playNotification, load: loadNotification } = useSound(
    '/sounds/notification.mp3'
  );

  useEffect(() => {
    loadNotification();
  }, [loadNotification]);

  useEffect(() => {
    if (isOpen) {
      playNotification();
    }
  }, [isOpen, playNotification]);

  // Get current section from pathname
  const getCurrentSection = () => {
    const path = pathname.split('/')[1] || 'home';
    return path;
  };

  // Get notes for current section
  const currentSection = getCurrentSection();
  const sectionNotes = notes[currentSection] || [];

  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      motionPreset="slideInRight"
    >
      <ModalOverlay
        border="none"
        backdropFilter="blur(10px)"
        bg="blackAlpha.300"
      />
      <ModalContent
        className="notes-container"
        position="absolute"
        right="2rem"
        top="50%"
        transform="translateY(-50%)"
        border="1px solid"
        borderColor="earth.300"
        borderRadius="0"
      >
        {/* <ModalHeader className="inner-content" marginBottom="3px" >
          <Text className="uppercase" fontFamily="mono" fontSize="lg">
            {sectionNotes.length > 0 ? `${sectionNotes[0].section} Note` : 'No Notes Available'}
          </Text>
          <Text fontSize="xs" fontFamily="mono">
            Author: Anabella Rizzi <br></br>
            Date: {new Date().toLocaleDateString()}
          </Text>
        </ModalHeader> */}
        <ModalBody className="inner-content">
          <VStack spacing={4} align="stretch" py={2}>
            {sectionNotes.map(note => (
              <Box key={note.id}>
                <Typewriter
                  text={note.content}
                  loop={true}
                  cursor={false}
                  speed={30}
                />
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NotificationDialog;
