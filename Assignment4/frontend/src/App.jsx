import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">MyShop</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Welcome to MyShop</h1>
        <p>Your one-stop shop for all products</p>
      </header>

      <section className="product-grid">
        {products.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </section>

      {selectedProduct && (
        <section className="product-details">
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.image} />
          <p>Price: {selectedProduct.price}</p>
        </section>
      )}

      <footer className="footer">
        <p>Follow us on
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </p>
        <p>&copy; 2025 MyShop</p>
      </footer>
    </div>
  );
}
