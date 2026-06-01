import { useEffect } from "react";

import { userApi } from "../../../shared/api/user.api";

import { useAuthStore } from "../store/auth.store";

export const useAuthInitializer = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const setAuth = useAuthStore((s) => s.setAuth);
  const clear = useAuthStore((s) => s.clear);

  useEffect(() => {
    const init = async () => {
      try {
        const user = await userApi.me();

        setUser(user);
        setAuth(true);
      } catch {
        clear();
      }
    };

    init();
  }, []);
};