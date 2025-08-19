import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Process from "./pages/Process";


// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Process" element={<Process />} />

        {/* <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;