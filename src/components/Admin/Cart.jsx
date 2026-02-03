import { Minus, Plus } from "lucide-react";
import { useCart } from "./CartContext";

const Cart = ({ totalPrice, placeOrder }) => {
  const { cartItems, increaseQty, decreaseQty, setOrders } = useCart();

  return (
    <div className="p-4 flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-3">Cart</h2>

      <div className="flex-1 overflow-y-auto">
        {cartItems.length === 0 && (
          <p className="text-gray-500 text-center">Cart is empty</p>
        )}

        {cartItems.map((product, pIndex) => (
          <div key={product.id} className="border p-2 mb-2 rounded">
            <p className="font-medium">{product.name}</p>

            {Object.keys(product.sizes).map((size) => {
              const data = product.sizes[size];
              return (
                <div
                  key={size}
                  className="flex justify-between items-center mt-1"
                >
                  <span>
                    {size} – ₹{data.price}
                  </span>

                  <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQty(pIndex, size)}>
                      <Minus size={14} />
                    </button>
                    <span>{data.qty}</span>
                    <button onClick={() => increaseQty(pIndex, size)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-2 border-t pt-2">
          <div className="flex justify-between font-semibold mb-2">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={() => setOrders(cartItems)}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
