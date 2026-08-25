import Link from "next/link";
import { getApiBaseUrl } from "@/lib/api";

async function ApiBadge() {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/health`, { cache: "no-store" });
    if (!response.ok) {
      return <span className="text-sm text-stone-500">API: indisponível</span>;
    }
    const data = (await response.json()) as { status: string };
    return (
      <span className="text-sm text-stone-600">
        API: <strong className="font-medium text-stone-900">{data.status}</strong>
      </span>
    );
  } catch {
    return (
      <span className="text-sm text-stone-500">
        API offline — inicie o backend em {getApiBaseUrl()}
      </span>
    );
  }
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-[var(--surface)] px-6 py-12 sm:px-10">
        <p className="text-sm font-medium text-[var(--accent)]">Nexo</p>
        <h1 className="mt-2 max-w-xl text-4xl font-semibold tracking-tight text-stone-900">
          Uma loja completa, construída com arquitetura de verdade.
        </h1>
        <p className="mt-4 max-w-lg text-stone-600">
          Catálogo, carrinho, pedidos e painel administrativo entram nas próximas
          etapas. Esta tela já usa o layout, a identidade visual e o client HTTP.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/products"
            className="inline-flex h-10 items-center rounded-md bg-[var(--accent)] px-4 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            Ver catálogo
          </Link>
          <Link
            href="/login"
            className="inline-flex h-10 items-center rounded-md border border-stone-300 px-4 text-sm font-medium text-stone-800 hover:bg-stone-50"
          >
            Entrar
          </Link>
        </div>
        <div className="mt-6">
          <ApiBadge />
        </div>
      </section>
    </div>
  );
}
