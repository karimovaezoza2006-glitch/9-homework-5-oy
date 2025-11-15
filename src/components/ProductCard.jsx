import { useFavorites } from "../context/FavoritesContext";

const ProductCard = ({ item }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isLiked = favorites.some(f => f.title === item.title);

  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition relative">
      <button
        onClick={() => toggleFavorite(item)}
        className="absolute top-3 right-3 p-1"
        aria-label="like button"
      >
        {isLiked ? (
          <span className="text-red-500 text-2xl">❤️</span>
        ) : (
          <span className="text-gray-400 text-2xl">🤍</span>
        )}
      </button>

      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-contain rounded-lg mb-2"
      />

      <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
        {item.title}
      </h2>

      <div className="flex items-center text-yellow-500 text-sm mb-1">
        ★ {item.rating?.rate ?? 4.5}
        <span className="text-gray-500 ml-2">({item.rating?.count ?? 100} sharhlar)</span>
      </div>

      <div className="text-lg font-bold text-green-600 mb-1">{item.price} $</div>

      <div className="text-sm text-gray-500 mb-3">
        {Math.floor(item.price * 1200)} so'm/oyiga
      </div>

      <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm">
        Sotib olish
      </button>
    </div>
  );
};

export default ProductCard;
