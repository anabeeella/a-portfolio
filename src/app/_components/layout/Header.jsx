import React from 'react';
import { Box, Flex, Link, Modal, ModalHeader, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';
import sections from '@/app/_config/sections.json';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { isOpen: isModalOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const currentPage = sections.sections.find(section => section.link === pathname) || sections.sections[0];
  
  // Get current section and subsection titles
  const getCurrentTitle = () => {
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length > 1) {
      const section = sections.sections.find(s => s.link === `/${pathParts[0]}`);
      if (section?.subsections) {
        const subsection = section.subsections.find(sub => sub.link === `/${pathParts[1]}`);
        if (subsection) {
          return `${subsection.link}`;
        }
      }
    }
    return currentPage.link;
  };

  return (
    <Box  
      minWidth="380px"
      textColor="earth.200"
      px={8}
      position="fixed"
      w="100%"
      top={0}
      zIndex={1000}
      fontSize="sm"
    >
      <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
        <Box cursor="pointer">
          <Link as={NextLink} href="/home">
            A-Portfolio
          </Link>
        </Box>
        <Box className="hidden md:block">
          <Text className="font-mono">
            {getCurrentTitle()}
          </Text>
        </Box>
        <Box cursor="pointer">
            <Link onClick={onOpen}>About this site</Link>
        </Box>
      </Flex>
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
              This is a personal portfolio website. <br />
              Built with Next.js, Chakra UI, and Tailwind CSS.<br />
              Designed in Figma. Code generated with Cursor. <br />
              Source code: <Link href="https://github.com/anabeeella/portfolio" target="_blank" className="text-earth-400 underline">GitHub</Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}