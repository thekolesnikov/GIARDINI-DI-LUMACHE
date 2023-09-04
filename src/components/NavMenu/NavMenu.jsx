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
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import OrderCompleted from '../OrderCompleted/OrderCompleted';
import Badge from '../Badge/Badge';

function NavMenu({ badgeVisible }) {
    const [cartActive, setCartActive] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isCompleteVisible, setIsCompleteVisible] = useState(false);
    const items = useSelector((state) => state.items);

    const languages = ['ENG', 'IT'];
    const dispatch = useDispatch();
    const activeLanguege = useSelector((state) => state.language.language);

    const navNames = [
        {
            IT: 'Home',
            ENG: 'Home',
        },
        {
            IT: 'Negozio',
            ENG: 'Shop',
        },
        {
            IT: 'Chi siamo',
            ENG: 'About',
        },
        {
            IT: 'Carrello',
            ENG: 'Cart',
        },
        {
            IT: 'Contatti',
            ENG: 'Contact us',
        },
    ];

    return (
        <>
            <header className={styles.header__fixed}>
                <div className={styles.header}>
                    <Link
                        to="/"
                        onClick={() => {
                            setIsFormVisible(false);
                            setIsCompleteVisible(false);
                        }}
                    >
                        <img src={logo} alt="logo" />
                    </Link>

                    <nav className={styles.header__nav}>
                        <NavLink to="/">{navNames[0][activeLanguege]}</NavLink>
                        <NavLink to="/shop">
                            {navNames[1][activeLanguege]}
                        </NavLink>
                        <NavLink to="/about">
                            {navNames[2][activeLanguege]}
                        </NavLink>
                        <button
                            className={styles.header__nav_btn}
                            onClick={() => {
                                setCartActive(true);
                                document.body.classList.add('hidden');
                            }}
                        >
                            {navNames[3][activeLanguege]}
                            {items.length > 0 && (
                                <span className={styles.header__nav_btn_badge}>
                                    {items.length}
                                </span>
                            )}
                        </button>
                        <NavLink to="/contacts">
                            {navNames[4][activeLanguege]}
                        </NavLink>
                        {badgeVisible && <Badge />}
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
                        {badgeVisible && <Badge />}
                    </div>
                </div>
                <div className={styles.header__hr}>
                    <HorizontalLine />
                </div>
                {isBurgerOpen && (
                    <div className={styles.header__burger_menu}>
                        <nav className={styles.header__nav_mobile}>
                            <NavLink
                                to="/"
                                onClick={() => {
                                    setIsBurgerOpen(false);
                                    setIsFormVisible(false);
                                    setIsCompleteVisible(false);
                                    document.body.classList.remove('hidden');
                                }}
                            >
                                {navNames[0][activeLanguege]}
                            </NavLink>
                            <NavLink
                                to="/shop"
                                onClick={() => {
                                    setIsBurgerOpen(false);
                                    setIsFormVisible(false);
                                    setIsCompleteVisible(false);
                                    document.body.classList.remove('hidden');
                                }}
                            >
                                {navNames[1][activeLanguege]}
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={() => {
                                    setIsBurgerOpen(false);
                                    setIsFormVisible(false);
                                    setIsCompleteVisible(false);
                                    document.body.classList.remove('hidden');
                                }}
                            >
                                {navNames[2][activeLanguege]}
                            </NavLink>
                            <button
                                className={styles.header__nav_mobile_btn}
                                onClick={() => {
                                    setIsBurgerOpen(false);
                                    setCartActive(true);
                                    setIsFormVisible(false);
                                    setIsCompleteVisible(false);
                                    document.body.classList.add('hidden');
                                }}
                            >
                                {navNames[3][activeLanguege]}
                                {items.length > 0 && (
                                    <span
                                        className={styles.header__nav_btn_badge}
                                    >
                                        {items.length}
                                    </span>
                                )}
                            </button>
                            <NavLink
                                to="/contacts"
                                onClick={() => {
                                    setIsBurgerOpen(false);
                                    setIsFormVisible(false);
                                    setIsCompleteVisible(false);
                                    document.body.classList.remove('hidden');
                                }}
                            >
                                {navNames[4][activeLanguege]}
                            </NavLink>
                        </nav>
                        <div className={styles.footer__nav}>
                            <div className={styles.footer__nav_flex}>
                                <a
                                    className={styles.footer__text}
                                    href=""
                                    target="_blank"
                                    onClick={() => {
                                        setIsFormVisible(false);
                                        setIsCompleteVisible(false);
                                    }}
                                >
                                    instagram
                                </a>
                                <div className={styles.footer__langueges}>
                                    {languages.map((item) => {
                                        return (
                                            <div key={item}>
                                                <button
                                                    onClick={() => {
                                                        dispatch(
                                                            setLanguage(item)
                                                        );
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
                    </div>
                )}
                {cartActive && (
                    <CartPage
                        setCartActive={setCartActive}
                        setIsFormVisible={setIsFormVisible}
                    />
                )}
                {isFormVisible && (
                    <PurchaseModal
                        setIsFormVisible={setIsFormVisible}
                        setIsCompleteVisible={setIsCompleteVisible}
                    />
                )}
                {isCompleteVisible && (
                    <OrderCompleted
                        setIsCompleteVisible={setIsCompleteVisible}
                    />
                )}
            </header>
        </>
    );
}

export default NavMenu;
