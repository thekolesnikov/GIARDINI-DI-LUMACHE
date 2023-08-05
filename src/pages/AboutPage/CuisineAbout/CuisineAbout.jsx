import styles from './CuisineAbout.module.css';
import cuisineImgBig from './img/cuisine1.jpg';
import cuisineImgSmall from './img/cuisine2.jpg';

function CuisineAbout() {
    return (
        <div className={styles.cuisine}>
            <div className={styles.cuisine__title}>Cuisine</div>
            <div className={styles.cuisine__images}>
                <img src={cuisineImgBig} alt="cuisine" />
                <img
                    className={styles.cuisine__images_none}
                    src={cuisineImgSmall}
                    alt="cuisine"
                />
            </div>
            <p className={styles.cuisine__text}>
                From farm to plate, every step is carefully managed to ensure
                the highest level of ecological responsibility. Treat your
                palate to our eco-certified snails and savor the taste of
                Italian excellence while supporting sustainable farming
                practices.
            </p>
        </div>
    );
}

export default CuisineAbout;
