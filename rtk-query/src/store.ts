import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import { blogApi } from 'pages/blog/blo.service';
import blogReducer from 'pages/blog/blog.slice';

export const store = configureStore(
  {
    reducer:{
      blog: blogReducer,
      [blogApi.reducerPath] : blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
  }
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)