import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      const newProduct = products.filter((product) => {
        id !== products.id;
      });
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <Link to="/product/create">
          <button>Create Product</button>
        </Link>
      </div>
      <div className="product-list">
        {products.map((product, index) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <Link to={`/product/view/${product.id}`}>
                    <button className="view-button">View</button>
                  </Link>
                  <Link to={`/product/edit/${product.id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </div>
              </div>

              <button
                className="delete-button"
                onClick={() => {
                  handleDelete(product.id);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
