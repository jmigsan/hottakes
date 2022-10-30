import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const imageRouter = router({
  imageToDB: protectedProcedure
    .input(
      z.object({
        imageKey: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.image.create({
        data: {
          imageKey: input.imageKey,
        },
      });
    }),
  getImages: publicProcedure.query(({ ctx }) => {
    ctx.prisma.image.findMany({});
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
