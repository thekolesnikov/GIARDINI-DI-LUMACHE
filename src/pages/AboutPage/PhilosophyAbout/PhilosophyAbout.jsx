import styles from './PhilosophyAbout.module.css';
import philosophyImg from './img/philosophy.jpg';

function PhilosophyAbout() {
    return (
        <div className={styles.philosophy}>
            <div className={styles.philosophy__title}>philosophy</div>
            <div className={styles.philosophy__content}>
                <p className={styles.philosophy__text}>
                    We take pride in producing high-quality snails for escargot
                    and an array of other exquisite products. With a strong
                    commitment to eco-friendly practices, our farm operates
                    under stringent ecological standards. Our snails thrive in a
                    natural and sustainable environment, resulting in
                    exceptional flavor and texture.
                </p>
                <img src={philosophyImg} alt="philosophyImg" />
            </div>
        </div>
    );
}

export default PhilosophyAbout;
