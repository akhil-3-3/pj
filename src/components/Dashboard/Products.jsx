import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useProduct } from "./ProductContext";

const Products = () => {
  const { products, categories } = useProduct();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const searchProducts = useMemo(
    () =>
      products.filter((p) => {
        const matchSearch = p.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchCategory = category === "All" || p.category === category;
        return matchSearch && matchCategory;
      }),
    [products, search, category],
  );

  return (
    <div className="flex flex-col text-center justify-center p-20">
      <h1 className=" font-bold text-3xl  mb-3">Products Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="px-3 border w-180 mx-5 mb-3"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 w-50 border mb-3"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <table className="border">
        <thead>
          <tr className="font-bold bg-blue-300">
            <th className="border">Image</th>
            <th className="border">Title</th>
            <th className="border">Price</th>
          </tr>
        </thead>
        <tbody>
          {searchProducts.length === 0 ? (
            <tr>
              <td className="border bg-green-400">No Products Found!!!</td>
            </tr>
          ) : (
            searchProducts.map((u) => (
              <tr key={u.id}>
                <td className="border bg-amber-300 p-2">
                  <img src={u.image} alt={u.title} className="h-16 mx-auto" />
                </td>
                <td className="border bg-green-400">{u.title}</td>
                <td className="border bg-red-500">{u.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
