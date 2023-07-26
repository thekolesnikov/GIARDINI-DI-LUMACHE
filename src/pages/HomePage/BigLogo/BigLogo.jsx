import styles from './BigLogo.module.css';
import biglogo from './img/biglogo.svg';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';

function BigLogo() {
    return (
        <>
            <div className={styles.title}>
                <img src={biglogo} alt="biglogo" />
                <h1 className={styles.title__text}>GIARDINI DI LUMACHE</h1>
            </div>
            <HorizontalLine />
        </>
    );
}

export default BigLogo;
