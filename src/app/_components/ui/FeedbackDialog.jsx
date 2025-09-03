'use client';

import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  Textarea,
  useToast,
  VStack,
  Text,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { FaComments } from 'react-icons/fa';

export default function FeedbackDialog({ isOpen, onClose }) {
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Aquí iría la lógica para enviar el feedback
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
      toast({
        title: 'Feedback enviado',
        description: 'Gracias por tu feedback!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setFeedback('');
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo enviar el feedback. Intenta de nuevo.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />
      <ModalContent
        className="notes-container"
        border="1px solid"
        borderColor="earth.300"
        borderRadius="0"
      >
        <ModalHeader className="inner-content">
          <VStack align="start" spacing={2} color="earth.200">
            <Heading fontSize="2xl" fontFamily="mono">
              <Icon as={FaComments} />
              Feedback
            </Heading>
            <Text fontSize="sm" fontWeight="normal" fontFamily="mono">
              Would you like to send me a feedback or a suggestion to improve
              the website? It'll be very helpful for me.
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody className="inner-content">
          <VStack>
            <FormControl>
              <Textarea
                border="none"
                _focus={{
                  border: 'none',
                }}
                _focusVisible={{
                  border: 'none',
                }}
                value={feedback}
                onChange={e => {
                  setFeedback(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
                resize="none"
                overflow="hidden"
                minH="100px"
                className="font-mono"
                padding="0"
                color="earth.100"
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter className="inner-content">
          <Button variant="solid">Enviar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
