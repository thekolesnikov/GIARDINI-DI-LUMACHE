import styles from './Banner.module.css';
import banner from './img/bannerImg.jpg';

function Banner() {
    return (
        <div className={styles.banner}>
            <img src={banner} alt="best snails" />
            <h1 className={styles.banner__title}>
                Indulge in the best snails produced on our eco farm.
            </h1>
        </div>
    );
}

export default Banner;
