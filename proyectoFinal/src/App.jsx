// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemsListContainer from './Componentes/ItemListContainer/ItemsListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Checkout from './Componentes/Checkout/Checkout';
import Brief from './Componentes/Brief/Brief';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting="¡Bienvenidos a Mi Tienda!" />} />
          <Route path="/category/:categoryId" element={<ItemsListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/brief" element={<Brief />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;


