
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: {item.price}€</p>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
};

export default Item;
