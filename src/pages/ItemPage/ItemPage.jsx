import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ItemPage.module.css';
import { fetchItems } from '../../utils/fetchItems';
import { addToCart } from '../../redux/slices/itemsSlice';
import arrow from './img/arrow.svg';
import { addToLS } from '../../utils/addToLS';

function ItemPage() {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const setBadgeVisible = useOutletContext();

    const activeLanguege = useSelector((state) => state.language.language);

    const itemNames = [
        {
            IT: 'Aggiungi al carrello',
            ENG: 'Add to Cart',
        },
        {
            IT: 'dettagli  ordine',
            ENG: 'order details',
        },
        {
            IT: 'Pagina non trovata',
            ENG: 'Page not found',
        },
    ];

    useEffect(() => {
        fetchItems(setItems);
    }, []);
    const data = items.filter((item) => item.id == params.id);

    function decrement() {
        if (count > 1) {
            setCount((count) => count - 1);
        }
    }

    function increment() {
        setCount((count) => count + 1);
    }

    function addCart() {
        const item = {
            id: data[0].id,
            nameEng: data[0].nameEng,
            nameIt: data[0].nameIt,
            count,
            img: data[0].img,
            price: data[0].price,
        };
        dispatch(addToCart(item));
        addToLS(item);
        setCount(1);
        setBadgeVisible(true);
        setTimeout(() => {
            setBadgeVisible(false);
        }, 2500);
    }

    return (
        <>
            {data.length ? (
                <div className={styles.item}>
                    <div className={styles.item__img}>
                        <img src={data[0].img} alt="snail" />
                    </div>
                    <div className={styles.item__info}>
                        <h2 className={styles.item__name}>
                            {activeLanguege === 'ENG'
                                ? data[0].nameEng
                                : data[0].nameIt}
                        </h2>
                        <div className={styles.item__flex}>
                            <span className={styles.item__price}>
                                €{data[0].price} /
                            </span>
                            <span className={styles.item__weight}> 1000g</span>
                            <div className={styles.item__count}>
                                <button
                                    className={styles.item__count_btn}
                                    onClick={decrement}
                                >
                                    -
                                </button>
                                <span className={styles.item__count_qty}>
                                    {count}
                                </span>
                                <button
                                    className={styles.item__count_btn}
                                    onClick={increment}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <p className={styles.item__description}>
                            {activeLanguege === 'ENG'
                                ? data[0].descEng
                                : data[0].descIt}
                        </p>
                        <button
                            className={styles.item__button}
                            onClick={addCart}
                        >
                            {itemNames[0][activeLanguege]}
                        </button>
                        <div className={styles.item__details}>
                            <p className={styles.item__details_text}>
                                {itemNames[1][activeLanguege]}
                            </p>
                            <button
                                className={styles.item__details_btn}
                                onClick={() =>
                                    setDetailsVisible(!detailsVisible)
                                }
                            >
                                <img
                                    className={
                                        detailsVisible ? styles.active : ''
                                    }
                                    src={arrow}
                                    alt="more details"
                                />
                            </button>
                        </div>
                        {detailsVisible && (
                            <div className={styles.item__details_body}>
                                {activeLanguege === 'ENG'
                                    ? data[0].shippingEng
                                    : data[0].shippingIt}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>{itemNames[2][activeLanguege]}</div>
            )}
        </>
    );
}

export default ItemPage;
