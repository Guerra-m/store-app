import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };

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
            Nombre: Juan Pérez
          </div>

          <div className="bg-surface-container rounded-xl p-3">
            Email: usuario@mail.com
          </div>

        </div>

        <button
          onClick={closeModal}
          className="mt-6 w-full bg-primary text-on-primary py-2 rounded-lg"
        >
          Cerrar
        </button>

      </div>

    </div>
  );
};