import {
  Box,
  BoxProps,
  Flex,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

export interface CardProps extends BoxProps {
  isPopular?: boolean;
}

export const Card: React.FC<CardProps> = (props) => {
  const { children, isPopular, ...rest } = props;
  return (
    <Box
      position="relative"
      px="6"
      pb="6"
      pt="16"
      overflow="hidden"
      bg={mode('white', 'gray.700')}
      shadow="lg"
      maxW="md"
      width="100%"
      {...rest}
    >
      {isPopular && (
        <Flex
          bg={mode('teal.500', 'teal.200')}
          position="absolute"
          right={-20}
          top={6}
          width="240px"
          transform="rotate(45deg)"
          py={2}
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wider"
            color={mode('white', 'gray.800')}
          >
            Popular
          </Text>
        </Flex>
      )}
      {children}
    </Box>
  );
};
