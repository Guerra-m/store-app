import { useState } from "react";
import { useAuthModalStore } from "../store/auth.modal.store";
import { userApi } from "../../../shared/api/user.api";
import { useAuthStore } from "../store/auth.store";

export const AuthModal = () => {
  const {
  open,
  view,
  message,
  closeModal,
  openRegister,
} = useAuthModalStore();

  const setUser = useAuthStore((state) => state.setUser);
  const setAuth = useAuthStore((state) => state.setAuth);
  const setError = useAuthStore((state) => state.setError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open || view !== "login") return null;

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {

      await userApi.login(email, password);

      const user = await userApi.me();

      setUser(user);
      setAuth(true);


      closeModal();
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-surface rounded-2xl p-6 shadow-warm">

        <h2 className="text-xl font-bold mb-4">
          Iniciar sesión
        </h2>

        {message && (
          <p className="mb-3 text-sm text-on-surface-variant">
            {message}
          </p>
        )}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 rounded-lg bg-surface-container"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-surface-container"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-primary text-on-primary py-3 rounded-lg cursor-pointer"
        >
          {loading ? "Ingresando..." : "Entrar"}
        </button>

        <button
          onClick={closeModal}
          className="mt-3 w-full text-sm text-on-surface-variant cursor-pointer"
        >
          Cerrar
        </button>
        <div className="mt-4 text-center">

  <p className="text-sm text-on-surface-variant">
    ¿No tenés cuenta?
  </p>

  <button
    onClick={() => openRegister()}
    className="text-primary font-semibold hover:underline cursor-pointer"
  >
    Registrate
  </button>

</div>
      </div>
    </div>
  );
};