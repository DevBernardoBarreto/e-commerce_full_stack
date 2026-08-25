import { PlaceholderState } from "@/components/ui/PlaceholderState";

export const metadata = { title: "Produto" };

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PlaceholderState
      title={`Produto ${id}`}
      description="A página de detalhe, estoque e avaliações será implementada junto com o backend de produtos."
    />
  );
}
