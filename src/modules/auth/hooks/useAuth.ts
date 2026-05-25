import { userApi } from "../../../shared/api/user.api";
import { useAuthStore } from "../store/auth.store";
import type { LoginCredentials } from "../types/User";

export const useAuth = () => {
  const { setUser, setAuth, setLoading, setError, clear } =
    useAuthStore();

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      // 1. LOGIN → backend setea cookie
      await userApi.login(credentials.email, credentials.password);

      // 2. GET USER → usa cookie
      const user = await userApi.me();

      setUser(user);
      setAuth(true);

      return true;
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Error login");
      clear();
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await userApi.logout();
    } finally {
      clear();
    }
  };

  return {
    login,
    logout,
  };
};