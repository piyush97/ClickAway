import { Container } from '@chakra-ui/layout';
import React from 'react';
import { Footer } from '../component/Footer';
import HeroContainer from '../containers/Hero';
import { PricingContainer } from '../containers/Pricing';
import SEOHome from '../seo/Home';

export default function Home() {
  return (
    <>
      <SEOHome />
      <div style={{ backgroundColor: '#38B2AC', height: '0.4rem' }} />
      <Container maxW="container.xl">
        <HeroContainer />
        <PricingContainer />
        <Footer />
      </Container>
    </>
  );
}
