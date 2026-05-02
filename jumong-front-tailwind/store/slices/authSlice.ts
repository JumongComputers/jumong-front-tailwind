import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  email: string;
  token: string;
};

type AuthState = {
  user: User | null;
};

const getUserFromStorage = (): User | null => {
  if (typeof window === "undefined") return null;

  try {
    const data = localStorage.getItem("user");
    return data ? (JSON.parse(data) as User) : null;
  } catch {
    return null;
  }
};

const saveUserToStorage = (user: User | null) => {
  if (typeof window === "undefined") return;

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
};

const initialState: AuthState = {
  user: getUserFromStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      saveUserToStorage(action.payload);
    },
    logout: (state) => {
      state.user = null;
      saveUserToStorage(null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;