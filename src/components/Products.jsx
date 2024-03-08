import { useEffect, useState } from "react";
import { PRODUCT_API } from "../utils/constant";

const Products = ({ searchInput }) => {
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredProducts = productData.filter(
      (product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [searchInput, productData]);

  const getData = async () => {
    try {
      const response = await fetch(PRODUCT_API);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json = await response.json();
      setProductData(json.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(productData);
  return (
    <div className="w-[90%]">
      <h1 className="m-4 font-bold fw">Recommended</h1>
      <div className="flex flex-wrap mx-20 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-72 p-6 shadow-xl border-2 rounded-xl"
          >
            {/* Set a fixed height for the container div */}
            <div style={{ height: "200px" }}>
              {/* Set fixed width and height for the image */}
              <img
                src={item.images[0]}
                alt=""
                className="object-cover w-full h-full cursor-pointer rounded-xl"
              />
            </div>
            <h2 className="text-lg font-semibold my-1">{item.title}</h2>
            <div className="flex py-2">
              <span className="bg-green-500 p-1 rounded-full ">⭐</span>
              <h2 className="text-lg font-semibold px-1">{item.rating}</h2>
            </div>
            <div className="flex justify-between mt-2 items-center">
              <h1 className="text-lg font-semibold">${item.price}</h1>
              <button className="py-2 px-4 bg-[#FF9F00] text-lg font-semibold text-gray-200 rounded-sm">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
