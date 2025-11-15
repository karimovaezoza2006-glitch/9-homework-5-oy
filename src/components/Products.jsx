import ProductCard from "./ProductCard";
import card1 from "../assets/img/card1.png";
// ... boshqa rasm importlari

const products = [
  {
    title: "NIVEA yuz uchun krem",
    price: 12.99,
    image: card1,
    rating: { rate: 4.6, count: 210 },
  },
  // ... boshqa mahsulotlar
];

const Products = () => {
  return (
    <section className="container mx-auto py-10 px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-8 text-left">Barcha Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} item={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
