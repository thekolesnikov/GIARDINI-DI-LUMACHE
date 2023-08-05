import styles from './FarmAbout.module.css';
import farmImgSmall from './img/farmSmall.jpg';
import farmImgBig from './img/farmBig.jpg';

function FarmAbout() {
    return (
        <div className={styles.farm}>
            <div className={styles.farm__info}>
                <div className={styles.farm__info_title}>Farm</div>
                <div className={styles.farm__info_text}>
                    <p>
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
                    </p>
                    <p>
                        With a deep-rooted dedication to eco-friendly practices,
                        our farm operates under stringent ecological standards,
                        ensuring the sustainability of our environment. From the
                        lush surroundings, our snails thrive, resulting in a
                        delectable combination of taste and texture.{' '}
                    </p>
                </div>
            </div>
            <div className={styles.farm__content}>
                <div>
                    <img
                        className={styles.farm__content_img_small}
                        src={farmImgSmall}
                        alt="farm"
                    />
                </div>
                <div>
                    <img
                        className={styles.farm__content_img_big}
                        src={farmImgBig}
                        alt="farm"
                    />
                </div>
                <p className={styles.farm__content_text}>
                    Experience the essence of Italian excellence and support
                    sustainable farming practices by savoring snails, straight
                    from our farm to your plate.
                </p>
            </div>
            <div className={styles.farm__content_img_mobile}>
                <img src={farmImgSmall} alt="farm" />
            </div>
        </div>
    );
}

export default FarmAbout;
