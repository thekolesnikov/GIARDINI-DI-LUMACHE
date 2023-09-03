import { Link, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ItemCard.module.css';
import { addToCart } from '../../redux/slices/itemsSlice';
import { addToLS } from '../../utils/addToLS';

function ItemCard({ id, img, nameEng, nameIt, price }) {
    const dispatch = useDispatch();
    const activeLanguege = useSelector((state) => state.language.language);
    const setBadgeVisible = useOutletContext();

    const buttontext = {
        IT: 'Aggiungi al carrello',
        ENG: 'Add to Cart',
    };

    function addCart() {
        const item = {
            id: id,
            nameEng: nameEng,
            nameIt: nameIt,
            count: 1,
            img: img,
            price: price,
        };
        dispatch(addToCart(item));
        addToLS(item);
        setBadgeVisible(true);
        setTimeout(() => {
            setBadgeVisible(false);
        }, 2500);
    }

    return (
        <div className={styles.item}>
            <Link to={`/shop/${id}`} className={styles.item__img}>
                <img src={img} alt="item" />
            </Link>
            <div className={styles.item__name}>
                {activeLanguege === 'ENG' ? nameEng : nameIt}
            </div>
            <div className={styles.item__info}>
                <div className={styles.item__price}>€{price}</div>
                <div className={styles.item__weight}>1000g</div>
            </div>
            <button className={styles.item__button} onClick={addCart}>
                {buttontext[activeLanguege]}
            </button>
        </div>
    );
}

export default ItemCard;
