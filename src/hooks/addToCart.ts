"use client";

import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { IProduct } from "@/providers/@types";

interface ProductCardProps {
  product: IProduct;
}

export const addToCart = ({ product }: ProductCardProps) => {
  const { shopList, setShopList } = useContext(ProductsContext);

  const existingProduct = shopList.find((item) => item.id === product.id);

    if (!existingProduct) {
      setShopList([...shopList, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = shopList.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setShopList(updatedCart);
    }
};
