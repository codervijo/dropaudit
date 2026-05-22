import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({
  children,
  pathname = "/",
}: {
  children: React.ReactNode;
  pathname?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header pathname={pathname} />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
