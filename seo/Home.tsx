import { NextSeo } from 'next-seo';
import React from 'react';

const SEOHome = () => {
  return (
    <NextSeo
      title="Click Away"
      description="Deals Just a click away"
      canonical="https://www.piyushmehta.com/"
      openGraph={{
        url: 'https://click-away.piyushmehta.com/',
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
  );
};

export default SEOHome;
