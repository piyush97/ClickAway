import React from 'react';
import Header from '../../component/header';
import Hero from '../../component/hero';

const HeroContainer = () => {
  return (
    <>
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
    </>
  );
};

export default HeroContainer;
