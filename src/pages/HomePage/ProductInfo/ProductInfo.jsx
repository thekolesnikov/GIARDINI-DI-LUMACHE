import styles from './ProductInfo.module.css';
import productleft from './img/productleft.jpg';
import productright from './img/productright.jpg';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';

function ProductInfo() {
    return (
        <div className={styles.product}>
            <div className={styles.product__info}>
                <div className={styles.product__info_title}>Product</div>
                <div className={styles.product__info_text}>
                    Indulge in the finest snails cultivated on our Italian snail
                    farm. We take pride in producing high-quality snails for
                    escargot and an array of other exquisite products. With a
                    strong commitment to eco-friendly practices, our farm
                    operates under stringent ecological standards. Our snails
                    thrive in a natural and sustainable environment, resulting
                    in exceptional flavor and texture. From farm to plate, every
                    step is carefully managed to ensure the highest level of
                    ecological responsibility. Treat your palate to our
                    eco-certified snails and savor the taste of Italian
                    excellence while supporting sustainable farming practices.
                </div>
            </div>
            <div className={styles.product__images}>
                <div>
                    <img src={productleft} alt="product" />
                </div>
                <div>
                    <img src={productright} alt="product" />
                </div>
            </div>
            <HorizontalLine />
        </div>
    );
}

export default ProductInfo;
