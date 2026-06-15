import { useEffect, useRef } from "react";

function getWsUrl(pedidoId: number): string {
  const apiUrl = import.meta.env.VITE_API_URL as string ?? "http://localhost:8000";
  return apiUrl.replace(/^http/, "ws") + `/ws/pedidos/${pedidoId}`;
}

/**
 * Abre un WebSocket para un pedido específico y llama onUpdate
 * cada vez que el servidor notifica un cambio de estado.
 */
export const useOrderWebSocket = (
  pedidoId: number | null,
  onUpdate: () => void
) => {
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  useEffect(() => {
    if (pedidoId === null) return;

    const ws = new WebSocket(getWsUrl(pedidoId));

    ws.onmessage = (event: MessageEvent) => {
      try {
        const msg = JSON.parse(event.data as string) as { type: string };
        if (msg.type === "estado_actualizado") {
          onUpdateRef.current();
        }
      } catch {
        // mensaje no JSON — ignorar
      }
    };

    ws.onerror = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [pedidoId]);
};
