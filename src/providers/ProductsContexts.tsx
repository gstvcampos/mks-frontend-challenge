"use client";

import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const {} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get(
        "/products?page=1&rows=8&sortBy=name&orderBy=ASC"
      );
      return data.products 
    },
  });

  return <></>;
};

export default Products;
