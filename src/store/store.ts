import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
import projectSlice from "../store/projectSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectSlice,
  },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;