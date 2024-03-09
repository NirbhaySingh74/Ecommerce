import { useEffect, useState } from "react";
import { PRODUCT_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInput = useSelector((store) => store.search.searchInput);
  const dispatch = useDispatch();
  const addFoodItems = (item) => {
    dispatch(addItem(item));
    console.log("clicked!");
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [searchInput, products]);

  const getData = async () => {
    try {
      const response = await fetch(PRODUCT_API);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json = await response.json();
      setProducts(json.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-[90%] my-5">
      <h1 className="m-4 font-bold fw"></h1>
      <div className="flex flex-wrap mx-20 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center items-center text-lg font-semibold">
            No products found
          </div>
        ) : (
          filteredProducts.map((item) => (
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
                  className="object-cover w-full h-full cursor-pointer rounded-xl py-4"
                />
              </div>
              <h2 className="text-lg font-semibold my-1">{item.title}</h2>
              <div className="flex py-2">
                <span className="bg-green-500 p-1 rounded-full ">⭐</span>
                <h2 className="text-lg font-semibold px-1">{item.rating}</h2>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <h1 className="text-lg font-semibold">${item.price}</h1>
                <button
                  className="py-2 px-4 bg-[#FF9F00] text-lg font-semibold text-gray-200 rounded-sm"
                  onClick={() => addFoodItems(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
