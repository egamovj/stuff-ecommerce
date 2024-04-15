/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../../styles/Product.module.jsx";

const Product = ({ images }) => {
  const currentImage = images[0];

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        {images.map(({ image, i }) => (
          <div
            key={i}
            className={styles.image}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
