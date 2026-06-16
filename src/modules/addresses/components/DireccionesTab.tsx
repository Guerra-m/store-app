import { useState } from "react";
import { useDirecciones } from "../hooks/useDirecciones";
import { DireccionCard } from "./DireccionCard";
import { DireccionForm } from "./DireccionForm";
import { useToastStore } from "../../../shared/store/toast.store";
import type { DireccionCreate } from "../types/Direccion";

export const DireccionesTab = () => {
  const { query, crear, actualizar, eliminar, marcarPrincipal } = useDirecciones();
  const addToast = useToastStore((s) => s.addToast);
  const [showForm, setShowForm] = useState(false);

  const direcciones = query.data ?? [];
  const isLoading =
    crear.isPending ||
    actualizar.isPending ||
    eliminar.isPending ||
    marcarPrincipal.isPending;

  const handleCrear = (data: DireccionCreate) => {
    crear.mutate(data, {
      onSuccess: () => {
        addToast("Dirección agregada", "success");
        setShowForm(false);
      },
      onError: () => addToast("Error al agregar la dirección", "error"),
    });
  };

  const handleEditar = (id: number, data: DireccionCreate) => {
    actualizar.mutate(
      { id, data },
      {
        onSuccess: () => addToast("Dirección actualizada", "success"),
        onError: () => addToast("Error al actualizar", "error"),
      }
    );
  };

  const handleEliminar = (id: number) => {
    eliminar.mutate(id, {
      onSuccess: () => addToast("Dirección eliminada", "info"),
      onError: () => addToast("Error al eliminar", "error"),
    });
  };

  const handlePrincipal = (id: number) => {
    marcarPrincipal.mutate(id, {
      onSuccess: () => addToast("Dirección principal actualizada", "success"),
      onError: () => addToast("Error al actualizar", "error"),
    });
  };

  if (query.isLoading) {
    return (
      <p className="text-sm text-on-surface-variant text-center py-6">
        Cargando direcciones...
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {direcciones.length === 0 && !showForm && (
        <p className="text-sm text-on-surface-variant text-center py-4">
          No tenés direcciones guardadas todavía.
        </p>
      )}

      {/* Lista ordenada: principal primero */}
      {[...direcciones]
        .sort((a, b) => (b.es_principal ? 1 : 0) - (a.es_principal ? 1 : 0))
        .map((dir) => (
          <DireccionCard
            key={dir.id}
            direccion={dir}
            onMarcarPrincipal={handlePrincipal}
            onEditar={handleEditar}
            onEliminar={handleEliminar}
            isLoading={isLoading}
          />
        ))}

      {/* Formulario nueva dirección */}
      {showForm && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-3">
          <p className="text-sm font-semibold text-on-surface mb-2">
            Nueva dirección
          </p>
          <DireccionForm
            onSubmit={handleCrear}
            onCancel={() => setShowForm(false)}
            isLoading={crear.isPending}
          />
        </div>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-2 rounded-xl border border-dashed border-outline-variant text-sm text-on-surface-variant hover:bg-surface-container transition-colors"
        >
          + Nueva dirección
        </button>
      )}
    </div>
  );
};
