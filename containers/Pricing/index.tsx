import {
  Box,
  Button,
  ButtonProps,
  Center,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import * as React from 'react';
import { PricingCard } from '../../component/Card';
import pricing from '../../utils/pricing';

const ActionButton = (props: ButtonProps) => (
  <Button
    colorScheme="teal"
    size="lg"
    w="full"
    fontWeight="extrabold"
    py="8"
    {...props}
  />
);

export const PricingContainer: React.FC = () => {
  return (
    <Box as="section" py="14">
      <Center py="3rem">
        <Heading as="h1" size="3xl">
          Plans
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: '4', lg: '8' }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
      >
        {pricing.map((edge) => (
          <PricingCard
            data={{
              price: edge.price,
              name: edge.plan,
              features: edge.features,
            }}
            isPopular={edge.isPopular}
            icon={edge.icon}
            button={
              <ActionButton variant="outline" borderWidth="2px">
                Buy now
              </ActionButton>
            }
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
