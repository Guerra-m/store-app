import { http } from "./http";

export type UnidadMedidaRead = {
  id: number;
  nombre: string;
  simbolo: string;
  tipo: string;
};

export const unidadMedidaApi = {
  listar: async (): Promise<UnidadMedidaRead[]> => {
    const res = await http.get("/api/v1/unidades-medida/");
    return res.data;
  },
};
