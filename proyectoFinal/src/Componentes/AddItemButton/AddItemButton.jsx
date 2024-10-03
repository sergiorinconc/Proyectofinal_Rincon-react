import PropTypes from 'prop-types'; 
import { useCartContext } from '../../context/CartContext';

const AddItemButton = ({ item, quantity }) => {
  const { addItem } = useCartContext();

  const handleClick = () => {
    addItem(item, quantity); 
  };

  return (
    <button onClick={handleClick}>Agregar al carrito</button>
  );
};


AddItemButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,        
    name: PropTypes.string.isRequired,      
    price: PropTypes.number.isRequired,     
    
  }).isRequired,
  quantity: PropTypes.number.isRequired,    
};

export default AddItemButton;

