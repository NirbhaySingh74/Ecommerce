import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.search.items);
  const totalAmount = useSelector((store) => store.search.totalAmount);
  console.log(cartItems);
  return (
    <div className="">
      <h1 className="text-center my-5 text-2xl font-bold">Your CartItems</h1>
      <div className="flex flex-col justify-center items-center my-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="w-1/3 p-4 flex justify-around shadow-xl gap-6 items-center my-4"
          >
            <div className="w-32">
              <img src={item.images[0]} alt="" />
            </div>
            <div>
              <h2 className="text-center my-3 text-2xl font-bold">
                {item.title}
              </h2>
              <h2 className="text-center my-3 text-2xl font-bold">
                Price : {`$${item.price}`}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center my-3 text-2xl font-bold">
        subtotal : {`$${totalAmount}`}
      </h2>
    </div>
  );
};

export default Cart;
