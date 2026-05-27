import { useState } from "react";

import { userApi } from "../../../shared/api/user.api";

import { useAuthStore } from "../store/auth.store";
import { useAuthModalStore } from "../store/auth.modal.store";

export const RegisterModal = () => {
  const { open, closeModal, view } = useAuthModalStore();

  const setUser = useAuthStore((state) => state.setUser);
  const setAuth = useAuthStore((state) => state.setAuth);
  const setError = useAuthStore((state) => state.setError);

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open || view !== "register") return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. REGISTER
      await userApi.register({
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        celular: form.celular || null,
        password: form.password,
      });

      // 2. LOGIN AUTOMÁTICO
      await userApi.login(form.email, form.password);

      // 3. TRAER USUARIO
      const user = await userApi.me();

      setUser(user);
      setAuth(true);

      closeModal();
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
        "Error al registrarse"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md bg-surface rounded-2xl p-6 shadow-warm">

        <h2 className="text-xl font-bold mb-4">
          Crear cuenta
        </h2>

        <div className="space-y-3">

          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full p-3 rounded-lg bg-surface-container"
          />

          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            className="w-full p-3 rounded-lg bg-surface-container"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-surface-container"
          />

          <input
            type="text"
            name="celular"
            value={form.celular}
            onChange={handleChange}
            placeholder="Celular (opcional)"
            className="w-full p-3 rounded-lg bg-surface-container"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full p-3 rounded-lg bg-surface-container"
          />

        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="mt-4 w-full bg-primary text-on-primary py-3 rounded-lg"
        >
          {loading ? "Creando cuenta..." : "Registrarse"}
        </button>

        <button
          onClick={closeModal}
          className="mt-3 w-full text-sm text-on-surface-variant"
        >
          Cerrar
        </button>

        <div className="mt-4 text-center">

  <p className="text-sm text-on-surface-variant">
    ¿Ya tenés cuenta?
  </p>

  <button
    onClick={() => useAuthModalStore.getState().openLogin()}
    className="text-primary font-semibold hover:underline"
  >
    Iniciá sesión
  </button>

</div>
      </div>
      

    </div>
  );
};