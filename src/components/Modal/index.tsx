"use client";

import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { useKeyDowm } from "@/hooks/useKeydowm";
import { useOutClick } from "@/hooks/useOutClick";
import { ModalOverlay, ModalWrapper, StyledUl } from "./style";
import { IoIosCloseCircle } from "react-icons/io";
import { FormattedPrice } from "../FormattedPrice";

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
          <button onClick={() => setIsOpen(false)} ref={buttonRef}>
            <IoIosCloseCircle size={20} color="#000000"></IoIosCloseCircle>
          </button>
        </header>

        <StyledUl>
          {shopList.map((product) => (
            <p>aaa</p>
          ))}
        </StyledUl>

        <footer>
          <div className="total__container">
            <h3>Total</h3>
            <FormattedPrice price={total} />
          </div>

          <button>Finalizar Compra</button>
        </footer>
      </ModalWrapper>
    </ModalOverlay>
  );
};
