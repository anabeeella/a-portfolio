import React from 'react';
import { Link } from '@chakra-ui/react';
import { FaAddressCard } from 'react-icons/fa';

const Layout = () => {
  const pathname = window.location.pathname;
  const hoverColor = 'brown';

  const handleOpenModal = (e, type) => {
    e.preventDefault();
    // Implement the logic to open the modal
  };

  return (
    <Link 
      onClick={(e) => handleOpenModal(e, 'id')} 
      cursor={pathname === '/about' ? "pointer" : "not-allowed"}
      opacity={pathname === '/about' ? 1 : 0.5}
      _hover={{ 
        textDecoration: 'none', 
        color: pathname === '/about' ? hoverColor : 'inherit'
      }}
      title={pathname === '/about' ? '' : 'Go to ID Archive to see this content'}
    >
      <Icon w={6} h={6} as={FaAddressCard}/>
    </Link>
  );
};

export default Layout; 