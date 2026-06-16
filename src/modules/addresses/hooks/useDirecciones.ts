import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { direccionApi } from "../../../shared/api/direccion.api";
import type { DireccionCreate, DireccionUpdate } from "../types/Direccion";

const KEY = ["direcciones"];

export const useDirecciones = () => {
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: KEY,
    queryFn: direccionApi.listar,
  });

  const crear = useMutation({
    mutationFn: (data: DireccionCreate) => direccionApi.crear(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });

  const actualizar = useMutation({
    mutationFn: ({ id, data }: { id: number; data: DireccionUpdate }) =>
      direccionApi.actualizar(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });

  const eliminar = useMutation({
    mutationFn: (id: number) => direccionApi.eliminar(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });

  const marcarPrincipal = useMutation({
    mutationFn: (id: number) => direccionApi.marcarPrincipal(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });

  return { query, crear, actualizar, eliminar, marcarPrincipal };
};
