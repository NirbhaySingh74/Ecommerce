import LogoImg from "../assets/image.png";
import SearchIcon from "../assets/search.png";
import Cart from "../assets/cart.png";
const Header = () => {
  return (
    <div className="grid grid-flow-col p-4  items-center shadow-md">
      <div className="col-span-1">
        <img src={LogoImg} alt="" className="w-12 cursor-pointer" />
      </div>
      <div className="col-span-10 px-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search products"
          className="w-1/3 px-3 p-1 border border-gray-400 rounded-l-full"
        />
        <button className="p-1 border border-gray-400 rounded-r-full px-2 bg-gray-100">
          <img
            src={SearchIcon}
            alt="search-icon"
            className="h-6 w-8 object-cover bg-transparent"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img src={Cart} alt="" className="w-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
