import { Link, NavLink } from 'react-router-dom';
import logo from './img/logo.svg';
import styles from './NavMenu.module.css';

function NavMenu() {
    return (
        <header className="container">
            <div className={styles.header}>
                <Link>
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
            <hr className={styles.header__hr} />
        </header>
    );
}

export default NavMenu;
