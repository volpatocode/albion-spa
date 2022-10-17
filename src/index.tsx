import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";

export default function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalogue/:productId" element={<Product/>} />
      </Routes>
    </Router>
  );
}
