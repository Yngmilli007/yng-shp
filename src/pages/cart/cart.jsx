import React, {useContext} from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
 import { CartItem } from "./cart-Item";
 import {useNavigate} from "react-router-dom"


export const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return(
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) =>{
          if(cartItems[product.id] !== 0){
           return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ?
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue shopping</button>
        <button>Checkout</button>
      </div>
    : <h2>Your Cart Is Empty</h2>}  
    </div>
  );
};