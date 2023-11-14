"use client";

import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }: any) => {
  const [productsList, setproductsList] = useState([]);
  const [shopList, setshopList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
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
