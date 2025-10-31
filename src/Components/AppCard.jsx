const formatCount = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num;
};

const AppCard = ({ product, onAppClick }) => {
  const { image, title, downloads, ratingAvg, id } = product;

  return (
    <div
      onClick={onAppClick}
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
                 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5
                 cursor-pointer flex flex-col"
    >
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-lg">No Image</div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-900 leading-tight mb-4 flex-grow">
          {title}
        </h2>

        <div className="flex justify-between items-center">
          <div className="inline-flex items-center bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
            <span className="mr-1 text-base leading-none">
              <img
                src="/icon-downloads.png"
                alt="downloads"
                className="h-3"
              />
            </span>{" "}
            <span>{formatCount(downloads)}</span>
          </div>
          <div className="inline-flex items-center bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full">
            <span className="mr-1 text-base leading-none">
              <img
                src="/icon-ratings.png"
                alt="icon-ratings"
                className="h-3"
              />
            </span>
            <span>{ratingAvg.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;