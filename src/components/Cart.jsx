import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import NoItemInCart from "./NoItemInCart";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  if (cartItems.length === 0) return <NoItemInCart />;
  return (
    <div className="">
      <h1 className="text-center my-5 text-2xl font-bold">Your CartItems</h1>
      <div className="flex flex-col justify-center items-center my-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="w-1/2 p-4 flex justify-between shadow-xl items-center my-4"
          >
            <div className="flex items-center gap-6">
              <img src={item.images[0]} alt="" className="w-32 h-32" />
              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <h3 className="text-xl text-gray-600">Price: ${item.price}</h3>
                <div className="flex items-center mt-4 gap-1">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-3 py-1 rounded-sm bg-gray-200 "
                  >
                    ➖
                  </button>
                  <span className="text-2xl font-bold px-6  rounded-sm shadow-sm border-2">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="px-3 py-1 rounded-sm bg-gray-200"
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Price: ${item.price * item.quantity}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center my-3 text-2xl font-bold">
        Subtotal: ${totalAmount}
      </h2>
    </div>
  );
};

export default Cart;
