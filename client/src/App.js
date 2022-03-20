import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
