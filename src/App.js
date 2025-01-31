import "./app.css";
import Header from "./components/header";
import AppRoutes from "./routes/approutes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
