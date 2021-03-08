import { Container } from '@chakra-ui/layout';
import { NextSeo } from 'next-seo';
import React from 'react';
import HeroContainer from '../containers/Hero';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Click Away"
        description="Deals Just a click away"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'http://click-away.piyushmehta.com/',
          title: 'Click Away',
          description: 'Deals Just a click away',
          images: [
            {
              url: 'https://source.unsplash.com/collection/404339/800x600',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
          site_name: 'Click Away',
        }}
        twitter={{
          handle: '@piyushMehtas',
          site: '@piyushmehta.com',
          cardType: 'summary_large_image',
        }}
      />
      <div style={{ backgroundColor: '#38B2AC', height: '0.4rem' }} />
      <Container maxW="container.xl">
        <HeroContainer />
      </Container>
    </>
  );
}
