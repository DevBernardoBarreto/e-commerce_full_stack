import { AdminSidebar } from "@/components/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-4 -my-8 flex min-h-[70vh] flex-col border-t border-stone-200 bg-transparent sm:-mx-6 md:flex-row">
      <AdminSidebar />
      <div className="flex-1 p-4 sm:p-6">{children}</div>
    </div>
  );
}
