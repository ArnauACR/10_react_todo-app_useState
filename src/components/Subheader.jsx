import styles from './Subheader.module.css';

const Subheader = ({ subtitle }) => {
  return (
    <div className={styles.subheader}>
      <h2 className={styles.subheader__title}>{subtitle}</h2>
    </div>
  );
};

export default Subheader;