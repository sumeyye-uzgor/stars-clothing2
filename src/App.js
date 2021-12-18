import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import shopData from "./db/ShopData";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div className="">
      <Navbar />
      {shopData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div>Hello World</div>
    </div>
  );
};

export default App;
