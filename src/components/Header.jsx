import LogoImg from "../assets/image.png";
import Cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../utils/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleSearchInputChange = (e) => {
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <div className="grid grid-cols-12 p-4 items-center shadow-md">
      <div className="col-span-2 sm:col-span-1">
        <Link to="/">
          <img src={LogoImg} alt="" className="w-12 cursor-pointer" />
        </Link>
      </div>
      <div className="col-span-8 sm:col-span-10 px-4 sm:px-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search products and brands"
          className="w-full px-3 p-1 border border-gray-400 rounded-md"
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="col-span-2 sm:col-span-1 text-center">
        <Link to="/cart" className="relative inline-block">
          <span className="font-bold absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 rounded-full bg-red-500 text-white">
            {cartItems.length}
          </span>
          <img src={Cart} alt="" className="w-12 h-12 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
