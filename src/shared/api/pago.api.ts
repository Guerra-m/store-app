import { http } from "./http";

export const pagoApi = {
  crearPago: async (pedido_id: number, transaction_amount: number) => {
    const res = await http.post("/api/v1/pagos/crear/", {
      pedido_id,
      transaction_amount,
    });
    return res.data as { id: number; external_reference: string };
  },

  crearPreferencia: async (pedido_id: number) => {
    const res = await http.post("/api/v1/pagos/crear-preferencia/", { pedido_id });
    return res.data as { init_point: string; preference_id: string };
  },
};
