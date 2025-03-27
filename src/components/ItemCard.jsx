import styles from './ItemCard.module.css';

export const ItemCard = ({ item }) => {
  return (
    <li className={styles['item-card']}>
      <h4 className={`${styles['item-card__title']} ${styles[`item-card__title--${item.status.replace(' ', '-')}`]}`}>
        {item.title}
      </h4>
      <p className={styles['item-card__description']}>{item.description}</p>
      <span className={`${styles['item-card__status']} ${styles[`item-card__status--${item.status.replace(' ', '-')}`]}`}>
        {item.status === 'done' ? 'DONE' : item.status === 'in progress' ? 'IN PROGRESS' : 'PENDING'}
      </span>
    </li>
  );
};

export default ItemCard;