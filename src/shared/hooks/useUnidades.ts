import { useQuery } from "@tanstack/react-query";
import { unidadMedidaApi, type UnidadMedidaRead } from "../api/unidadMedida.api";

export const useUnidades = () =>
  useQuery<UnidadMedidaRead[]>({
    queryKey: ["unidades-medida"],
    queryFn: unidadMedidaApi.listar,
    staleTime: 1000 * 60 * 10, // 10 min — no cambian seguido
  });
