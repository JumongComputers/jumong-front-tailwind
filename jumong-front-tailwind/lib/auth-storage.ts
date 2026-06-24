import Cookies from "js-cookie";
import { AuthUser } from "@/store/slices/authSlice";

const COOKIE_NAME = "user";

export const saveUser = (user: AuthUser) => {
  Cookies.set(COOKIE_NAME, JSON.stringify(user), {
    expires: 7,
    sameSite: "strict",
  });
};

export const getUser = (): AuthUser | null => {
  const data = Cookies.get(COOKIE_NAME);

  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const removeUser = () => {
  Cookies.remove(COOKIE_NAME);
};