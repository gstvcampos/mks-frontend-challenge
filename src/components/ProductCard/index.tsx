"use client";

import { StyledLi } from "./style";
import { FormattedPrice } from "../FormattedPrice";
import { StyledButtonDefault } from "@/styles/Button";
import { RiShoppingBag3Line } from "react-icons/ri";
import { StyledText, StyledTitleProduct } from "@/styles/Typography";
import { IProduct } from "@/providers/@types";
import { addToCart } from "@/hooks/addToCart";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <StyledLi>
        <div className="div__img">
          <img src={product.photo} alt="imagem do produto" />
        </div>

        <div className="div__information">
          <div className="div__title">
            <StyledTitleProduct>{product.name}</StyledTitleProduct>
            <p className="price">
              <FormattedPrice price={product.price} />
            </p>
          </div>
          <StyledText>{product.description}</StyledText>
          <StyledButtonDefault onClick={() => addToCart({ product })}>
            <RiShoppingBag3Line color="#FFFFFF" size={25}></RiShoppingBag3Line>
            COMPRAR
          </StyledButtonDefault>
        </div>
      </StyledLi>
    </>
  );
};
