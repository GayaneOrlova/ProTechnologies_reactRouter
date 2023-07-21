// // import generateRandomID from "../utils/generateRandomID";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  email: string;
  access: string;
  isAuth: boolean
};

export type AuthPayload = {
  email: string;
  access: string;
};

const initialState: AuthState = {
  email: '',
  access: '',
  isAuth: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  
  reducers: {
    login(state, action: PayloadAction<AuthPayload>) {
      state.email = action.payload.email
      state.access = action.payload.access
      state.isAuth = Boolean(action.payload.access)
    },
  },
});

// export const {
//   setUser,
// } = authSlice.actions;

export default authSlice.reducer;

