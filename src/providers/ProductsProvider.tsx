"use client";

import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

export const NewsContext = createContext({});

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
      return data.products;
    },
  });

  return (
    <NewsContext.Provider
      value={{
        productsList,
        setproductsList,
        isOpen,
        setIsOpen,
        shopList,
        setshopList
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
