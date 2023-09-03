import { useSelector } from 'react-redux';
import styles from './Badge.module.css';

function Badge() {
    const activeLanguege = useSelector((state) => state.language.language);

    return (
        <div className={styles.badge}>
            {activeLanguege === 'ENG'
                ? 'Added to cart'
                : 'Aggiunto al carrello'}
        </div>
    );
}

export default Badge;
