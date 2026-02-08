import React, { useState } from "react";
import { useCart } from "./CartContext";

const Order = () => {
  const { orders, deleteOrder2 } = useCart();
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((o) =>
    o.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by name or order type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      <table className="w-full border text-center mb-5">
        <thead>
          <tr className=" bg-gray-500 text-white">
            <th>Image</th>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Order Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.length === 0 && (
            <tr>
              <td colSpan="7" className="p-4 text-gray-500">
                No orders found
              </td>
            </tr>
          )}

          {filteredOrders.map((o) =>
            Object.entries(o.sizes).map(([size, data]) => (
              <tr key={o.id + size} className="border">
                <td>
                  {o.image && (
                    <img
                      className="w-12 h-12 mx-auto object-cover"
                      src={(o.image)}
                      alt={o.name}
                    />
                  )}
                </td>

                <td>
                  {o.name}
                  {console.log(o, "hjhuj")}
                </td>
                <td>{size}</td>
                <td>{data.qty}</td>
                <td>₹{data.qty * data.price}</td>
                <td>{o.orderType}</td>

                <td>
                  <button
                    onClick={() => deleteOrder2(o.orderId, size)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
