import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TanstackProvider } from "@/providers/TanstackProvider";
import { ProductsProvider } from "@/providers/ProductsContext";
import StyledComponentsRegistry from "./register";
import { GlobalStyle } from "@/styles/GlobalStyles";

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
            <StyledComponentsRegistry>
              <GlobalStyle />
              {children}
            </StyledComponentsRegistry>
          </ProductsProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
