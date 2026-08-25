import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Nexo — e-commerce em construção (Etapa 1: fundação).</p>
        <div className="flex gap-4">
          <Link href="/products" className="hover:text-stone-800">
            Catálogo
          </Link>
          <Link href="/admin" className="hover:text-stone-800">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
