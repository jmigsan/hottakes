import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const postRouter = router({
  displayPosts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
  displayPost: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findFirst({
        where: { id: input.id },
      });
    }),
  createPost: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        body: z.string(),
        authorId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      // authorisation begin
      if (!ctx.session.user.id) {
        throw new Error('please sign in');
      }
      if (ctx.session.user.id === input.authorId) {
        throw new Error('unauthorised');
      }
      // authorisation end

      return ctx.prisma.post.create({
        data: {
          title: input.title,
          body: input.body,
          authorId: input.authorId,
        },
      });
    }),
});
