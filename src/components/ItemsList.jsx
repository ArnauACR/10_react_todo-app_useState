import { ItemCard } from './ItemCard';
import styles from './ItemsList.module.css';

export const ItemsList = ({ itemsList }) => {
  if(itemsList.length === 0) return <p>Empty list</p>
  
  return (
    <ul className={styles['items-list']}>
      {itemsList.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemsList;