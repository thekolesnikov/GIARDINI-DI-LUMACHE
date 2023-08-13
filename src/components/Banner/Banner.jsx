import { useSelector } from 'react-redux';
import styles from './Banner.module.css';
import banner from './img/bannerImg.jpg';

function Banner() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'Побалуйте себя лучшими улитками, выращенными на нашей эко-ферме.',
        IT: 'Goditi le migliori lumache prodotte nella nostra fattoria ecologica.',
        ENG: 'Indulge in the  best snails produced on our eco farm.',
    };
    return (
        <div className={styles.banner}>
            <img src={banner} alt="best snails" />
            <h1 className={styles.banner__title}>{title[activeLanguege]}</h1>
        </div>
    );
}

export default Banner;
