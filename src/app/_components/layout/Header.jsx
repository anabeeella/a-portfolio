import React from 'react';
import { Box, Flex, Link, Text, Icon, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaSun, FaChevronRight } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // Get breadcrumb items
  const getBreadcrumbItems = () => {
    const pathParts = pathname.split('/').filter(Boolean);
    const items = [];

    // If we're at /home, just show Home
    if (pathname === '/home') {
      items.push({
        label: 'Home',
        href: '/home',
        isActive: true,
      });
      return items;
    }

    // Always start with Home
    items.push({
      label: 'Home',
      href: '/home',
      isActive: false,
    });

    // Build path progressively
    let currentPath = '';
    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;
      items.push({
        label: part, // Show only the part name, not the full path
        href: currentPath,
        isActive: pathname === currentPath,
      });
    });

    return items;
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
          <HStack spacing={2} className="font-mono text-sm">
            {getBreadcrumbItems().map((item, index) => (
              <React.Fragment key={item.href}>
                {index > 0 && (
                  <Icon as={FaChevronRight} w={3} h={3} color="earth.400" />
                )}
                <Link
                  as={NextLink}
                  href={item.href}
                  color={item.isActive ? 'earth.100' : 'earth.300'}
                  _hover={{
                    textDecoration: 'none',
                    color: 'earth.100',
                  }}
                  fontWeight={item.isActive ? 'bold' : 'normal'}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </HStack>
        </Box>
        <Box>
          <Link
            as={NextLink}
            href="#"
            opacity={0.5}
            _hover={{
              textDecoration: 'none',
              color: 'earth.100',
            }}
          >
            <Icon w={6} h={6} as={FaSun} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
