"use client";

import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { useKeyDown } from "@/hooks/useKeydown";
import { useOutClick } from "@/hooks/useOutClick";
import { ModalOverlay, ModalWrapper, StyledUl } from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { FormattedPrice } from "../FormattedPrice";
import { StyledSubTitleModal } from "@/styles/Typography";
import { ShoppingCard } from "./ShoppingCard";

export const Modal = () => {
  const modalRef = useOutClick(() => {
    setIsOpen(false);
  });

  const buttonRef = useKeyDown("Escape", (element) => {
    element.click();
  });

  const { shopList, setIsOpen } = useContext(ProductsContext);

  const total = shopList.reduce((accumulator, product) => {
    return accumulator + parseFloat(product.price) * product.quantity;
  }, 0);

  return (
    <ModalOverlay role="dialog">
      <ModalWrapper ref={modalRef}>
        <header>
          <StyledSubTitleModal>Carrinho de compras</StyledSubTitleModal>
          <button
            className="btn__close"
            onClick={() => setIsOpen(false)}
            ref={buttonRef}
          >
            <IoIosCloseCircle size={40} color="#000000"></IoIosCloseCircle>
          </button>
        </header>

        <StyledUl>
          {shopList.map((product) => (
            <ShoppingCard key={product.id} product={product} />
          ))}
        </StyledUl>

        <footer>
          <div className="total__container">
            <StyledSubTitleModal>Total</StyledSubTitleModal>
            <StyledSubTitleModal>
              <FormattedPrice price={total} />
            </StyledSubTitleModal>
          </div>

          <button className="btn__buy">Finalizar Compra</button>
        </footer>
      </ModalWrapper>
    </ModalOverlay>
  );
};
