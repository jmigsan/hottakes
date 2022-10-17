import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Stack,
} from '@chakra-ui/react';

const CreatePost = () => {
  return (
    <Box py={'2'}>
      <Stack>
        <Input w={'100%'} />
        <Button w={'100%'}>Post</Button>
      </Stack>
    </Box>
  );
};
export default CreatePost;
