import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CartItem({ item, index, removeFromCart }) {
  return (
    <div className="cart-item">
      <Card>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-left">
            <Card.Img variant="success" src={item.imageUrl} style={{ width: '5rem' }}  />
            <Card.Title className="text-center mt-2 mb-0">{item.title}</Card.Title>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="m-0">₹{item.price}</p>
          </div>
          <div className="d-flex flex-column align-items-right">
            <p className="m-0">{item.quantity}</p>
            <Button variant="danger" onClick={() => removeFromCart(index)}>
              Remove
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartItem;
