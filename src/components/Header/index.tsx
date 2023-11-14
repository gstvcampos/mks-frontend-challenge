"use client";

import { ProductsContext } from "@/providers/ProductsContext";
import { StyledSubTitle, StyledTitle } from "@/styles/Typography";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { StyledHeader } from "./style";

export const Header = () => {
  const { isOpen, shopList, setIsOpen } = useContext(ProductsContext);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const items = shopList.length;

  return (
    <StyledHeader>
      <div className="container">
        <div className="logo">
          <StyledTitle>MKS</StyledTitle><StyledSubTitle>Sistemas</StyledSubTitle>
        </div>

        <div className="button">
          <a onClick={handleOpenModal}>
            <span>{items}</span>
            <FaShoppingCart color="#000000" size={25}></FaShoppingCart>
          </a>
        </div>        
          {/* {isOpen ? (
              <Modal
                setIsOpen={setIsOpen}
                listShopping={listShopping}
                setListShopping={setListShopping}
              ></Modal>
            ) : null} */}
      </div>

    </StyledHeader>
  );
};
