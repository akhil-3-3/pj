import { createContext, useContext, useState } from "react";

const CategoryContext1 = createContext();

export const Categoryprovider1 = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const addCategory = (name) => {
    setCategories([
      ...categories,
      { id: crypto.randomUUID(), name, product: 0, stock: 0 },
    ]);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const editCategory = (id, name) => {
    setCategories(
      categories.map((cat) => (cat.id === id ? { ...cat, name } : cat)),
    );
  };
  return (
    <CategoryContext1.Provider
      value={{ categories, addCategory, deleteCategory, editCategory }}
    >
      {children}
    </CategoryContext1.Provider>
  );
};

export const useProduct = () => useContext(CategoryContext1);
