import styles from './Cuisine.module.css';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';

function Cuisine() {
    return (
        <>
            <div className={styles.cuisine}>
                <div className={styles.cuisine__info}>
                    <h2 className={styles.cuisine__title}>Cuisine</h2>
                    <div className={styles.cuisine__text}>
                        Step into our restaurant and embark on a culinary
                        journey infused with the rich traditions and flavors of
                        Italian cuisine. Our menu showcases a diverse range of
                        snail-based recipes, meticulously crafted to elevate
                        your dining experience. From classic Italian escargot,
                        delicately seasoned with herbs and garlic, to innovative
                        dishes that push the boundaries of gastronomy, we offer
                        a tantalizing selection to satisfy every palate.{' '}
                    </div>
                </div>
            </div>
            <HorizontalLine />
        </>
    );
}

export default Cuisine;
