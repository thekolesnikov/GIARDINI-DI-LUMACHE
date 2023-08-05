import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';
import aboutImg from './img/aboutImg.jpg';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';

function AboutUs() {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.about__left}>
                    <h2 className={styles.about__title}>About us</h2>
                    <img src={aboutImg} alt="about" />
                </div>
                <div className={styles.about__right}>
                    <h2 className={styles.about__text}>
                        Nestled in the charming Italian village of Traia near
                        Ancona in the region of Marche, our snail farm invites
                        you to indulge in the epitome of culinary delights. Our
                        commitment to excellence is reflected in the cultivation
                        of the finest snails, renowned for their exceptional
                        quality and flavor. With a deep-rooted dedication to
                        eco-friendly practices, our farm operates under
                        stringent ecological standards, ensuring the
                        sustainability of our environment. From the lush
                        surroundings, our snails thrive, resulting in a
                        delectable combination of taste and texture. Experience
                        the essence of Italian excellence and support
                        sustainable farming practices by savoring our
                        eco-certified snails, straight from our farm to your
                        plate.
                    </h2>
                    <Link className={styles.about__link} to="/about">
                        LEARN MORE
                    </Link>
                </div>
                <div className={styles.about__img_mobile}>
                    <img src={aboutImg} alt="about" />
                </div>
            </div>
            <HorizontalLine />
        </>
    );
}

export default AboutUs;
