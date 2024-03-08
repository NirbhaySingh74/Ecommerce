import Products from "./Products";
import Sidebar from "./Sidebar";

const Body = ({ searchInput }) => {
  return (
    <div className="flex">
      <Sidebar />
      <Products searchInput={searchInput} />
    </div>
  );
};

export default Body;
