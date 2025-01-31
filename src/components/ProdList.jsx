import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { db } from "../firebase/config"; // Import Firebase config
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch products from Firestore
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "product"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to fetch products. Please try again later.");
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a product from Firestore
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "product", id));
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Unable to delete the product. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="list-page">
      <h1 className="Prod-List">Product List</h1>
      <Link className="add_btn" to="/create-product">
        Add Product
      </Link>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {products.length > 0 ? (
        <table border="1" cellSpacing="0" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.ProductName}</td>
                <td>{product.Description}</td>
                <td>{product.Price}</td>
                <td>
                  <Link className="action_btn" to={`/create-product/${product.id}`}>
                    Edit
                  </Link>
                  <button
                    className="action_btn"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ViewProduct;

