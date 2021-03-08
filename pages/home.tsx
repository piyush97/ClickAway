import { Container } from '@chakra-ui/layout';
import React from 'react';
import Header from '../component/header';
import Hero from '../component/hero';

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: '#38B2AC', height: '0.4rem' }} />
      <Container maxW="container.xl">
        <Header />
        <Hero />
      </Container>
    </>
  );
}
