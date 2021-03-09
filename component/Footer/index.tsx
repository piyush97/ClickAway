import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/Image';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py="6">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        align="center"
      >
        <a
          aria-current="page"
          aria-label="Back to Home page"
          href="/"
          rel="home"
        >
          <Image height="40" width="40" src="/logo.png" />
        </a>
        <Stack
          my={{ base: '6', md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          marginStart={{ md: '8' }}
          fontSize="sm"
          spacing={{ base: '2', md: '8' }}
          textAlign={{ base: 'center', md: 'start' }}
        >
          <Text>&copy; {new Date().getFullYear()} Click Away</Text>
          <Link>Privacy</Link>
          <Link>Terms and Conditions</Link>
        </Stack>
        <ButtonGroup
          marginStart={{ md: 'auto' }}
          color="gray.600"
          variant="ghost"
        >
          <IconButton
            as="a"
            href="https://linkedin.com/in/piyush24"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
          />
          <IconButton
            as="a"
            href="https://github.com/piyush97"
            aria-label="GitHub"
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/PiyushMehtas"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
