import { useEffect, useState, useMemo } from "react";
import { PRODUCT_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import debounce from "lodash.debounce";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInput = useSelector((store) => store.cart.searchInput);
  // const filterInput = useSelector((store) => store.cart.filterInput);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(PRODUCT_API);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const json = await response?.json();
      setProducts(json?.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  const debouncedFilter = useMemo(
    () =>
      debounce((searchText) => {
        const filteredProducts = products.filter(
          (product) =>
            product?.title?.toLowerCase().includes(searchText.toLowerCase()) ||
            product?.brand?.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
      }, 300), // 300ms debounce delay
    [products]
  );

  useEffect(() => {
    debouncedFilter(searchInput);
    return () => debouncedFilter.cancel(); // Cleanup debounce on unmount
  }, [searchInput, debouncedFilter]);

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

  return (
    <div className="w-full px-8 mx-3">
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProducts.length === 0 ? (
          <div className="text-lg font-semibold text-red-500 flex justify-center">
            <h1>No products found</h1>
          </div>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 my-4 gap-3 shadow-xl transition-transform transform hover:scale-105"
            >
              <Link to={`products/${item.id}`}>
                <img
                  src={item.images[0]}
                  alt=""
                  className="object-cover w-full h-48 cursor-pointer rounded-lg mb-2"
                />
              </Link>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <div className="flex items-center py-1">
                <span className="bg-green-500 p-1 rounded-full">⭐</span>
                <h2 className="text-lg font-semibold px-1">{item.rating}</h2>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">
                  ₹{Math.round(item.price * 83)}
                </h1>
                <button
                  className="py-2 px-4 bg-[#FF9F00] text-lg font-semibold text-gray-200 rounded-sm hover:bg-[#FF8500] transition-colors"
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
