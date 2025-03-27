import styles from './ListContainer.module.css';

const ListContainer = ({ children }) => {
  return <div className={styles['list-container']}>{children}</div>;
};

export default ListContainer;