import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
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
      console.log(data);
      const filteredData = data.products.filter(
        (item) => item.category === productData.category
      );
      setSuggestionData(filteredData);
    } catch (error) {
      console.error("Error fetching suggestion data:", error);
    }
  };
  console.log(suggestionData);
  return (
    <div>
      {/* product to show */}
      <div className="flex justify-center my-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md">
          <img
            className="w-full h-auto"
            src={productData.thumbnail}
            alt="Product Thumbnail"
          />
          <div className="p-4">
            <div className="flex justify-between items-center py-2">
              <h1 className="text-2xl font-bold text-gray-800">
                {productData.title}
              </h1>
              <h1 className="text-lg font-semibold">${productData.price}</h1>
            </div>
            <h2 className="text-lg text-gray-600">{productData.description}</h2>
          </div>
          <div className="my-2 text-center">
            {" "}
            {/* Reduced margin */}
            <button
              className="py-2 px-4 bg-[#FF9F00] text-lg font-semibold text-gray-200 rounded-sm"
              onClick={() => addItemIn(productData)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {/* suggestion part to show */}
      <div className="my-8">
        <h2 className="text-center text-lg font-semibold px-1">
          Similar products
        </h2>
        <div className="flex flex-no-wrap justify-center items-center gap-4 px-4 my-5">
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
                <p className="text-gray-600">${item.price}</p>
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
