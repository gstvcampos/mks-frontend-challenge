"use client";

import { StyledLi } from "./style";
import { FormattedPrice } from "../FormattedPrice";
import { StyledButtonDefault } from "@/styles/Button";
import { RiShoppingBag3Line } from "react-icons/ri";
import { StyledText, StyledTitleProduct } from "@/styles/Typography";
import { IProduct } from "@/providers/@types";
import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { shopList, setShopList } = useContext(ProductsContext);

  const addToCart = () => {
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

  return (
    <>
      <StyledLi>
        <div className="div__img">
          <img src={product.photo} alt="imagem do produto" />
        </div>

        <div className="div__information">
          <div className="div__title">
            <StyledTitleProduct>{product.name}</StyledTitleProduct>
            <p className="price">R$
              {parseFloat(product.price).toLocaleString("pt-BR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <StyledText>{product.description}</StyledText>
          <StyledButtonDefault onClick={addToCart}>
            <RiShoppingBag3Line color="#FFFFFF" size={25}></RiShoppingBag3Line>
            COMPRAR
          </StyledButtonDefault>
        </div>
      </StyledLi>
    </>
  );
};
