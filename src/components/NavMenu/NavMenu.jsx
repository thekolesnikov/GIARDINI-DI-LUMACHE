import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from './img/logo.svg';
import styles from './NavMenu.module.css';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import CartPage from '../../pages/CartPage/CartPage';
import { showCart } from '../../redux/slices/cartActiveSlice';

function NavMenu() {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    console.log(items);

    return (
        <header>
            <div className={styles.header}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className={styles.header__nav}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="about">About</NavLink>
                    <button
                        className={styles.header__nav_btn}
                        onClick={() => {
                            document.body.classList.add('hidden');
                            dispatch(() => showCart());
                        }}
                    >
                        Cart {items.length}
                    </button>
                    <NavLink>Contact us</NavLink>
                </nav>
            </div>
            <HorizontalLine />
            <CartPage />
        </header>
    );
}

export default NavMenu;
