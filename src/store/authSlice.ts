import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../types/userTypes";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload,
    }),
    logout: (state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
    }),
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
