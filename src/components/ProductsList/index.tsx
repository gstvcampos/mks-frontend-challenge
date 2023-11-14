"use client";

import { useContext } from "react";
import { StyledUl } from "./style";
import { ProductsContext } from "@/providers/ProductsContext";
import { ProductCard } from "../ProductCard";
import { LoadingSpinner } from "../LoagindSpinner";

export const ProductsList = () => {
  const { productsList, isLoading } = useContext(ProductsContext);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <StyledUl>
      {productsList?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledUl>
  );
};
