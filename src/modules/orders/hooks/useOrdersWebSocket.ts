import { useEffect, useRef } from "react";

function getWsUrl(pedidoId: number): string {
  const apiUrl = import.meta.env.VITE_API_URL as string ?? "http://localhost:8000";
  return apiUrl.replace(/^http/, "ws") + `/ws/pedidos/${pedidoId}`;
}

export const useOrdersWebSocket = (
  orderIds: number[],
  onUpdate: (id: number) => void
) => {
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  const idsKey = orderIds.slice().sort((a, b) => a - b).join(",");

  useEffect(() => {
    if (orderIds.length === 0) return;

    const sockets = orderIds.map((id) => {
      const ws = new WebSocket(getWsUrl(id));

      ws.onmessage = (event: MessageEvent) => {
        try {
          const msg = JSON.parse(event.data as string) as { type: string };
          if (msg.type === "estado_actualizado") {
            onUpdateRef.current(id);
          }
        } catch {
          // mensaje no JSON — ignorar
        }
      };

      ws.onerror = () => {
        if (ws.readyState !== WebSocket.CLOSED) ws.close();
      };

      return ws;
    });

    return () => {
      sockets.forEach((ws) => {
        if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
          ws.close();
        }
      });
    };
  // idsKey estabiliza el efecto: solo reconecta si cambia el conjunto de IDs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);
};
