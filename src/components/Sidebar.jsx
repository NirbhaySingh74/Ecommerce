import { useDispatch } from "react-redux";
import { setFilterInput } from "../utils/cartSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    dispatch(setFilterInput(category));
  };

  return (
    <div className="hidden sm:block w-[10%] h-screen border-2 py-5 px-2 m-0">
      <div className="p-2">
        <h1 className="font-bold mb-1">Category</h1>
        <label>
          <input type="checkbox" onChange={() => handleFilter("laptops")} />{" "}
          Laptops
        </label>
        {/* You can add more checkboxes for other categories if needed */}
      </div>
    </div>
  );
};

export default Sidebar;
