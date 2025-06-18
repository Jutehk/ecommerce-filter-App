import { useState } from "react";
import { products } from "./data/products";
import "./styles/app.css";

function App() {
  const [category, setCategory] = useState("All");

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="container">
      <h1 className="title">🛍️ Product Filter</h1>

      <select
        className="dropdown"
        data-testid="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
      </select>

      <div className="product-list" data-testid="product-list">
        {filtered.map(p => (
          <div key={p.id} className="product" data-testid="product-item">
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>
            <p className="rating">⭐ {p.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
