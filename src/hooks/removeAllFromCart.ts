import { ProductsContext } from "@/providers/ProductsContext";
import { useContext } from "react";
import { IProduct } from "@/providers/@types";

interface ProductCardProps {
  product: IProduct;
}

export const removeAllFromCart = ({ product }: ProductCardProps) => {
  const { shopList, setShopList } = useContext(ProductsContext);

  const updatedCart = shopList.filter((item) => item.id !== product.id);

  setShopList(updatedCart);
};
