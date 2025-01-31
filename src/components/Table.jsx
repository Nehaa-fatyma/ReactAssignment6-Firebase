import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase/config";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const CreateProd = () => {
  const [formData, setFormData] = useState({
    ProductName: "",
    Description: "",
    Price: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const Params = useParams();

  useEffect(() => {
    if (Params.id) {
      getProductData();
    }
  }, [Params.id]);

  const getProductData = async () => {
    try {
      const productRef = doc(db, "product", Params.id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        setFormData(productSnap.data());
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const InputChanger = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.ProductName !== "" && formData.Description !== "" && formData.Price !== "") {
      try {
        if (Params.id) {
          // Update existing product
          const productRef = doc(db, "product", Params.id);
          await updateDoc(productRef, formData);
          navigate("/product"); // Navigate to product list after successful update
        } else {
          // Create new product
          await addDoc(collection(db, "product"), formData);
          setFormData({
            ProductName: "",
            Description: "",
            Price: "",
          });
          navigate("/product"); // Navigate to product list after successful creation
        }
        setError(""); // Clear any previous error
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("An error occurred while submitting the form.");
      }
    } else {
      setError("Please fill all the fields!");
    }
  };

  const notify = () => toast.success("Product Added Successfully!");

  return (
    <>
      <h2 className="Edit-prod">{Params.id ? "Edit Product Here!" : "Create Product"}</h2>
      <form onSubmit={handleSubmit}>
        {error && <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>}

        <div>
          <label>Product Name</label>
          <input
            type="text"
            onChange={InputChanger}
            name="ProductName"
            value={formData.ProductName}
            placeholder="Enter your product name"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="Description"
            onChange={InputChanger}
            value={formData.Description}
            placeholder="Enter your product description"
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            onChange={InputChanger}
            name="Price"
            value={formData.Price}
            placeholder="Enter your product price"
          />
        </div>
        <div>
          <input className="submit_btn" type="submit" value="submit" onClick={notify} />
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default CreateProd;
