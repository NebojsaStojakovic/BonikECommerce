import './index.css';
import Header from './common/header/Header'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Pages from './pages/Pages';
import Data from './components/Data'
import { useState } from 'react';
import Cart from './common/cart/Cart';



function App() {
  const {productItems} = Data

  const [cartItem, setCartItem] = useState([])

   const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }
   const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  const removeItem = (product) => {
    const newItems = cartItem.filter((item) => item.id !== product.id)
    setCartItem(newItems);
  }
  return (
    <>
    <BrowserRouter>
    <Header cartItem={cartItem}/>
      <Routes>
        <Route path="/" exact element={<Pages productItems={productItems} addToCart={addToCart}/>}/>

        <Route path="/cart" exact element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeItem={removeItem}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
