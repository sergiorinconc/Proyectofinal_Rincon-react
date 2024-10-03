
import { useCartContext } from '../../context/CartContext';

const Checkout = () => {
  const { cartItems, clearCart } = useCartContext();  

  // Función para calcular el total de la compra
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;  
  }, 0);

  const handleCheckout = () => {
    alert(`¡Compra realizada! El total de tu compra es: €${totalPrice.toFixed(2)}`);  
    clearCart();  
  };

  return (
    <div className="checkout">
      <h2>Resumen de la compra</h2>
      <ul>
        {cartItems.length === 0 ? (
          <p>No tienes productos en el carrito.</p>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} unidades - Precio: €{(item.price * item.quantity).toFixed(2)}
            </li>
          ))
        )}
      </ul>

      
      {cartItems.length > 0 && (
        <div>
          <p><strong>Total: €{totalPrice.toFixed(2)}</strong></p>  
          <button onClick={handleCheckout}>Finalizar compra</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;


