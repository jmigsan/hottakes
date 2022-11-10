import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';
import { nanoid } from '../../common/nanoid';
import { b2 } from '../../common/b2';

export const b2Router = router({
  getSignedPut: protectedProcedure
    .input(
      z.object({
        fileType: z.string(),
        // userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // authorisation begin
      if (!ctx.session.user.id) {
        throw new Error('please sign in');
      }

      // if (ctx.session.user.id !== input.userId) {
      //   throw new Error('unauthorised');
      // }
      // authorisation end

      const fileId = nanoid();
      const fileExtension = input.fileType.split('%2F')[1];
      const key = `${fileId}.${fileExtension}`;

      const b2Params = {
        Bucket: process.env.BB_BUCKET_NAME,
        Key: key,
        Expires: 60,
        ContentType: `image/${fileExtension}`,
      };

      const uploadUrl = await b2.getSignedUrl('putObject', b2Params);

      return { key, uploadUrl };
    }),
});
