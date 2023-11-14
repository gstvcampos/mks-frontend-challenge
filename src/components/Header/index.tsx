"use client";

import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { StyledSubTitle, StyledTitle } from "@/styles/Typography";
import { FaShoppingCart } from "react-icons/fa";
import { StyledHeader } from "./style";
import { Modal } from "../Modal";

export const Header = () => {
  const { isOpen, shopList, setIsOpen } = useContext(ProductsContext);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const items = shopList.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);

  return (
    <StyledHeader>
      <div className="container">
        <div className="logo">
          <StyledTitle>MKS</StyledTitle>
          <StyledSubTitle>Sistemas</StyledSubTitle>
        </div>

        <a onClick={handleOpenModal}>
          <FaShoppingCart color="#000000" size={25}></FaShoppingCart>
          <span>{items}</span>
        </a>

        {isOpen ? <Modal /> : null}
      </div>
    </StyledHeader>
  );
};
