import { createContext, useContext, useState, useEffect } from "react";

const ProductContext1 = createContext(null);

export const ProductProvider1 = ({ children }) => {

   const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [];
  });
   useEffect(() => {
     localStorage.setItem("products", JSON.stringify(products));
   }, [products]);

  useEffect(() => {
    console.log("products=", products);
  }, [products]);

  const addProduct = (obj) => {
    setProducts((prev) => [...prev, { id: crypto.randomUUID(), ...obj }]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const editProduct = (id, obj) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...obj } : p)),
    );
  };

  return (
    <ProductContext1.Provider
      value={{ products, addProduct, deleteProduct, editProduct, setProducts }}
    >
      {children}
    </ProductContext1.Provider>
  );
};

export const useItem = () => useContext(ProductContext1);
