import { Link } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";

function EditProductPage() {
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default EditProductPage;
