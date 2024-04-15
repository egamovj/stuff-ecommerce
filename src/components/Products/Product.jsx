/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../../styles/Product.module.jsx";

const SIZES = [4, 4.5, 5];

const Product = ({ title, price, images, description }) => {
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
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}</div>
        <div className={styles.color}>
          <span>Color: </span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes: </span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div onClick={() => {}} className={`${styles.size}`} key={size}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default Product;
