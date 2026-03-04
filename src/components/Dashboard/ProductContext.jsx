import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
