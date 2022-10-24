import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import About from "./pages/about";

export default function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/catalogue/:productId" element={<Product/>} />
      </Routes>
    </Router>
  );
}
