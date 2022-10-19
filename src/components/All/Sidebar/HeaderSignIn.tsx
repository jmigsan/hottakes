import {
  Avatar,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FiChevronDown } from 'react-icons/fi';

const HeaderSignIn = () => {
  const { data: sessionData } = useSession();

  if (!sessionData) {
    return (
      <Box>
        <Button onClick={() => signIn()}>Sign in</Button>
      </Box>
    );
  }

  if (sessionData) {
    return (
      <Menu>
        <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
          <HStack>
            <Avatar size={'sm'} src={sessionData?.user?.image as string} />
            <Text fontSize='sm'>{sessionData?.user?.name}</Text>
            <Box display={{ base: 'none', md: 'flex' }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
    <HStack>
      <Avatar size={'sm'} />
      <Text fontSize='sm'>Loading...</Text>
      <Box display={{ base: 'none', md: 'flex' }}>
        <FiChevronDown />
      </Box>
    </HStack>
  );
};

export default HeaderSignIn;
