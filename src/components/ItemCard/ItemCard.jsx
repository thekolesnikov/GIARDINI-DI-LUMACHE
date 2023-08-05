import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './ItemCard.module.css';
import { addToCart } from '../../redux/slices/itemsSlice';

function ItemCard({ id, img, name, price }) {
    const dispatch = useDispatch();

    function addCart() {
        dispatch(
            addToCart({
                id: id,
                name: name,
                count: 1,
                img: img,
                price: price,
            })
        );
    }

    return (
        <div className={styles.item}>
            <Link to={`/shop/${id}`} className={styles.item__img}>
                <img src={img} alt="item" />
            </Link>
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__info}>
                <div className={styles.item__price}>€{price}</div>
                <div className={styles.item__weight}>1000g</div>
            </div>
            <button className={styles.item__button} onClick={addCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default ItemCard;
