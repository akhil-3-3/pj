import { useState } from "react";
import { useProduct } from "./CategoryContext1";

const Category1 = () => {
  const { categories, addCategory, deleteCategory, editCategory } =
    useProduct();

  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [mode, setMode] = useState("add");
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    setShowForm(false);
    setName("");
    setId(null);
    setMode("add");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-lg">Category</h1>

        <button
          className="bg-black text-white px-4 py-1 rounded"
          onClick={() => {
            setMode("add");
            setShowForm(true);
            setName("");
            setId(null);
          }}
        >
          Add Category
        </button>
      </div>

      <table className="w-full border text-center">
        <thead>
          <tr className="border bg-gray-500">
            <th className="p-2">Name</th>
            <th className="p-2">Products</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border">
              <td className="p-2">{cat.name}</td>
              <td className="p-2">{cat.products}</td>
              <td className="p-2">{cat.stock}</td>
              <td className="p-2">
                <div className="flex justify-center gap-2">
                  <button
                    className="bg-yellow-400 px-3 py-1 rounded"
                    onClick={() => {
                      setMode("edit");
                      setId(cat.id);
                      setName(cat.name);
                      setShowForm(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => deleteCategory(cat.id)}
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
        <div className="mt-5 flex gap-2">
          <input
            type="text"
            className="border p-2"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />

          {mode === "add" ? (
            <button
              className="bg-blue-500 text-white px-4"
              onClick={() => {
                addCategory(name);
                closeForm();
              }}
            >
              Add
            </button>
          ) : (
            <button
              className="bg-green-600 text-white px-4"
              onClick={() => {
                editCategory(id, name);
                closeForm();
              }}
            >
              Update
            </button>
          )}

          <button className="border px-4" onClick={closeForm}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Category1;
