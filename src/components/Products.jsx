import { useEffect, useState } from "react";
import { PRODUCT_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInput = useSelector((store) => store.cart.searchInput);
  const filterInput = useSelector((store) => store.cart.filterInput);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase())
      // || product.category.toLowerCase() === filterInput.toLowerCase()
    );
    setFilteredProducts(filteredProducts);
  }, [searchInput, products, filterInput]);

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

  const addItems = (item) => {
    dispatch(addItem(item));
    console.log("clicked!");
  };

  if (loading) {
    return <ShimmerUi />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(searchInput);
  console.log(products);
  return (
    <div className="w-full px-4 mx-3">
      {/* <h1 className="font-bold text-center my-4">Products</h1> */}
      <div className="flex flex-wrap justify-center">
        {filteredProducts.length === 0 ? (
          <div className="text-lg font-semibold text-red-500 flex justify-center">
            <h1>No products found</h1>
          </div>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 my-4"
            >
              <Link to={`products/${item.id}`}>
                <img
                  src={item.images[0]}
                  alt=""
                  className="object-cover w-full h-48 cursor-pointer rounded-lg mb-2"
                />
              </Link>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <div className="flex py-1">
                <span className="bg-green-500 p-1 rounded-full">⭐</span>
                <h2 className="text-lg font-semibold px-1">{item.rating}</h2>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">₹{item.price * 83}</h1>
                <button
                  className="py-2 px-4 bg-[#FF9F00] text-lg font-semibold text-gray-200 rounded-sm"
                  onClick={() => addItems(item)}
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
