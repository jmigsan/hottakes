import { Box, Button, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

const FloatingButton = () => {
  return (
    <Box position={'absolute'} right={'5'} bottom={'5'}>
      <Button size={'lg'} colorScheme={'red'}>
        <Link href={'/create'}>
          <HStack>
            <Text>Create Post</Text>
            <FiPlus />
          </HStack>
        </Link>
      </Button>
    </Box>
  );
};

export default FloatingButton;
