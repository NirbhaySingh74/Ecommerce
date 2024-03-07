import { useEffect, useState } from "react";
import { PRODUCT_API } from "../utils/constant";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(PRODUCT_API);
    const json = await response.json();
    setProductData(json.products);
    console.log(productData);
  };
  console.log(productData);
  return (
    <div className="w-[90%]">
      <h1 className="m-4 font-bold fw">Recommended</h1>
      <div className="flex flex-wrap m-4 gap-3">
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-60 p-4 shadow-md border-2"
          >
            <img src={item.images[0]} alt="" className="object-cover" />
            <h2>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
