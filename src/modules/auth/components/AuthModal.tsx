import { useAuthModalStore } from "../store/auth.modal.store";

export const AuthModal = () => {
  const { open, closeModal } = useAuthModalStore();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50">
      
      <div className="w-full max-w-md bg-surface rounded-2xl p-6 shadow-warm">

        <h2 className="text-xl font-bold mb-4">
          Iniciar sesión
        </h2>

        <input
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-lg bg-surface-container"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-3 rounded-lg bg-surface-container"
        />

        <button className="w-full bg-primary text-on-primary py-3 rounded-lg">
          Entrar
        </button>

        <button
          onClick={closeModal}
          className="mt-3 w-full text-sm text-on-surface-variant"
        >
          Cerrar
        </button>

      </div>
    </div>
  );
};