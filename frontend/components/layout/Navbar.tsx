import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

const links = [
  { href: "/products", label: "Catálogo" },
  { href: "/cart", label: "Carrinho" },
  { href: "/orders", label: "Pedidos" },
];

export function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-[var(--surface)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] text-white">
            <ShoppingBag className="h-4 w-4" aria-hidden />
          </span>
          Nexo
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-stone-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/products"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-stone-600 hover:bg-stone-100"
            aria-label="Buscar produtos"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm text-stone-700 hover:bg-stone-100"
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Entrar</span>
          </Link>
          <Link
            href="/register"
            className="hidden h-9 items-center rounded-md bg-[var(--accent)] px-3 text-sm font-medium text-white hover:bg-[var(--accent-hover)] sm:inline-flex"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </header>
  );
}
