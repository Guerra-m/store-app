import { OrderList } from "../components/OrderList";

const mockOrders = [
  {
    id: 101,
    usuario_id: 1,
    direccion_id: null,
    estado_codigo: "entregado",
    forma_pago_codigo: "efectivo",
    subtotal: 12000,
    descuento: 0,
    costo_envio: 1000,
    total: 13000,
    notas: "Sin cebolla por favor",
    created_at: "2026-05-24T18:30:00",
    updated_at: "2026-05-24T19:10:00",
    detalles: [
      {
        id: 1,
        nombre: "Pizza Napolitana",
        cantidad: 1,
        precio: 8500,
        imagen:
          "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
      },
      {
        id: 2,
        nombre: "Coca Cola",
        cantidad: 2,
        precio: 3000,
        imagen:
          "https://images.unsplash.com/photo-1629203851122-3726ecdf080e",
      },
    ],
  },
  {
    id: 102,
    usuario_id: 1,
    direccion_id: null,
    estado_codigo: "en_camino",
    forma_pago_codigo: "tarjeta",
    subtotal: 9200,
    descuento: 500,
    costo_envio: 1000,
    total: 9700,
    notas: null,
    created_at: "2026-05-25T12:10:00",
    updated_at: "2026-05-25T12:40:00",
    detalles: [
      {
        id: 3,
        nombre: "Hamburguesa Doble",
        cantidad: 1,
        precio: 9200,
        imagen:
          "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },
    ],
  },
  {
    id: 103,
    usuario_id: 1,
    direccion_id: null,
    estado_codigo: "preparando",
    forma_pago_codigo: "mercadopago",
    subtotal: 7800,
    descuento: 0,
    costo_envio: 800,
    total: 8600,
    notas: "Extra picante",
    created_at: "2026-05-25T14:00:00",
    updated_at: "2026-05-25T14:10:00",
    detalles: [
      {
        id: 4,
        nombre: "Tacos Mexicanos",
        cantidad: 1,
        precio: 7800,
        imagen:
          "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
      },
    ],
  },
];

export const OrdersPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        Mis pedidos
      </h1>

      {/* CONTENT */}
      <OrderList orders={mockOrders} />

    </div>
  );
};