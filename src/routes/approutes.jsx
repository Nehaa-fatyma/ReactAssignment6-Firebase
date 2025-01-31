import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../components/home";
import About from "../components/about";
import CreateProd from '../components/Table';
import Contact from "../components/contact";
import ViewProduct from "../components/ProdList";
import NotFound from '../components/Notfound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/create-product/:id?' element={<CreateProd />} />
      <Route path='/product' element={<ViewProduct />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default AppRoutes;
