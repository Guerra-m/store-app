import { useState } from "react";
import type { DireccionCreate, DireccionRead } from "../types/Direccion";

type Props = {
  initial?: DireccionRead;
  onSubmit: (data: DireccionCreate) => void;
  onCancel: () => void;
  isLoading?: boolean;
};

const empty: DireccionCreate = {
  alias: "",
  linea1: "",
  linea2: "",
  ciudad: "",
  provincia: "",
  codigo_postal: "",
  es_principal: false,
};

export const DireccionForm = ({ initial, onSubmit, onCancel, isLoading }: Props) => {
  const [form, setForm] = useState<DireccionCreate>(
    initial
      ? {
          alias: initial.alias ?? "",
          linea1: initial.linea1,
          linea2: initial.linea2 ?? "",
          ciudad: initial.ciudad,
          provincia: initial.provincia ?? "",
          codigo_postal: initial.codigo_postal ?? "",
          es_principal: initial.es_principal,
        }
      : empty
  );

  const set = (field: keyof DireccionCreate, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    if (!form.linea1.trim() || !form.ciudad.trim()) return;
    const payload: DireccionCreate = {
      alias: form.alias?.trim() || undefined,
      linea1: form.linea1.trim(),
      linea2: form.linea2?.trim() || undefined,
      ciudad: form.ciudad.trim(),
      provincia: form.provincia?.trim() || undefined,
      codigo_postal: form.codigo_postal?.trim() || undefined,
      es_principal: form.es_principal,
    };
    onSubmit(payload);
  };

  const inputCls =
    "w-full bg-surface-container rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/60";

  return (
    <div className="space-y-3 pt-2">
      <div className="grid grid-cols-2 gap-2">
        <input
          placeholder="Alias (ej. Casa)"
          value={form.alias}
          onChange={(e) => set("alias", e.target.value)}
          className={`${inputCls} col-span-2`}
          maxLength={50}
        />
        <input
          placeholder="Calle y número *"
          value={form.linea1}
          onChange={(e) => set("linea1", e.target.value)}
          className={`${inputCls} col-span-2`}
        />
        <input
          placeholder="Piso / depto (opcional)"
          value={form.linea2}
          onChange={(e) => set("linea2", e.target.value)}
          className={`${inputCls} col-span-2`}
        />
        <input
          placeholder="Ciudad *"
          value={form.ciudad}
          onChange={(e) => set("ciudad", e.target.value)}
          className={inputCls}
        />
        <input
          placeholder="Provincia"
          value={form.provincia}
          onChange={(e) => set("provincia", e.target.value)}
          className={inputCls}
        />
        <input
          placeholder="Código postal"
          value={form.codigo_postal}
          onChange={(e) => set("codigo_postal", e.target.value)}
          className={inputCls}
          maxLength={10}
        />
      </div>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={form.es_principal}
          onChange={(e) => set("es_principal", e.target.checked)}
          className="accent-primary"
        />
        <span className="text-on-surface-variant">Establecer como principal</span>
      </label>

      <div className="flex gap-2 pt-1">
        <button
          onClick={onCancel}
          className="flex-1 py-2 rounded-lg bg-surface-container text-sm border border-outline-variant"
        >
          Cancelar
        </button>
        <button
          onClick={handleSubmit}
          disabled={!form.linea1.trim() || !form.ciudad.trim() || isLoading}
          className="flex-1 py-2 rounded-lg bg-primary text-on-primary text-sm disabled:opacity-50"
        >
          {isLoading ? "Guardando..." : initial ? "Guardar cambios" : "Agregar"}
        </button>
      </div>
    </div>
  );
};
