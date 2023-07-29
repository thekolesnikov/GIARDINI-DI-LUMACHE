import { Link } from 'react-router-dom';
import styles from './ItemCard.module.css';

function ItemCard({ id, img, name, price }) {
    return (
        <div className={styles.item}>
            <Link to={`/shop/${id}`} className={styles.item__img}>
                <img src={img} alt="item" />
            </Link>
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__info}>
                <div className={styles.item__price}>{price}</div>
                <div className={styles.item__weight}>1000g</div>
            </div>
            <button className={styles.item__button}>Add to Cart</button>
        </div>
    );
}

export default ItemCard;
