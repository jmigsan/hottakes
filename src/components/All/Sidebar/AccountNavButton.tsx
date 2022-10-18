import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

const AccountNavButton = () => {
  const { data: sessionData } = useSession();

  return (
    <Flex alignItems={'center'}>
      <Menu>
        <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
          {sessionData ? (
            <HStack>
              <Avatar size={'sm'} src={sessionData?.user?.image as string} />
              <Box
                display={{ base: 'none', md: 'flex' }}
                alignItems='flex-start'
                ml='2'
              >
                <Text fontSize='sm'>{sessionData?.user?.name}</Text>
              </Box>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          ) : (
            <Button onClick={() => signOut()}>Sign in</Button>
          )}
        </MenuButton>
        <MenuList
          bg={useColorModeValue('white', 'gray.900')}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <MenuItem onClick={sessionData ? () => signOut() : () => signIn()}>
            {sessionData ? 'Sign out' : 'Sign in'}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default AccountNavButton;
