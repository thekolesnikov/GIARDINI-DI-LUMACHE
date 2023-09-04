import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CartPage.module.css';
import close from './img/Close.svg';
import minus from './img/minus.svg';
import plus from './img/plus.svg';
import {
    deleteFromCart,
    incrementCount,
    decrementCount,
} from '../../redux/slices/itemsSlice';
import { removeFromLS, incrementLS, decrementLS } from '../../utils/addToLS';

function CartPage({ setCartActive, setIsFormVisible }) {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const activeLanguege = useSelector((state) => state.language.language);

    const cartNames = [
        {
            IT: 'Il tuo carrello ',
            ENG: 'Your Cart',
        },
        {
            IT: 'Il tuo carrello è vuoto!!!',
            ENG: 'Your cart is empty!!!',
        },
        {
            IT: 'Totale',
            ENG: 'Total',
        },
        {
            IT: 'Ordina adesso',
            ENG: 'Order now',
        },
        {
            IT: 'Continua con gli acquisti',
            ENG: 'Continue shopping',
        },
    ];

    function deleteItem(id) {
        dispatch(deleteFromCart(id));
        removeFromLS(id);
    }

    function increment(id, count) {
        dispatch(incrementCount({ id, count }));
        incrementLS(id);
    }

    function decrement(id, count) {
        dispatch(decrementCount({ id, count }));
        decrementLS(id);
    }

    function caclTotal() {
        const total = items.reduce(
            (acc, current) => acc + current.count * current.price,
            0
        );
        return total.toFixed(2);
    }

    async function sentEmail() {
        const res = await fetch('/sendmail.php', {
            method: 'POST',
            body: JSON.stringify(items),
        });
    }

    return (
        <div
            onClick={() => {
                document.body.classList.remove('hidden');
                setCartActive(false);
            }}
            className={styles.cart__background}
        >
            <div onClick={(e) => e.stopPropagation()} className={styles.cart}>
                <div className={styles.cart__title}>
                    {cartNames[0][activeLanguege]}
                </div>
                <div className={styles.cart__items}>
                    {items.length === 0 && (
                        <div className={styles.cart__empty}>
                            Ohhh
                            <br />
                            {cartNames[1][activeLanguege]}
                        </div>
                    )}
                    {items?.map((item) => {
                        return (
                            <div key={item.id} className={styles.cart__item}>
                                <div className={styles.cart__item_body}>
                                    <div className={styles.cart__item_img}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={styles.cart__item_info}>
                                        <div
                                            className={
                                                styles.cart__item_info_side
                                            }
                                        >
                                            <div>
                                                <div
                                                    className={
                                                        styles.cart__item_name
                                                    }
                                                >
                                                    {activeLanguege === 'ENG'
                                                        ? item.nameEng
                                                        : item.nameIt}
                                                </div>
                                                <div
                                                    className={
                                                        styles.cart__item_weight
                                                    }
                                                >
                                                    1000G
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    styles.cart__item_quantity
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        decrement(
                                                            item.id,
                                                            item.count
                                                        )
                                                    }
                                                    className={
                                                        styles.cart__minus
                                                    }
                                                >
                                                    <img
                                                        src={minus}
                                                        alt="minus"
                                                    />
                                                </button>
                                                <div
                                                    className={
                                                        styles.cart__item_quantity_count
                                                    }
                                                >
                                                    {item.count}
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        increment(
                                                            item.id,
                                                            item.count
                                                        )
                                                    }
                                                    className={
                                                        styles.cart__plus
                                                    }
                                                >
                                                    <img
                                                        src={plus}
                                                        alt="plus"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.cart__item_info_side
                                            }
                                        >
                                            <button
                                                onClick={() => {
                                                    deleteItem(item.id);
                                                }}
                                                className={
                                                    styles.cart__item_exit
                                                }
                                            >
                                                <img
                                                    src={close}
                                                    alt="removeItem"
                                                />
                                            </button>
                                            <div
                                                className={
                                                    styles.cart__item_price
                                                }
                                            >
                                                €
                                                {(
                                                    item.price * item.count
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.cart__footer}>
                    <div className={styles.cart__total}>
                        <div className={styles.cart__total_title}>
                            {cartNames[2][activeLanguege]}
                        </div>
                        <div className={styles.cart__total_summ}>
                            €{caclTotal()}
                        </div>
                    </div>
                    <div className={styles.cart__buttons}>
                        {items.length > 0 && (
                            <button
                                onClick={() => {
                                    setCartActive(false);
                                    setIsFormVisible(true);
                                    document.body.classList.add('hidden');
                                }}
                                className={styles.cart__button_pay}
                            >
                                <Link>{cartNames[3][activeLanguege]}</Link>
                            </button>
                        )}

                        <button
                            onClick={() => {
                                document.body.classList.remove('hidden');
                                setCartActive(false);
                            }}
                            className={styles.cart__button_continue}
                        >
                            {cartNames[4][activeLanguege]}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
