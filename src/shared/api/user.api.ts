import type {
  LoginResponse,
  RegisterRequest,
  UsuarioReadWithRoles,
} from "../../modules/auth/types/User";

import { http } from "./http";

// ─────────────────────────────────────────────
// AUTH API
// ─────────────────────────────────────────────

export const userApi = {
  // Registro de usuario
  register: async (data: RegisterRequest): Promise<UsuarioReadWithRoles> => {
    const res = await http.post("/api/v1/auth/register", data);
    return res.data;
  },

  // Login
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const res = await http.post("/api/v1/auth/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });

    return res.data;
  },

  // Usuario actual
  me: async (): Promise<UsuarioReadWithRoles> => {
    const res = await http.get("/api/v1/auth/me", {
      withCredentials: true,
    });

    return res.data;
  },

  // Refresh token
  refresh: async (refreshToken: string) => {
    const res = await http.post("/api/v1/auth/refresh", {
      refresh_token: refreshToken,
    });

    return res.data;
  },

  // Logout
  logout: async () => {
    const res = await http.post(
      "/api/v1/auth/logout",
      {},
      { withCredentials: true }
    );

    return res.data;
  },
};