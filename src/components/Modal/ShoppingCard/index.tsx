import { IoIosCloseCircle } from "react-icons/io";
import { StyledLi } from "./style";
import { removeFromCart } from "@/hooks/removeFromCart";
import { addToCart } from "@/hooks/addToCart";
import { removeAllFromCart } from "@/hooks/removeAllFromCart";
import { IProductShop } from "@/providers/@types";

interface ShoppingCardProps {
  product: IProductShop;
}

export const ShoppingCard = ({ product }: ShoppingCardProps) => {
  return (
    <StyledLi>
      <button onClick={() => removeAllFromCart({ product })}>
        <IoIosCloseCircle size={20} color="#000000"></IoIosCloseCircle>
      </button>
      <div className="div__img">
        <img src={product.photo} alt="" />
      </div>
      <h3>{product.name}</h3>
      <button onClick={() => removeFromCart({ product })}></button>
      <span>{product.quantity}</span>
      <button onClick={() => addToCart({ product })}>+</button>
    </StyledLi>
  );
};
