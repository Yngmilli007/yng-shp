import {Routes, Route} from 'react-router-dom';
import {Navbar} from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/cart'element={<Cart />}/>
      </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
