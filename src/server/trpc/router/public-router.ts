import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const publicRouter = router({
  getPosts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
