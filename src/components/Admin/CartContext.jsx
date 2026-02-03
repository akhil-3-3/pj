import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [orders, setOrders] = useState([]);

  const increaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              sizes: {
                ...item.sizes,
                [size]: {
                  ...item.sizes[size],
                  qty: item.sizes[size].qty + 1,
                },
              },
            }
          : item,
      ),
    );
  };

  const decreaseQty = (id, size) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;

          const newSizes = {
            ...item.sizes,
            [size]: {
              ...item.sizes[size],
              qty: item.sizes[size].qty - 1,
            },
          };

          if (newSizes[size].qty <= 0) {
            delete newSizes[size];
          }

          if (Object.keys(newSizes).length === 0) return null;

          return { ...item, sizes: newSizes };
        })
        .filter(Boolean),
    );
  };

  const deleteOrder = (id, size) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;

          const newSizes = { ...item.sizes };
          delete newSizes[size];

          if (Object.keys(newSizes).length === 0) return null;

          return { ...item, sizes: newSizes };
        })
        .filter(Boolean),
    );
  };
  const deleteOrder2 = (id, size) => {
    setOrders((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;

          const newSizes = { ...item.sizes };
          delete newSizes[size];

          if (Object.keys(newSizes).length === 0) return null;

          return { ...item, sizes: newSizes };
        })
        .filter(Boolean),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        increaseQty,
        decreaseQty,
        deleteOrder,
        setOrders,
        orders,
        deleteOrder2,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
