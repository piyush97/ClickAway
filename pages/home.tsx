import { Container } from '@chakra-ui/layout';
import React from 'react';
import Header from '../component/header';
import Hero from '../component/hero';

export default function Home() {
  return (
    <>
      <header>
        <title>Click Away | Deals just a click away</title>
      </header>
      <div style={{ backgroundColor: '#38B2AC', height: '0.4rem' }} />
      <Container maxW="container.xl">
        <Header />
        <Hero
          title={
            <>
              Best Deals in Town just a <i>Click Away</i>
            </>
          }
          subtitle="Join the membership and avail discounts on everything you every buy for lifetime"
          image="https://source.unsplash.com/collection/404339/800x600"
          ctaText="Subscribe"
          ctaLink="/signup"
        />
      </Container>
    </>
  );
}
