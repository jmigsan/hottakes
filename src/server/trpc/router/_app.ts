// src/server/trpc/router/_app.ts
import { router } from '../trpc';
import { postRouter } from './post';
import { b2Router } from './b2';
import { imageRouter } from './image';

export const appRouter = router({
  post: postRouter,
  b2: b2Router,
  image: imageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
