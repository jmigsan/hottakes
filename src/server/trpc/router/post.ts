import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const postRouter = router({
  displayPosts: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      include: {
        user: true,
      },
    });
  }),
  displayPost: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findFirst({
        where: {
          id: input.id,
        },
        include: {
          user: true,
        },
      });
    }),
  createPost: protectedProcedure
    .input(
      z.object({
        body: z.string(),
        // userId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      // authorisation begin
      // if (!ctx.session.user.id) {
      //   throw new Error('please sign in');
      // }

      // if (ctx.session.user.id !== input.userId) {
      //   throw new Error('unauthorised');
      // }
      // authorisation end

      return ctx.prisma.post.create({
        data: {
          body: input.body,
          userId: ctx.session.user.id,
          // userId: input.userId,
        },
      });
    }),
  deletePost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.delete({
        where: {
          id: input.postId,
        },
      });
    }),
});
