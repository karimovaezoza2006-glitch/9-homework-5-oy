import React from "react";

import ProductCard from "./ProductCard";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import card5 from "../assets/img/card5.png";
import card6 from "../assets/img/card6.png";
import card7 from "../assets/img/card7.png";
import card8 from "../assets/img/card8.png";
import card9 from "../assets/img/card9.png";
import card10 from "../assets/img/card10.png";

const Products = () => {
  const products = [
    {
      title: "NIVEA yuz uchun krem",
      price: 12.99,
      image: card1,
      rating: { rate: 4.6, count: 210 },
    },
    {
      title: "Erkaklar uchun parfyum",
      price: 25.5,
      image: card2,
      rating: { rate: 4.3, count: 134 },
    },
    {
      title: "Ayollar sumkasi",
      price: 45.0,
      image: card3,
      rating: { rate: 4.8, count: 310 },
    },
    {
      title: "Bolalar uchun shampun",
      price: 8.75,
      image: card4,
      rating: { rate: 4.2, count: 98 },
    },
    {
      title: "Soch uchun gel",
      price: 15.1,
      image: card5,
      rating: { rate: 4.4, count: 157 },
    },
    {
      title: "NIVEA yuz uchun krem",
      price: 12.99,
      image: card6,
      rating: { rate: 4.6, count: 210 },
    },
    {
      title: "Erkaklar uchun parfyum",
      price: 25.5,
      image: card7,
      rating: { rate: 4.3, count: 134 },
    },
    {
      title: "Ayollar sumkasi",
      price: 45.0,
      image: card8,
      rating: { rate: 4.8, count: 310 },
    },
    {
      title: "Bolalar uchun shampun",
      price: 8.75,
      image: card9,
      rating: { rate: 4.2, count: 98 },
    },
    {
      title: "Soch uchun gel",
      price: 15.1,
      image: card10,
      rating: { rate: 4.4, count: 157 },
    },
  ];

  return (
    <section className="container mx-auto py-10 px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-left">Barcha Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product, index) => {
          const priceMonthly = Math.floor(product.price * 1200);

          return (
            <div
              key={index}
              className="p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.title}
                className="mb-2 w-full h-auto object-contain"
              />
              <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                {product.title}
              </h2>

              <div className="flex items-center text-yellow-500 text-sm mb-1">
                ★ {product.rating?.rate ?? 4.5}
                <span className="text-gray-500 ml-2">
                  ({product.rating?.count ?? 100} sharhlar)
                </span>
              </div>

              <div className="text-lg font-bold text-green-600 mb-1">
                {product.price} $
              </div>
              <div className="text-sm text-gray-500 mb-3">{priceMonthly} so'm/oyiga</div>

              <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm">
                Sotib olish
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
