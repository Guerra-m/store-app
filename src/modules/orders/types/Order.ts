export type OrderStatus =
  | "pendiente"
  | "confirmado"
  | "preparando"
  | "en_camino"
  | "entregado"
  | "cancelado";

export type OrderItem = {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  imagen?: string;
};

export type Order = {
  id: number;
  usuario_id: number;
  direccion_id?: number | null;

  estado_codigo: OrderStatus;
  forma_pago_codigo: string;

  subtotal: number;
  descuento: number;
  costo_envio: number;
  total: number;

  notas?: string | null;

  created_at: string;
  updated_at: string;

  detalles?: OrderItem[];
};