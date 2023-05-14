import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../Store/cart-context";


function Cart({ show, onHide }) {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <CartItem 
      key={item.id}
      item={item}
      id={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity} 
      imageUrl={item.imageUrl}
    />
  ));
  

  
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += Number(cartItems[i].price) * Number(cartItems[i].quantity);
    }
    return total;
  };

  const purchaseProducts = () => {
    alert(`Thanks for the purchase. Your total is ₹${calculateTotal()}`);
  };

  return (
    <Modal show={show} onHide={onHide} className="cart">
      <Modal.Header closeButton style={{ backgroundColor: "#0275c8" }}>
        <Modal.Title style={{ fontFamily: "Badaboom", fontSize: "40px" }}>
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cart-header d-flex justify-content-between">
          <div className="cart-item-header header-style">Item</div>
          <div className="cart-price-header header-style">Price</div>
          <div className="cart-quantity-header header-style">Quantity</div>
        </div>
        {/* {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            index={index}
            removeFromCart={C}
            handleQuantityChange={handleQuantityChange}
          />
        ))} */}
        {cartItems}
        <div className="cart-total">
          <h4 style={{ textAlign: "right" }}>
            <b>Total: ₹{calculateTotal()}</b>
          </h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={purchaseProducts}>
          PURCHASE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
