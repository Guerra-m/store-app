import { http } from "./http";
import type { DireccionRead, DireccionCreate, DireccionUpdate } from "../../modules/addresses/types/Direccion";

const BASE = "/api/v1/direcciones";

export const direccionApi = {
  listar: async (): Promise<DireccionRead[]> => {
    const res = await http.get(`${BASE}/`);
    return res.data;
  },

  crear: async (data: DireccionCreate): Promise<DireccionRead> => {
    const res = await http.post(`${BASE}/`, data);
    return res.data;
  },

  actualizar: async (id: number, data: DireccionUpdate): Promise<DireccionRead> => {
    const res = await http.put(`${BASE}/${id}`, data);
    return res.data;
  },

  eliminar: async (id: number): Promise<void> => {
    await http.delete(`${BASE}/${id}`);
  },

  marcarPrincipal: async (id: number): Promise<DireccionRead> => {
    const res = await http.patch(`${BASE}/${id}/principal`);
    return res.data;
  },
};
