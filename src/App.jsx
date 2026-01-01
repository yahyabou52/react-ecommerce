import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const subCategories = [
  ...new Set(
    products
      .filter(
        (p) => category === "All" || p.category === category
      )
      .map((p) => p.subCategory)
  ),
];
  const [subCategory, setSubCategory] = useState("All");
  const filteredProducts = products.filter((product) => {
  const matchSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || product.category === category;

  const matchSubCategory =
    subCategory === "All" || product.subCategory === subCategory;

  return matchSearch && matchCategory && matchSubCategory;
});

  return (
    <div>
      <h1>My First React E-commerce</h1>
      <input type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    <div className="filters">
      <button onClick={() => {
        setCategory("All");
        setSubCategory("All");
      }}>
        All
      </button>

      <button onClick={() => {
        setCategory("Clothing");
        setSubCategory("All");
      }}>
        Clothing
      </button>

      <button onClick={() => {
        setCategory("Accessories");
        setSubCategory("All");
      }}>
        Accessories
      </button>
    </div>

    {category !== "All" && (
      <div className="filters">
        {subCategories.map((sub) => (
          <button key={sub} onClick={() => setSubCategory(sub)}>
            {sub}
          </button>
        ))}
      </div>
    )}

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  );
}

export default App;
