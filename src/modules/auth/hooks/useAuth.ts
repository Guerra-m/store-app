import { userApi } from "../../../shared/api/user.api";
import { useAuthStore } from "../store/auth.store";
import type {
  LoginCredentials,
  RegisterRequest,
  UsuarioReadWithRoles,
} from "../types/User";

export const useAuth = () => {
  const { setUser, setAuth, setLoading, setError, clear } = useAuthStore();

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      // login (cookie HttpOnly en backend)
      await userApi.login(credentials.email, credentials.password);

      // traer usuario real
      const user: UsuarioReadWithRoles = await userApi.me();

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

  const register = async (data: RegisterRequest) => {
    setLoading(true);
    setError(null);

    try {
      await userApi.register(data);
      return true;
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Error register");
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

  const getMe = async () => {
    try {
      const user: UsuarioReadWithRoles = await userApi.me();
      setUser(user);
      setAuth(true);
    } catch {
      clear();
    }
  };

  return {
    login,
    register,
    logout,
    getMe,
  };
};