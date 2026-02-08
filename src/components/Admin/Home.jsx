import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useItem } from "./ProductContext1";
import { useCart } from "./CartContext";
import Cart from "./Cart";

const sizesList = ["S", "M", "L", "XL"];

const Home = () => {
  const { products } = useItem();
  const { cartItems, setCartItems } = useCart();

  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const setOrderType = (productId, orderType) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: orderType,
    }));
    console.log(selectedOptions);
  };

  const toggleSize = (productId, size) => {
    const current = selectedSizes[productId] || [];
    const updated = current.includes(size)
      ? current.filter((s) => s !== size)
      : [...current, size];
    setSelectedSizes({ ...selectedSizes, [productId]: updated });
  };

  const addToCart = (product) => {
    const selected = selectedSizes[product.id] || [];
    const orderType = selectedOptions[product.id];

    if (selected.length === 0 || !orderType) return;

    const copy = [...cartItems];
    const existing = copy.find((p) => p.id === product.id);

    if (existing) {
      console.log(orderType, selected);
      selected.forEach((size) => {
        if (existing.sizes[size]) {
          existing.sizes[size].qty += 1;
        } else {
          existing.sizes[size] = {
            qty: 1,
            price: Number(product.sizes[size]),
          };
        }
      });
    } else {
      const sizeObj = {};
      selected.forEach((size) => {
        sizeObj[size] = {
          qty: 1,
          price: Number(product.sizes[size]),
        };
      });
      console.log(orderType);
      copy.push({
        id: product.id,
        name: product.name,
        image: product.image,
        sizes: sizeObj,
        orderType,
      });
    }

    setCartItems(copy);
    setSelectedSizes({ ...selectedSizes, [product.id]: [] });
  };

  let totalQty = 0;
  let totalPrice = 0;

  cartItems.forEach((p) => {
    Object.values(p.sizes).forEach((s) => {
      totalQty += s.qty;
      totalPrice += s.qty * s.price;
    });
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center px-6 py-4 bg-black text-white">
        <h1 className="text-lg font-semibold">My Store</h1>

        <div className="relative cursor-pointer">
          <ShoppingCart size={26} onClick={() => setCartOpen(true)} />
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 rounded-full">
              {totalQty}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 p-6">
        {products.map((p) => {
          const active = selectedSizes[p.id] || [];
          return (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              {p.image && (
                <img
                  src={(p.image)}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}
              <h2 className="font-semibold">{p.name}</h2>
              <div className="text-sm mt-1">
                {sizesList.map(
                  (s) =>
                    p.sizes[s] && (
                      <p key={s}>
                        {s} : ₹{p.sizes[s]}
                      </p>
                    ),
                )}
              </div>
              <div className="flex gap-2 mt-2">
                {sizesList.map(
                  (s) =>
                    p.sizes[s] && (
                      <button
                        key={s}
                        onClick={() => toggleSize(p.id, s)}
                        className={`border px-2 py-1 rounded text-sm ${
                          active.includes(s) ? "bg-black text-white" : ""
                        }`}
                      >
                        {s}
                      </button>
                    ),
                )}
              </div>

              <div className="mt-2 flex gap-4 text-sm">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name={`orderType-${p.id}`}
                    checked={selectedOptions[p.id] === "takeaway"}
                    onChange={() => setOrderType(p.id, "takeaway")}
                  />
                  TakeAway
                </label>

                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name={`orderType-${p.id}`}
                    checked={selectedOptions[p.id] === "COD"}
                    onChange={() => setOrderType(p.id, "COD")}
                  />
                  COD
                </label>
              </div>
              {p.stock <= 5 && p.stock != 0 && (
                <p className="flex text-red-600">Stock is Running Out!!!</p>
              )}
              {p.stock === 0 && (
                <p className="flex text-red-600">Out of Stock!!!</p>
              )}
              <button
                onClick={() => addToCart(p)}
                className="mt-3 w-full bg-black text-white py-1 rounded"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-96 h-full bg-white z-50 transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Cart totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Home;
