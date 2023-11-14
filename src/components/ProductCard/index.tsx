"use client";

import { ToastContainer, toast } from "react-toastify";
import { StyledLi } from "./style";
import { FormattedPrice } from "../FormattedPrice";
import { StyledButtonDefault } from "@/styles/Button";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useContext } from "react";
import { ProductsContext } from "@/providers/ProductsContext";
import { StyledText, StyledTitleProduct } from "@/styles/Typography";

export const ProductCard = ({ product }) => {
  const { listShopping, setListShopping } = useContext(ProductsContext);

  const isProductInCart = listShopping.some((item) => item.id === product.id);

  const addToCart = () => {
    if (!isProductInCart) {
      setListShopping([...listShopping, { ...product, quantity: 1 }]);
      toast.success("Item adicionado ao carrinho!", {
        autoClose: 1500,
        pauseOnHover: false,
        draggable: false,
      });
    } else {
      const updatedCart = listShopping.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setListShopping(updatedCart);

      // Adicionalmente, você pode exibir uma mensagem informando que a quantidade foi atualizada.
      toast.info("Quantidade atualizada no carrinho!", {
        autoClose: 1500,
        pauseOnHover: false,
        draggable: false,
      });
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
            <p className="price">
              <FormattedPrice price={product.price} />
            </p>
          </div>
          <StyledText>{product.description}</StyledText>
          <StyledButtonDefault onClick={addToCart}>
            <RiShoppingBag3Line color="#FFFFFF" size={25}></RiShoppingBag3Line>
            COMPRAR
          </StyledButtonDefault>
        </div>
      </StyledLi>
      <ToastContainer />
    </>
  );
};
