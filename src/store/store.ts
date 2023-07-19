import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../store/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;