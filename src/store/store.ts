import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectSlice,
  },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;