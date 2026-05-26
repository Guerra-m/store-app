export type Pedido = {
  id: number;
  usuario_id: number;
  direccion_id?: number | null;

  estado_codigo: string;
  forma_pago_codigo: string;

  subtotal: number;
  descuento: number;
  costo_envio: number;
  total: number;

  notas?: string | null;

  created_at: string;
  updated_at: string;
};