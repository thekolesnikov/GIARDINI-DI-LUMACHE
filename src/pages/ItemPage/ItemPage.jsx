import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './ItemPage.module.css';
import { fetchItems } from '../../utils/fetchItems';
import { addToCart } from '../../redux/slices/itemsSlice';
import arrow from './img/arrow.svg';

function ItemPage() {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);
    const params = useParams();
    const dispatch = useDispatch();

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
        dispatch(
            addToCart({
                id: data[0].id,
                name: data[0].name,
                count,
                img: data[0].img,
            })
        );
    }

    return (
        <>
            {data.length ? (
                <div className={styles.item}>
                    <div className={styles.item__img}>
                        <img src={data[0].img} alt="snail" />
                    </div>
                    <div className={styles.item__info}>
                        <h2 className={styles.item__name}>{data[0].name}</h2>
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
                            We take pride in producing high-quality snails for
                            escargot and an array of other exquisite products.
                            With a strong commitment to eco-friendly practices,
                            our farm operates under stringent ecological
                            standards. Our snails thrive in a natural and
                            sustainable environment, resulting in exceptional
                            flavor and texture.
                        </p>
                        <button
                            className={styles.item__button}
                            onClick={addCart}
                        >
                            Add to Cart
                        </button>
                        <div className={styles.item__details}>
                            <p className={styles.item__details_text}>
                                order details
                            </p>
                            <button className={styles.item__details_btn}>
                                <img src={arrow} alt="more details" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Not found</div>
            )}
        </>
    );
}

export default ItemPage;
