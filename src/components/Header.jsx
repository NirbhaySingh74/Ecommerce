import LogoImg from "../assets/image.png";

import Cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../utils/cartSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleSearchInputChange = (e) => {
    dispatch(setSearchInput(e.target.value));
  };
  return (
    <div className="grid grid-flow-col p-4 items-center shadow-md">
      <div className="col-span-1">
        <Link to="/">
          {" "}
          <img src={LogoImg} alt="" className="w-12 cursor-pointer" />
        </Link>
      </div>
      <div className="col-span-10 px-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search products and Brands"
          className="w-1/3 px-3 p-1 border border-gray-400 rounded-md"
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="col-span-1">
        <Link to="/cart">
          <span className=" font-bold  absolute top-6 right-[8%] text-red-500">
            {cartItems.length}
          </span>
          <img src={Cart} alt="" className="w-12 h-14 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
