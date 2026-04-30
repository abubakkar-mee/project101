import React from "react";

const products = [
  {
    id: 1,
    name: "Product One",
    price: "$29",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product Two",
    price: "$49",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product Three",
    price: "$19",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Product Four",
    price: "$99",
    image: "https://via.placeholder.com/300",
  },
];

export default function ProductCatalog() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product Catalog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.price}</p>

              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
