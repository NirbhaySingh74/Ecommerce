import { Link } from "react-router-dom";
const NoItemInCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt="image"
        className="w-1/4"
      />
      <h3 className="text-2xl text-zinc-500 my-2">Your cart is empty</h3>
      <p>You can go to home page to view more restaurants</p>
      <Link to="/">
        <button className="py-2 px-5 bg-orange-500 mt-4 text-white">
          EXPLORE ITEMS
        </button>
      </Link>
    </div>
  );
};
export default NoItemInCart;
