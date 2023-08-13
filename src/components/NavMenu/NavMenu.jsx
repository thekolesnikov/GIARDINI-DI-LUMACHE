import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from './img/logo.svg';
import styles from './NavMenu.module.css';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import CartPage from '../../pages/CartPage/CartPage';
import burgerImg from './img/Burger.svg';
import closeImg from './img/close.svg';
import { setLanguage } from '../../redux/slices/languageSlice';

function NavMenu() {
    const [cartActive, setCartActive] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const items = useSelector((state) => state.items);

    const languages = ['ENG', 'IT', 'RU'];
    const dispatch = useDispatch();
    const activeLanguege = useSelector((state) => state.language.language);
    console.log(activeLanguege);

    return (
        <header>
            <div className={styles.header}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <nav className={styles.header__nav}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <button
                        className={styles.header__nav_btn}
                        onClick={() => {
                            setCartActive(true);
                            document.body.classList.add('hidden');
                        }}
                    >
                        Cart
                        {items.length > 0 && (
                            <span className={styles.header__nav_btn_badge}>
                                {items.length}
                            </span>
                        )}
                    </button>
                    <NavLink to="/contacts">Contact us</NavLink>
                </nav>

                <div className={styles.header__burger}>
                    {isBurgerOpen ? (
                        <button
                            onClick={() => {
                                setIsBurgerOpen(false);
                                document.body.classList.remove('hidden');
                            }}
                        >
                            <img src={closeImg} alt="burgerMenuBtn" />
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setIsBurgerOpen(true);
                                document.body.classList.add('hidden');
                            }}
                            className={styles.header__burger_btn}
                        >
                            <img src={burgerImg} alt="burgerMenuBtn" />
                        </button>
                    )}
                </div>
            </div>
            <HorizontalLine />
            {isBurgerOpen && (
                <div className={styles.header__burger_menu}>
                    <nav className={styles.header__nav_mobile}>
                        <NavLink
                            to="/"
                            onClick={() => {
                                setIsBurgerOpen(false);
                                document.body.classList.remove('hidden');
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            onClick={() => {
                                setIsBurgerOpen(false);
                                document.body.classList.remove('hidden');
                            }}
                        >
                            Shop
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={() => {
                                setIsBurgerOpen(false);
                                document.body.classList.remove('hidden');
                            }}
                        >
                            About
                        </NavLink>
                        <button
                            className={styles.header__nav_mobile_btn}
                            onClick={() => {
                                setIsBurgerOpen(false);
                                setCartActive(true);
                                document.body.classList.add('hidden');
                            }}
                        >
                            Cart
                            {items.length > 0 && (
                                <span className={styles.header__nav_btn_badge}>
                                    {items.length}
                                </span>
                            )}
                        </button>
                        <NavLink
                            to="/contacts"
                            onClick={() => {
                                setIsBurgerOpen(false);
                                document.body.classList.remove('hidden');
                            }}
                        >
                            Contact us
                        </NavLink>
                    </nav>
                    <div className={styles.footer__nav}>
                        <a className={styles.footer__text} href="">
                            instagram
                        </a>
                        <div className={styles.footer__langueges}>
                            {languages.map((item) => {
                                return (
                                    <div key={item}>
                                        <button
                                            onClick={() => {
                                                dispatch(setLanguage(item));
                                                setIsBurgerOpen(false);
                                                document.body.classList.remove(
                                                    'hidden'
                                                );
                                            }}
                                            className={
                                                activeLanguege === item
                                                    ? styles.footer__text_underline
                                                    : styles.footer__text
                                            }
                                        >
                                            {item}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
            {cartActive && <CartPage setCartActive={setCartActive} />}
        </header>
    );
}

export default NavMenu;
