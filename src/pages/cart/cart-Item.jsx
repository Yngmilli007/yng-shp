import React, {useContext} from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";




export const CartItem = (props) => {
  const {id, productName, productImage, price} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className="cartItem" >
      <img scr={productImage} alt=""/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
       <p>${price}</p>
       <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}>+</button>
       </div>
      </div>
    </div>
  );
};
 
