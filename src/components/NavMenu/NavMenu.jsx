import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from './img/logo.svg';
import styles from './NavMenu.module.css';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import CartPage from '../../pages/CartPage/CartPage';
import { showCart } from '../../redux/slices/cartActiveSlice';

function NavMenu() {
    const [cartActive, setCartActive] = useState(false);
    const items = useSelector((state) => state.items);

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
                        Cart {items.length}
                    </button>
                    <NavLink to="/contacts">Contact us</NavLink>
                </nav>
            </div>
            <HorizontalLine />
            {cartActive && <CartPage setCartActive={setCartActive} />}
        </header>
    );
}

export default NavMenu;
