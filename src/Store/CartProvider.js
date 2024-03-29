import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems([...items, item]);
    }

    const removeItemFromCartHandler = id => {
        const itemIndex = items.findIndex(item => item.id === id);
        const item = items[itemIndex];

        const newItems = [...items];
        if(item.quantity > 1) {
            newItems[itemIndex] = {...item, quantity: item.quantity - 1};
        } else {
            newItems.splice(itemIndex, 1);
        }
        setItems(newItems);
    }

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;