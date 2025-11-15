import React from "react";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Sevimlilar ({favorites.length})</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">Hozircha hech narsa tanlanmagan 😊</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img src={item.image} className="w-full h-40 object-cover rounded" />
              <h2 className="mt-3 font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price.toLocaleString()} so‘m</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
