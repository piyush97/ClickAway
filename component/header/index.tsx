import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import menu from '../../utils/menu';
import ThemeSwitch from '../ThemeSwitch';
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        py={'1rem'}
        {...props}
      >
        <Flex align="center" mr={5}>
          <Image src="./logo.png" alt="logo" width="4rem" height="4rem" />
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'} pl="2">
            Click Away
          </Heading>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <svg
            width="12px"
            color="theme"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          {menu.map((edge) => (
            <MenuItems key={edge.key}>{edge.name}</MenuItems>
          ))}
        </Box>
        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
          mr="2rem"
        >
          {' '}
          <ThemeSwitch />
        </Box>
        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Button bg="transparent" border="1px">
            Subscribe
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
