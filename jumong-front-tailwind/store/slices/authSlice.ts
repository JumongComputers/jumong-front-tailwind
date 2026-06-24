import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  id?: string;
  email: string;
  role: "ADMIN" | "USER";
  access_token: string;
  refresh_token?: string;
};

type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;