
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../../styles/App.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'Chamarras', description: 'Luce con estilo y comodidad con nuestras Chamarras de Estilo Musical, diseñadas para aquellos que viven y respiran música. Hechas con materiales de alta calidad, estas chamarras ofrecen una combinación perfecta de moda y funcionalidad, ideales para cualquier ocasión, ya sea un concierto, una salida casual o simplemente para mostrar tu amor por la música.', price: 300, image: '/images/producto1.jpg' },
      { id: 3, name: 'Camisetas', description: 'Prenda icónica con el famoso logo de la banda. Confortable y perfecta para fans del rock.', price: 100, image: '/images/Stones.jpg' },
      { id: 2, name: 'Pantalones', description: 'Estilo moderno y funcional, ideal para actividades al aire libre. Comodidad y durabilidad garantizadas.', price: 150, image: '/images/pants.jpg' },
      { id: 4, name: 'Guitarras', description: 'Descubre la excelencia musical con las Guitarras Gibson, un ícono en el mundo de la música desde 1902. Reconocidas por su calidad superior y su sonido distintivo, las guitarras Gibson son la elección preferida de músicos de todos los géneros, desde el rock hasta el jazz. Cada guitarra está diseñada con precisión, utilizando materiales de primera calidad como caoba y arce, que contribuyen a su resonancia y tonalidad únicas', price: 500, image: '/images/producto2.jpg' },
      { id: 5, name: 'Bajos', description: 'Instrumento de alta calidad con un sonido potente y claro. Ideal para todos los niveles de habilidad.', price: 400, image: '/images/Bass.jpg' },
      { id: 6, name: 'Baterias', description: 'Ofrece un sonido excepcional y una construcción duradera. Perfecta para ensayos y presentaciones en vivo.', price: 1300, image: '/images/Batery.jpg' },
      { id: 7, name: 'Tickets Bronce', description: 'Acceso básico.', price: 500, image: '/images/Ticket_bronze.jpg' },
      { id: 8, name: 'Tickets Silver', description: ' Beneficios adicionales.', price: 900, image: '/images/Ticket_silver.jpg' },
      { id: 9, name: 'Tickets Golden', description: 'Acceso VIP y mejor ubicación.', price: 1200, image: '/images/producto3.jpg' },
    
      
    ];
    const foundItem = mockItems.find(product => product.id === parseInt(itemId));
    setItem(foundItem);
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
