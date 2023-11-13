import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { ProductsProvider } from "@/providers/ProductsProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS",
  description: "MKS sitemas marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <TanstackProvider>
        <ProductsProvider>
          {children}
        </ProductsProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
