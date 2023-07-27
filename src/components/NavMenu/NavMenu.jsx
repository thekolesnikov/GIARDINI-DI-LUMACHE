import { Link, NavLink } from 'react-router-dom';
import logo from './img/logo.svg';
import styles from './NavMenu.module.css';
import HorizontalLine from '../HorizontalLine/HorizontalLine';

function NavMenu() {
    return (
        <header className="container">
            <div className={styles.header}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className={styles.header__nav}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink>Cart</NavLink>
                    <NavLink>Contact us</NavLink>
                </nav>
            </div>
            <HorizontalLine />
        </header>
    );
}

export default NavMenu;