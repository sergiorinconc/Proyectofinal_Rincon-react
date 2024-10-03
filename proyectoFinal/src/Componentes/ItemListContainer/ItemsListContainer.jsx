import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import PropTypes from 'prop-types'; 
import '../../styles/App.css';

const ItemsListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'Chamarras',  price: 300, category: 'ropa', image: '/images/producto1.jpg' },
      { id: 2, name: 'Pantalones',  price: 150, category: 'ropa', image: '/images/pants.jpg' },
      { id: 3, name: 'Camisetas', description: 'Descripción 4', price: 100, category: 'ropa', image: '/images/Stones.jpg' },
      { id: 4, name: 'Guitarras', description: 'Descripción 2', price: 500, category: 'instrumentos', image: '/images/producto2.jpg' },
      { id: 5, name: 'Bajos', description: 'Descripción 4', price: 400, category: 'instrumentos', image: '/images/Bass.jpg' },
      { id: 6, name: 'Baterias', description: 'Descripción 3', price: 1300, category: 'instrumentos', image: '/images/Batery.jpg' },
      { id: 7, name: 'Tickets Bronce', description: 'Descripción 5', price: 500, category: 'tickets', image: '/images/Ticket_bronze.jpg' },
      { id: 8, name: 'Tickets Silver', description: 'Descripción 5', price: 900, category: 'tickets', image: '/images/Ticket_silver.jpg' },
      { id: 9, name: 'Tickets Golden', description: 'Descripción 3', price: 1200, category: 'tickets', image: '/images/producto3.jpg' },
    ];
    
    if (categoryId) {
      setItems(mockItems.filter(item => item.category === categoryId));
    } else {
      setItems(mockItems);
    } 
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
  
};

ItemsListContainer.propTypes = {
  greeting: PropTypes.string.isRequired, 
};

export default ItemsListContainer;
