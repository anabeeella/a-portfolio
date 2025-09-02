import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaBehance } from 'react-icons/fa';
import { Link, HStack } from '@chakra-ui/react';

export default function SocialIcons({ size = 10, gap = 4 }) {
    return (
        <HStack display="flex" gap={gap}>
            <Link href="https://www.linkedin.com/in/anabella-rizzi/" target="_blank" color="earth.300" _hover={{ color: "earth.100" }}>
                <FaLinkedin size={size} />   
            </Link>
            <Link href="https://www.github.com/anabeeella" target="_blank" color="earth.300" _hover={{ color: "earth.100" }}>
                <FaGithub size={size} /> 
            </Link>
            <Link href="https://www.behance.net/anabeeella" target="_blank" color="earth.300" _hover={{ color: "earth.100" }}>
                <FaBehance size={size} />
            </Link>
            <Link href="mailto:anabeeella.r@gmail.com" target="_blank" color="earth.300" _hover={{ color: "earth.100" }}>
                <FaEnvelope size={size} />
            </Link>
            <Link href="https://www.instagram.com/anabeeella" target="_blank" color="earth.300" _hover={{ color: "earth.100" }}>
                <FaInstagram size={size} />
            </Link>
        </HStack>
    );
}
