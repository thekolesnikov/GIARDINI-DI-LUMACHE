import { Link } from 'react-router-dom';
import styles from './Cuisine.module.css';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';
import backgroungImg from './img/background.jpg';

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
                <div className={styles.cuisine__content}>
                    <div className={styles.cuisine__img}>
                        <img src={backgroungImg} alt="cuisine" />
                    </div>
                    <div className={styles.cuisine__textcontent}>
                        Our commitment to sustainability extends to our
                        ingredients, sourced locally and responsibly, ensuring
                        the freshest and highest quality. Immerse yourself in
                        the essence of Italian excellence as our skilled
                        transform our eco-certified snails into culinary
                        masterpieces, delivering a harmonious fusion of taste,
                        texture, and tradition to your plate.
                    </div>
                </div>
                <Link className={styles.cuisine__link}>LEARN MORE</Link>
            </div>
            <HorizontalLine />
        </>
    );
}

export default Cuisine;
