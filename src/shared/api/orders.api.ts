import type {Order } from "../../modules/orders/types/Order";
import { http } from "../api/http";

type CreateOrderDto = {
  usuario_id: number;
  detalles: {
    producto_id: number;
    cantidad: number;
    precio_unitario: number;
  }[];
  total: number;
};

export const ordersApi = {
  // LISTAR PEDIDOS
  getOrders: async (offset = 0, limit = 20): Promise<Order[]> => {
    const res = await http.get("/api/v1/pedidos", {
      params: { offset, limit },
    });
    return res.data;
  },

  // OBTENER DETALLE
  getOrderById: async (id: number): Promise<Order> => {
    const res = await http.get(`/api/v1/pedidos/${id}`);
    const data = res.data as {
      detalles?: { producto_id: number; nombre_snapshot: string; cantidad: number; precio_snapshot: number }[];
      [key: string]: unknown;
    };
    return {
      ...(data as Order),
      detalles: data.detalles?.map((d) => ({
        id: d.producto_id,
        nombre: d.nombre_snapshot,
        cantidad: d.cantidad,
        precio: d.precio_snapshot,
      })),
    };
  },

  // AVANZAR ESTADO
  advanceStatus: async (
    id: number,
    estado_hacia: string,
    motivo?: string
  ) => {
    const res = await http.post(`/api/v1/pedidos/${id}/avanzar`, {
      estado_hacia,
      motivo,
    });
    return res.data;
  },

  // HISTORIAL
  getHistory: async (id: number) => {
    const res = await http.get(`/api/v1/pedidos/${id}/historial`);
    return res.data;
  },

  getActiveOrder: async (): Promise<Order> => {
    const res = await http.get("/api/v1/pedidos?limit=50");
    return res.data;
  },

  getOrderDetail: async (id: number) => {
    const res = await http.get(`/api/v1/pedidos/${id}`);
    return res.data;
  },

    createOrder: async (payload) => {
    const res = await http.post("/api/v1/pedidos/", payload);
    return res.data;
  },
};