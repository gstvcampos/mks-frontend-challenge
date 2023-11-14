"use client";

import { useContext } from "react";
import { StyledUl } from "./style";
import { ProductsContext } from "@/providers/ProductsContext";
import { ProductCard } from "../ProductCard";

export const ProductsList = () => {
  const { productsList } = useContext(ProductsContext);
  return (
    <StyledUl>
      {productsList.map((product) => <ProductCard product={product}/>)}
    </StyledUl>
  )
};
