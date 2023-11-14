"use client";

import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { IProduct, IProductContext } from "./@types";

export const ProductsContext = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsList, setproductsList] = useState<IProduct[]>([]);
  const [shopList, setshopList] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get(
        "/products?page=1&rows=8&sortBy=name&orderBy=ASC"
      );
      setproductsList(data.products);
    },
  });

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        setproductsList,
        isOpen,
        setIsOpen,
        shopList,
        setshopList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
