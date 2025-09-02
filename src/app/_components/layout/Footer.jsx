import { Text, Flex } from "@chakra-ui/react";
import SocialIcons from "../ui/SocialIcons";

export default function Footer() {
  const getCurrentDate = () => {
    const now = new Date();
    const options = { year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  };
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
      <Text width='144px'>by @anabeeella</Text>
      <Flex width='144px'justifyContent="center">
        <Text>{getCurrentDate()}</Text>
      </Flex>
      <SocialIcons width='144px' size={16} color="earth.400" gap={4} /> 
    </Flex>
  );
}