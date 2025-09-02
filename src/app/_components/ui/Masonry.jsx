import { useState, useEffect, useMemo, useRef } from 'react';
import { useTransition, a } from '@react-spring/web';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const handleImageClick = (item) => {
    setSelectedImage(item);
    onOpen();
  };

  const handlePrevious = () => {
    const currentIndex = data.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setSelectedImage(data[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = data.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(data[nextIndex]);
  };

  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-full"
        style={{ height: Math.max(...heights) }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id}
            style={style}
            className="absolute p-[15px] [will-change:transform,width,height,opacity]"
          >
            <div
              onClick={() => handleImageClick(item)}
              className="relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-110 cursor-pointer group"
              style={{
                backgroundColor: '#ffffff',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title || ' - '}
                </p>
              </div>
              <img 
                src={item.image} 
                alt={item.title || 'Gallery image'} 
                className="hidden"
              />
            </div>
          </a.div>
        ))}
      </div>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        size="6xl" 
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay backdropFilter="blur(8px)" bg="blackAlpha.800" />
        <ModalContent 
          bg="transparent" 
          boxShadow="none" 
          position="relative"
          maxW="90vw"
          maxH="90vh"
        >
          <ModalCloseButton 
            color="white" 
            position="absolute" 
            right={2} 
            top={2} 
            zIndex={2}
          />
          <ModalBody p={0} position="relative">
            {selectedImage && (
              <Box
                position="relative"
                width="100%"
                height="90vh"
                backgroundImage={`url(${selectedImage.image})`}
                backgroundSize="contain"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={4}
                  bg="blackAlpha.600"
                  color="white"
                  fontFamily="mono"
                >
                  <p>{selectedImage.title || ' - '}</p>
                </Box>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title || 'Gallery image'} 
                  className="hidden"
                />
              </Box>
            )}
            <IconButton
              icon={<FaChevronLeft />}
              position="absolute"
              left={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrevious}
              aria-label="Previous image"
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
            <IconButton
              icon={<FaChevronRight />}
              position="absolute"
              right={4}
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              aria-label="Next image"
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Masonry;
