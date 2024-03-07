import { useState } from "react";
const Sidebar = () => {
  const [pricecheckboxes, setCheckboxes] = useState([
    { priceRange: "$5 - 10$", isChecked: false },
    { priceRange: "$10 - 20$", isChecked: false },
    { priceRange: "$20 - 30$", isChecked: false },
    { priceRange: "$30 - 40$", isChecked: false },
    { priceRange: "$40 - 50$", isChecked: false },
  ]);
  const [categoryBox, setCategoryBox] = useState([
    { item: "Phone", isChecked: false },
    { item: "laptops", isChecked: false },
    { item: "skincare", isChecked: false },
    { item: "groceries", isChecked: false },
  ]);
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...pricecheckboxes];
    updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked;
    setCheckboxes(updatedCheckboxes);
  };

  const handleCheckboxChange2 = (index) => {
    const updatedCheckboxes = [...categoryBox];
    updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked;
    setCategoryBox(updatedCheckboxes);
  };
  return (
    <div className="w-[10%] h-screen border-2 py-5 px-2 m-0">
      {/* category */}
      <div className="p-2">
        <h1 className="font-bold mb-1">Catagory</h1>
        {categoryBox.map((checkbox, index) => (
          <div key={index} className="mt-1">
            <label className="p-2">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange2(index)}
                style={{ borderRadius: "10px" }} // Apply inline style for rounded checkbox
                className="form-checkbox rounded-full h-3 w-3 text-indigo-600 mr-2"
              />
              {checkbox.item}
            </label>
          </div>
        ))}
      </div>
      {/* price */}
      <div className="p-2">
        <h1 className="font-bold mb-1"> Prices</h1>
        {pricecheckboxes.map((checkbox, index) => (
          <div key={index} className="mt-1">
            <label>
              <input
                type="checkbox"
                checked={checkbox.isChecked}
                onChange={() => handleCheckboxChange(index)}
                style={{ borderRadius: "10px" }} // Apply inline style for rounded checkbox
                className="form-checkbox rounded-full h-3 w-3 text-indigo-600 mr-2"
              />
              {checkbox.priceRange}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
