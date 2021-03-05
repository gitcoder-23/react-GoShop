// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Banner from './components/Banner';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext'
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
        {/* All Products rap here */}
        {/* It is a child */}
        <Router>
        <Navbar />
        {/* <Banner /> */}
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
