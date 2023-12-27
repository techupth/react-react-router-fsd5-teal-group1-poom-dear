import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function ViewProductPage() {
  const [product, setProduct] = useState();
  const param = useParams();
  async function getProduct() {
    try {
      const response = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      console.log(response.data?.data);
      setProduct(response.data?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title {product?.name} </h2>
        <p>price : {product?.price} THB</p>
        <p>{product?.description} </p>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewProductPage;
