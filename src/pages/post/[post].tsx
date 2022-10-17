import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data } = trpc.post.displayPost.useQuery({ id: postId as string });

  return (
    <Box>
      <Text size={'xl'}>{data?.title}</Text>
      <Text>{data?.body}</Text>
    </Box>
  );
};
export default Post;
