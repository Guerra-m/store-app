import { useState } from "react";
import type { DireccionRead, DireccionCreate } from "../types/Direccion";
import { DireccionForm } from "./DireccionForm";

type Props = {
  direccion: DireccionRead;
  onMarcarPrincipal: (id: number) => void;
  onEditar: (id: number, data: DireccionCreate) => void;
  onEliminar: (id: number) => void;
  isLoading?: boolean;
};

export const DireccionCard = ({
  direccion,
  onMarcarPrincipal,
  onEditar,
  onEliminar,
  isLoading,
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const label =
    direccion.linea2
      ? `${direccion.linea1}, ${direccion.linea2}`
      : direccion.linea1;

  const subLabel = [direccion.ciudad, direccion.provincia, direccion.codigo_postal]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container p-3 space-y-2">
      {/* Cabecera */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            {direccion.alias && (
              <span className="font-semibold text-sm text-on-surface">
                {direccion.alias}
              </span>
            )}
            {direccion.es_principal && (
              <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">
                Principal
              </span>
            )}
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5 truncate">{label}</p>
          <p className="text-xs text-on-surface-variant/70">{subLabel}</p>
        </div>
      </div>

      {/* Formulario de edición inline */}
      {editing && (
        <DireccionForm
          initial={direccion}
          onSubmit={(data) => {
            onEditar(direccion.id, data);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
          isLoading={isLoading}
        />
      )}

      {/* Acciones */}
      {!editing && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {!direccion.es_principal && (
            <button
              onClick={() => onMarcarPrincipal(direccion.id)}
              disabled={isLoading}
              className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50"
            >
              Marcar principal
            </button>
          )}
          <button
            onClick={() => setEditing(true)}
            className="text-xs px-2 py-1 rounded-lg bg-surface border border-outline-variant hover:bg-surface-container transition-colors"
          >
            Editar
          </button>

          {confirmDelete ? (
            <div className="flex items-center gap-1 ml-auto">
              <span className="text-xs text-on-surface-variant">¿Eliminar?</span>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-xs px-2 py-0.5 rounded border border-outline-variant"
              >
                No
              </button>
              <button
                onClick={() => onEliminar(direccion.id)}
                disabled={isLoading}
                className="text-xs px-2 py-0.5 rounded bg-error text-white disabled:opacity-50"
              >
                Sí
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="text-xs px-2 py-1 rounded-lg text-error hover:bg-error/10 transition-colors ml-auto"
            >
              Eliminar
            </button>
          )}
        </div>
      )}
    </div>
  );
};
