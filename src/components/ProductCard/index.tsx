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

  return (
    <>
      <StyledLi>
        <div className="div__img">
          <img src={product.photo} alt="imagem do produto" />
        </div>

        <div className="div__information">
          <div>
            <StyledTitleProduct>{product.name}</StyledTitleProduct>
            <p>
              <FormattedPrice price={product.price} />
            </p>
          </div>
            <StyledText>{product.description}</StyledText>
          <StyledButtonDefault
            onClick={() => {
              setListShopping([...listShopping, product]);
              toast.success("Item adicionado ao carrinho!", {
                autoClose: 1500,
                pauseOnHover: false,
                draggable: false,
              });
            }}
          >
            <RiShoppingBag3Line color="#FFFFFF" size={25}></RiShoppingBag3Line>
            COMPRAR
          </StyledButtonDefault>
        </div>
      </StyledLi>
      <ToastContainer />
    </>
  );
}
