import { PlaceholderState } from "@/components/ui/PlaceholderState";

export const metadata = { title: "Produtos" };

export default function AdminProductsPage() {
  return (
    <PlaceholderState
      title="Gerenciar produtos"
      description="CRUD administrativo será protegido por role ADMIN no backend."
    />
  );
}
