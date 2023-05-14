import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    updateItem: (id, quantity) => {},
    removeItem: (id) => {},
})

export default CartContext;