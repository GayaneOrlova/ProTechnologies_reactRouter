import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Store/userSlice';
import projectSlice from "./projectSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    project: projectSlice,
  },
});




export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;