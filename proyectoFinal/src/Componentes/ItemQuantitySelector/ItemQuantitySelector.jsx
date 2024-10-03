import { useState } from 'react';
import PropTypes from 'prop-types'; 

const ItemQuantitySelector = ({ stock, initial = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initial);


  const handleAdd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1); 
    }
  };

  
  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1); 
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleSubtract} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={handleAdd} disabled={quantity >= stock}>+</button>
    </div>
  );
};


ItemQuantitySelector.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onQuantityChange: PropTypes.func.isRequired,
};

export default ItemQuantitySelector;

