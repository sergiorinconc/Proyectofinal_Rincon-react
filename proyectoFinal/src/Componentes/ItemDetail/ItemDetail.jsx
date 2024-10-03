import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { useCartContext } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';

const ItemDetail = ({ item }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);  
  const { addItem } = useCartContext();  

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);  
  };

  const handleAddToCart = () => {
    addItem(item, selectedQuantity);  
  };

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: {item.price}€</p>

      
      <ItemQuantitySelector stock={10} initial={1} onQuantityChange={handleQuantityChange} />

      
      <button onClick={handleAddToCart}>
        Agregar {selectedQuantity} al carrito
      </button>
    </div>
  );
};


ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;


