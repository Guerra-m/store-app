import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../auth/store/auth.store";
import { useAuth } from "../../auth/hooks/useAuth";
import { useToastStore } from "../../../shared/store/toast.store";
import { DireccionesTab } from "../../addresses/components/DireccionesTab";

type Tab = "perfil" | "direcciones";

export const ProfilePage = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const addToast = useToastStore((s) => s.addToast);

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [activeTab, setActiveTab] = useState<Tab>("perfil");
  const [confirmLogout, setConfirmLogout] = useState(false);

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
    addToast("Sesión cerrada", "info");
    navigate("/");
  };

  // Evita render mientras redirecciona
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40" onClick={closeModal} />

      {/* MODAL */}
      <div className="relative w-full max-w-md bg-surface rounded-2xl shadow-warm flex flex-col max-h-[90vh]">

        {/* Header fijo */}
        <div className="px-6 pt-6 pb-0 shrink-0">
          <h2 className="text-xl font-bold mb-4">Mi cuenta</h2>

          {/* Tabs */}
          <div className="flex border-b border-outline-variant">
            {(["perfil", "direcciones"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-1 py-2 text-sm font-medium transition-colors
                  ${activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                  }
                `}
              >
                {tab === "perfil" ? "Perfil" : "Mis Direcciones"}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido scrollable */}
        <div className="overflow-y-auto flex-1 px-6 py-4">

          {activeTab === "perfil" && (
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
            </div>
          )}

          {activeTab === "direcciones" && <DireccionesTab />}

        </div>

        {/* Footer fijo */}
        <div className="px-6 pb-6 pt-3 shrink-0 border-t border-outline-variant">
          <div className="flex gap-3">

            <button
              onClick={closeModal}
              className="w-full bg-surface-container py-2 rounded-lg text-sm"
            >
              Cerrar
            </button>

            {confirmLogout ? (
              <div className="w-full flex flex-col gap-2">
                <p className="text-sm text-center text-on-surface-variant">
                  ¿Seguro que querés cerrar sesión?
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setConfirmLogout(false)}
                    className="flex-1 bg-surface-container py-2 rounded-lg text-sm"
                  >
                    No
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm"
                  >
                    Sí, salir
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirmLogout(true)}
                className="w-full bg-red-500 text-white py-2 rounded-lg text-sm"
              >
                Cerrar sesión
              </button>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
