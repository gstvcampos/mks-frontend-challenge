import { ProductsContext } from "@/providers/ProductsContext";
import { useContext } from "react";
import { IProduct } from "@/providers/@types";

interface ProductCardProps {
  product: IProduct;
}

export const removeFromCart = ({ product }: ProductCardProps) => {
  const { shopList, setShopList } = useContext(ProductsContext);

  const updatedCart = shopList.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );

  setShopList(updatedCart);
};
