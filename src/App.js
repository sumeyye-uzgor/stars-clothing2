import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Cart from "./components/Cart";
import ProductContainer from "./components/ProductContainer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Cart />
      <ProductContainer />
    </div>
  );
};

export default App;
