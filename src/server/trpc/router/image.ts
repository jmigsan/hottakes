import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const imageRouter = router({
  imageToDB: protectedProcedure
    .input(
      z.object({
        imageKey: z.string(),
        // userId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.image.create({
        data: {
          imageKey: input.imageKey,
          userId: ctx.session.user.id,
        },
      });
    }),
  // getImages: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.image.findMany({});
  // }),
  getMyImages: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.image.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  delImageFromDB: protectedProcedure
    .input(
      z.object({
        imageKey: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.image.delete({
        where: {
          imageKey: input.imageKey,
        },
      });
    }),
});
