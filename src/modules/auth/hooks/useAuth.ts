import { userApi } from "../../../shared/api/user.api";

import { useAuthStore } from "../store/auth.store";

import type { LoginCredentials } from "../types/User";

import { useCartStore } from "../../cart/store/cart.store";

export const useAuth = () => {
  const {
    setUser,
    setAuth,
    setLoading,
    setError,
    clear,
  } = useAuthStore();

  const clearCart =
    useCartStore.getState().clearCart;

  const login = async (
    credentials: LoginCredentials
  ) => {
    setLoading(true);
    setError(null);

    try {
      // LOGIN
      await userApi.login(
        credentials.email,
        credentials.password
      );

      // TRAER USUARIO
      const user = await userApi.me();

      // LIMPIAR CARRITO ANTERIOR
      clearCart();

      // SET AUTH
      setUser(user);
      setAuth(true);

      return true;
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
        "Error login"
      );

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
      // LIMPIA CARRITO
      clearCart();

      // LIMPIA AUTH
      clear();
    }
  };

  return {
    login,
    logout,
  };
};