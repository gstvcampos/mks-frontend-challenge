import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductsList } from "@/components/ProductsList";

export default function Home() {
  return (
    <main>
      <Header/>
      <ProductsList/>
      <Footer/>
    </main>
  )
}
