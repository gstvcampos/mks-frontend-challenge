"use client";

import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { useKeyDowm } from "@/hooks/useKeydowm";
import { useOutClick } from "@/hooks/useOutClick";
import { ModalOverlay, ModalWrapper, StyledUl } from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { FormattedPrice } from "../FormattedPrice";
import { StyledTotal } from "@/styles/Typography";

export const Modal = () => {
  const modalRef = useOutClick(() => {
    setIsOpen(false);
  });

  const buttonRef = useKeyDowm("Escape", (element) => {
    element.click();
  });

  const { shopList, setIsOpen } = useContext(ProductsContext);

  const total = shopList.reduce((accumulator, product) => {
    return accumulator + (parseFloat(product.price) * product.quantity);
  }, 0);

  return (
    <ModalOverlay role="dialog">
      <ModalWrapper ref={modalRef}>
        <header>
          <h2>Carrinho de compras</h2>
          <button className="btn__close" onClick={() => setIsOpen(false)} ref={buttonRef}>
            <IoIosCloseCircle size={40} color="#000000"></IoIosCloseCircle>
          </button>
        </header>

        <StyledUl>
          {shopList.map((product) => (
            <p>aaa</p>
          ))}
        </StyledUl>

        <footer>
          <div className="total__container">
            <StyledTotal>Total</StyledTotal>
            <StyledTotal><FormattedPrice price={total} /></StyledTotal>
          </div>

          <button className="btn__buy">Finalizar Compra</button>
        </footer>
      </ModalWrapper>
    </ModalOverlay>
  );
};
