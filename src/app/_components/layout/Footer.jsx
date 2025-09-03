import { Text, Flex, Box, Link } from '@chakra-ui/react';
import SocialIcons from '../ui/SocialIcons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';

export default function Footer() {
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      minWidth="380px"
      p={8}
      position="fixed"
      w="100%"
      bottom={0}
      textColor="earth.200"
      zIndex={1000}
      fontSize="sm"
      justifyContent="space-between"
      alignItems="center"
      gap={8}
      bgColor={{ base: 'grisMetal.900', md: 'transparent' }}
    >
      <Text width="144px">by @anabeeella</Text>
      <Box
        cursor="pointer"
        onClick={onOpen}
        opacity={1}
        _hover={{
          textDecoration: 'none',
          color: 'earth.100',
        }}
      >
        <Text>About this site</Text>
      </Box>

      <Modal isOpen={isModalOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />
        <ModalContent
          bg="grisMetal.900"
          border="1px"
          borderColor="whiteAlpha.400"
          backdropFilter="blur(10px)"
          className="transform transition-all duration-300"
        >
          <ModalHeader className="text-earth-400 font-bold flex items-center gap-2">
            <FaInfoCircle className="mr-2" />
            About this site
          </ModalHeader>
          <ModalCloseButton color="earth.400" />
          <ModalBody pb={6}>
            <Text className="text-earth-300 text-md leading-relaxed">
              This portfolio is a living project — a space where I share my
              work, my process, and my approach to building products end-to-end.
              It’s always under construction, evolving as I learn, test, and
              create new things. The site is built with React, using a mix of
              Chakra UI and Tailwind CSS for the design system. It’s currently
              hosted on Netlify, soon to be migrated to a custom domain.
              <br />
              <br />
              Source code:{' '}
              <Link
                href="https://github.com/anabeeella/portfolio"
                target="_blank"
                className="text-earth-400 underline"
              >
                GitHub
              </Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <SocialIcons width="144px" size={16} color="earth.400" gap={4} />
    </Flex>
  );
}
