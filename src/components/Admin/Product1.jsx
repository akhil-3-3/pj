import { useState } from "react";
import { useItem } from "./ProductContext1";
import { useProduct } from "./CategoryContext1";

const sizesList = ["S", "M", "L", "XL"];
const orderList = ["COD", "TAKEWAY"];

const Product1 = () => {
  const { products, addProduct, deleteProduct, editProduct } = useItem();
  const { categories } = useProduct();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [sizes, setSizes] = useState({});
  const [otype, setOtype] = useState([]);
  const [image, setImage] = useState("");

  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSizeChange = (size) => {
    setSizes((prev) =>
      prev[size] !== undefined
        ? Object.fromEntries(Object.entries(prev).filter(([k]) => k !== size))
        : { ...prev, [size]: "" },
    );
  };

  const handleSizeValueChange = (size, value) => {
    setSizes((prev) => ({ ...prev, [size]: value }));
  };

  const handleOrderChange = (order) => {
    setOtype((prev) =>
      prev.includes(order)
        ? prev.filter((o) => o !== order)
        : [...prev, order],
    );
  };

  const resetForm = () => {
    setName("");
    setCategory("");
    setStock("");
    setSizes({});
    setOtype([]);
    setImage("");
    setEditId(null);
    setShowForm(false);
  };

  const handleSubmit = () => {
    const data = {
      name,
      category,
      stock: Number(stock),
      sizes,
      otype,
      image,
    };

    editId ? editProduct(editId, data) : addProduct(data);
    resetForm();
  };

  return (
    <div className="p-4">
      <button
        className="bg-black text-white px-4 py-1 mb-4"
        onClick={() => setShowForm(true)}
      >
        Add Product
      </button>

      <table className="w-full border text-center mb-5">
        <thead>
          <tr className="border bg-gray-500 text-white">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Order Type</th>
            <th>Stock</th>
            <th>Sizes</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border">
              <td className="p-3">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 mx-auto object-cover"
                  />
                )}
              </td>

              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.otype.join(", ")}</td>
              <td>{p.stock}</td>

              <td>
                {Object.entries(p.sizes || {}).map(([size, value]) => (
                  <div key={size}>
                    {size}: {value}
                  </div>
                ))}
              </td>

              <td>
                <div className="flex gap-2 justify-center">
                  <button
                    className="bg-yellow-400 px-2"
                    onClick={() => {
                      setEditId(p.id);
                      setName(p.name);
                      setCategory(p.category);
                      setStock(p.stock);
                      setSizes(p.sizes || {});
                      setOtype(p.otype || []);
                      setImage(p.image || "");
                      setShowForm(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-2"
                    onClick={() => deleteProduct(p.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="border p-4 w-96">
          <input
            className="border p-2 w-full mb-2"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="border p-2 w-full mb-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {orderList.map((o) => (
            <label key={o} className="flex gap-1 items-center">
              <input
                type="checkbox"
                checked={otype.includes(o)}
                onChange={() => handleOrderChange(o)}
              />
              {o}
            </label>
          ))}

          <input
            type="number"
            className="border p-2 w-full mb-2"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <div className="flex flex-col gap-2 mb-3">
            {sizesList.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <label className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    checked={sizes[s] !== undefined}
                    onChange={() => handleSizeChange(s)}
                  />
                  {s}
                </label>

                {sizes[s] !== undefined && (
                  <input
                    type="number"
                    value={sizes[s]}
                    onChange={(e) =>
                      handleSizeValueChange(s, e.target.value)
                    }
                    className="border px-2 py-1 rounded w-24"
                  />
                )}
              </div>
            ))}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onload = (ev) => setImage(ev.target.result);
              reader.readAsDataURL(file);
            }}
          />

          <div className="flex gap-2 mt-3">
            <button
              className="bg-green-600 text-white px-4"
              onClick={handleSubmit}
            >
              {editId ? "Update" : "Add"}
            </button>

            <button className="border px-4" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product1;
