import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ShimmerUi from "./ShimmerUi";
const AboutProduct = () => {
  const [suggestionData, setSuggestionData] = useState([]);
  const [productData, setProductData] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const addItemIn = (item) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(PRODUCT_API + id);
    const data = await response.json();
    setProductData(data);
  };

  useEffect(() => {
    getSuggestionData();
  }, [productData]); // Trigger effect when productData changes

  const getSuggestionData = async () => {
    try {
      const response = await fetch(PRODUCT_API);
      const data = await response.json();
      // Filter suggestion data based on category of current product
      const filteredData = data.products.filter(
        (item) =>
          item.category === productData.category && item.id !== productData.id
      );
      setSuggestionData(filteredData);
    } catch (error) {
      console.error("Error fetching suggestion data:", error);
    }
  };
  console.log(suggestionData);
  if (productData.length === 0) return <ShimmerUi />;
  return (
    <div className="m-4">
      {/* product to show */}
      <div className="flex justify-center my-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md">
          <img
            className="w-full h-auto"
            src={productData.thumbnail}
            alt="Product Thumbnail"
          />
          <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center py-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                {productData.title}
              </h1>
              <h1 className="text-base sm:text-lg font-semibold">
                ₹{productData.price * 83}
              </h1>
            </div>
            <h2 className="text-base text-gray-600 mb-4">
              {productData.description}
            </h2>
            <div className="text-center ">
              <button
                className="py-2 px-4 bg-[#FF9F00]  sm:text-lg font-semibold text-gray-200 rounded-sm text-center items-center"
                onClick={() => addItemIn(productData)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* suggestion part to show */}
      <div className="my-3">
        <h2 className="text-center text-lg font-semibold px-1">
          Similar products
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 px-4 my-5 md:flex-row">
          {suggestionData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Display suggestion item */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-gray-600">₹{item.price * 83}</p>
                <button
                  onClick={() => addItemIn(item)}
                  className="mt-2 py-2 px-4 bg-[#FF9F00] text-lg font-semibold text-gray-200 rounded-sm w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
