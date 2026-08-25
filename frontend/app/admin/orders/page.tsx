import { PlaceholderState } from "@/components/ui/PlaceholderState";

export const metadata = { title: "Pedidos" };

export default function AdminOrdersPage() {
  return (
    <PlaceholderState
      title="Gerenciar pedidos"
      description="Alteração de status (PAID, SHIPPED, etc.) será uma operação de administrador."
    />
  );
}
