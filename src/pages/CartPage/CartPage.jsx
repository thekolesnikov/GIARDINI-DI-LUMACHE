import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './CartPage.module.css';
import close from './img/Close.svg';

function CartPage() {
    const items = useSelector((state) => state.items);
    const cartActive = useSelector((state) => state.cartActive);

    return (
        <div
            onClick={() => {
                document.body.classList.remove('hidden');
            }}
            className={cn(
                styles.cart__background,
                cartActive ? styles.active : ''
            )}
        >
            <div onClick={(e) => e.stopPropagation()} className={styles.cart}>
                <div className={styles.cart__title}>Your Cart</div>
                <div className={styles.cart__items}>
                    {/* {cart.cartArr.length === 0 && (
                        <div className={styles.cart__empty}>
                            Ohhh
                            <br />
                            Your cart is empty!!!
                        </div>
                    )} */}
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
                                            <div
                                                className={
                                                    styles.cart__item_name
                                                }
                                            >
                                                {item.name}
                                            </div>
                                            <div
                                                className={
                                                    styles.cart__item_quantity
                                                }
                                            >
                                                <button
                                                    // onClick={() =>
                                                    //     minusQty(item)
                                                    // }
                                                    className={
                                                        styles.cart__minus
                                                    }
                                                >
                                                    {/* <img
                                                        src={minus}
                                                        alt="minus"
                                                    /> */}
                                                    -
                                                </button>
                                                <div
                                                    className={
                                                        styles.cart__item_quantity_count
                                                    }
                                                >
                                                    {item.count}
                                                </div>
                                                <button
                                                    // onClick={() =>
                                                    //     plusQty(item)
                                                    // }
                                                    className={
                                                        styles.cart__plus
                                                    }
                                                >
                                                    {/* <img
                                                        src={plus}
                                                        alt="plus"
                                                    /> */}
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.cart__item_info_side
                                            }
                                        >
                                            <button
                                                // onClick={() => {
                                                //     removeItemFromCart(item);
                                                // }}
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
                                                £ {item.price * item.count}
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
                        <div className={styles.cart__total_summ}>2222</div>
                    </div>
                    <div className={styles.cart__buttons}>
                        <button
                            onClick={() => {
                                document.body.classList.remove('hidden');
                            }}
                            className={styles.cart__button_pay}
                        >
                            <Link to="/gucci-react/purchase">Order now</Link>
                        </button>
                        <button
                            onClick={() => {
                                // modal.setModalActive(false);
                                document.body.classList.remove('hidden');
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
