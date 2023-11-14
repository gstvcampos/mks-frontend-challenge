"use client";

import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { IProductShop } from "@/providers/@types";
import { IoIosCloseCircle } from "react-icons/io";
import { StyledLi } from "./style";
import { StyledProductTitleModal, StyledQtdModal, StyledValueModal } from "@/styles/Typography";
import { FormattedPrice } from "@/components/FormattedPrice";

interface ShoppingCardProps {
  product: IProductShop;
}

export const ShoppingCard = ({ product }: ShoppingCardProps) => {
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

  const removeFromCart = () => {
    const updatedCart = shopList.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setShopList(updatedCart);
  };

  const removeItemsAllFromCart = () => {
    const updatedCart = shopList.filter((item) => item.id !== product.id);
    setShopList(updatedCart);
  };

  return (
    <StyledLi>
      <button className="btn__close" onClick={removeItemsAllFromCart}>
        <IoIosCloseCircle size={30} color="#000000"></IoIosCloseCircle>
      </button>
      <div className="div__img">
        <img src={product.photo} alt="" />
      </div>
      <div className="div__name">
        <StyledProductTitleModal>{product.name}</StyledProductTitleModal>
      </div>
      <div className="qtd__container">
        <StyledQtdModal>Qtd:</StyledQtdModal>
        <div className="qtd__item">
          <button className="btn__remove" onClick={removeFromCart}>-</button>
          <span>{product.quantity}</span>
          <button className="btn__add" onClick={addToCart}>+</button>
        </div>
      </div>
      <StyledValueModal>
        <FormattedPrice price={product.price} />
      </StyledValueModal>
    </StyledLi>
  );
};
