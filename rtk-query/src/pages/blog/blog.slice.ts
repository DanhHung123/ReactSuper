import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Post } from 'types/blog.type'


interface BlogState {
  postId : string
}

const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {
    startEdit: (state,action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    cancelEdit: (state) => {
      state.postId = ''
    }
  }
})

export const { startEdit,cancelEdit } = blogSlice.actions

const blogReducer = blogSlice.reducer

export default blogReducer