import ShimmerUi from "./ShimmerUi";

const ShimmerCartList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 justify-center m-4 mx-10">
      {[...Array(30)].map((_, index) => (
        <div key={index}>
          <ShimmerUi />
        </div>
      ))}
    </div>
  );
};

export default ShimmerCartList;
