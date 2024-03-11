const ShimmerUi = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md m-4 items-center">
      <div className="animate-pulse">
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-2"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-300 h-4 w-4 rounded-full mr-2"></div>
              <div className="h-4 bg-gray-300 rounded w-8"></div>
            </div>
            <div className="bg-gray-300 h-10 w-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUi;
