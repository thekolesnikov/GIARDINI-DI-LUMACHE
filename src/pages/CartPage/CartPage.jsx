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

function CartPage({ setCartActive }) {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    function deleteItem(id) {
        dispatch(deleteFromCart(id));
    }

    function increment(id, count) {
        dispatch(incrementCount({ id, count }));
    }

    function decrement(id, count) {
        dispatch(decrementCount({ id, count }));
    }

    function caclTotal() {
        const total = items.reduce(
            (acc, current) => acc + current.count * current.price,
            0
        );
        return total.toFixed(2);
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
                <div className={styles.cart__title}>Your Cart</div>
                <div className={styles.cart__items}>
                    {items.length === 0 && (
                        <div className={styles.cart__empty}>
                            Ohhh
                            <br />
                            Your cart is empty!!!
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
                                                    {item.name}
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
                                                €{item.price * item.count}
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
                        <div className={styles.cart__total_title}>Total</div>
                        <div className={styles.cart__total_summ}>
                            €{caclTotal()}
                        </div>
                    </div>
                    <div className={styles.cart__buttons}>
                        <button
                            onClick={() => {
                                document.body.classList.remove('hidden');
                                setCartActive(false);
                            }}
                            className={styles.cart__button_pay}
                        >
                            <Link to="">Order now</Link>
                        </button>
                        <button
                            onClick={() => {
                                document.body.classList.remove('hidden');
                                setCartActive(false);
                            }}
                            className={styles.cart__button_continue}
                        >
                            Continue shopping
                        </button>
                    </div>
                </div>
                {/* {badgeActive ? (
                    <UniversalCartBadge
                        text="Item was removed from Cart"
                        color="#da5353"
                    />
                ) : (
                    ''
                )} */}
            </div>
        </div>
    );
}

export default CartPage;
