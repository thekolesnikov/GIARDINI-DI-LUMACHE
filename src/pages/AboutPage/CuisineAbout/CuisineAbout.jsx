import { useSelector } from 'react-redux';
import styles from './CuisineAbout.module.css';
import cuisineImgBig from './img/cuisine1.jpg';
import cuisineImgSmall from './img/cuisine2.jpg';

function CuisineAbout() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'Кухня',
        IT: 'Cucina',
        ENG: 'Cuisine',
    };
    const text = {
        RU: 'Каждый шаг от фермы до тарелки тщательно контролируется, чтобы обеспечить высочайший уровень экологической ответственности. Побалуйте себя нашими высококачественными улитками и насладитесь превосходным вкусом традиционных итальянских блюд из улиток.',
        IT: "Ogni fase, dalla fattoria al piatto, è attentamente controllata per garantire il massimo livello di responsabilità ambientale. Concediti le nostre lumache di alta qualità e goditi l'eccellente sapore dei piatti tradizionali a base di lumache italiane.",
        ENG: 'Every step from farm to plate is carefully controlled to ensure the highest level of environmental responsibility. Treat yourself to our high quality snails and enjoy the excellent taste of traditional Italian snail dishes.',
    };
    return (
        <div className={styles.cuisine}>
            <div className={styles.cuisine__title}>{title[activeLanguege]}</div>
            <div className={styles.cuisine__images}>
                <img src={cuisineImgBig} alt="cuisine" />
                <img
                    className={styles.cuisine__images_none}
                    src={cuisineImgSmall}
                    alt="cuisine"
                />
            </div>
            <p className={styles.cuisine__text}>{text[activeLanguege]}</p>
        </div>
    );
}

export default CuisineAbout;
