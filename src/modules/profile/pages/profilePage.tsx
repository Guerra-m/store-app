import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../auth/store/auth.store";
import { useAuth } from "../../auth/hooks/useAuth";

export const ProfilePage = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  const closeModal = () => {
    navigate(-1);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  // Evita render mientras redirecciona
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeModal}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-md bg-surface rounded-2xl shadow-warm p-6">

        <h2 className="text-xl font-bold mb-4">
          Mi perfil
        </h2>

        <div className="space-y-3 text-sm">

          <div className="bg-surface-container rounded-xl p-3">
            Nombre: {user.nombre} {user.apellido}
          </div>

          <div className="bg-surface-container rounded-xl p-3">
            Email: {user.email}
          </div>

          <div className="bg-surface-container rounded-xl p-3">
            Celular: {user.celular || "No especificado"}
          </div>

          <div className="bg-surface-container rounded-xl p-3">
            Roles: {user.roles.join(", ")}
          </div>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={closeModal}
            className="w-full bg-surface-container py-2 rounded-lg"
          >
            Cerrar
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-lg"
          >
            Cerrar sesión
          </button>

        </div>

      </div>

    </div>
  );
};