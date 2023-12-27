import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditProductForm() {
  const param = useParams();
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate();

  function getProduct(e) {
    const keyValueName = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [keyValueName]: value });
  }
  async function getProducts() {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      setProduct(response.data?.data);
    } catch (error) {}
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        product
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={product.name}
            onChange={(e) => {
              getProduct(e);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={product.image}
            placeholder="Enter image url here"
            onChange={(e) => {
              getProduct(e);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={product.price}
            placeholder="Enter price here"
            onChange={(e) => {
              getProduct(e);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={product.description}
            placeholder="Enter description here"
            onChange={(e) => {
              getProduct(e);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
