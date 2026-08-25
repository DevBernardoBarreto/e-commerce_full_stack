import Link from "next/link";
import {
  FolderTree,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Produtos", icon: Package },
  { href: "/admin/categories", label: "Categorias", icon: FolderTree },
  { href: "/admin/orders", label: "Pedidos", icon: ShoppingCart },
  { href: "/admin/users", label: "Usuários", icon: Users },
];

export function AdminSidebar() {
  return (
    <aside className="w-full border-b border-stone-200 bg-[var(--surface)] md:w-60 md:border-b-0 md:border-r">
      <div className="px-4 py-4 text-sm font-semibold">Painel</div>
      <nav className="flex gap-1 overflow-x-auto px-2 pb-3 md:flex-col md:overflow-visible md:pb-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          >
            <item.icon className="h-4 w-4" aria-hidden />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
