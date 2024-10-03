
import { FaShoppingCart } from 'react-icons/fa';  
import { useCartContext } from '../../context/CartContext';
import '../../styles/App.css';

const CartWidget = () => {
  const { totalItems } = useCartContext();
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="badge">{totalItems}</span>
    </div>
  );
};

export default CartWidget;
