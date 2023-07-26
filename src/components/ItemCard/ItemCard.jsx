import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';
import imageItem from './Rectangle 10.jpg';

function ItemCard() {
    return (
        <div className={styles.item}>
            <Link className={styles.item__img}>
                <img src={imageItem} alt="item" />
            </Link>
            <div className={styles.item__name}>
                Frozen snails GARDINI DI LUMACHE
            </div>
            <div className={styles.item__info}>
                <div className={styles.item__price}>€29.99</div>
                <div className={styles.item__weight}>1000g</div>
            </div>
            <button className={styles.item__button}>Add to Cart</button>
        </div>
    );
}

export default ItemCard;
