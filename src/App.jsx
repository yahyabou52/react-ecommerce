import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
function App() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>My First React E-commerce</h1>
      <input type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />      
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
