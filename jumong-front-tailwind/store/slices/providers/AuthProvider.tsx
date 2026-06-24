"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import { getUser } from "@/lib/auth-storage";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = getUser();

    if (user) {
      dispatch(login(user));
    }
  }, [dispatch]);

  return <>{children}</>;
}