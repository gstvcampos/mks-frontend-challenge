"use client";

import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { IProductContext, IProductShop } from "./@types";

export const ProductsContext = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {

  const [shopList, setShopList] = useState<IProductShop[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoading, data:productsList } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get(
        "/products?page=1&rows=8&sortBy=name&orderBy=ASC"
      );
      return data.products
    },
  });

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        isLoading,
        isOpen,
        setIsOpen,
        shopList,
        setShopList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
