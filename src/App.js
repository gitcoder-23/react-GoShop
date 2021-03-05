// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductsContextProvider from './Global/productContext';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        {/* All Products rap here */}
        {/* It is a child */}
        <Products />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
