import styles from "./ContentItem.module.css";

export const ContentItem = ({ title, image, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
