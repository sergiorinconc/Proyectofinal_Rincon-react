
import { useCartContext } from '../../context/CartContext';

const Brief = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="brief">
      <h2>Detalle de la compra</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} unidades
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Brief;
