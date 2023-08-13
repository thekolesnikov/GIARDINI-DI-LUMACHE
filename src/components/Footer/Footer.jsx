import { useDispatch, useSelector } from 'react-redux';
import styles from './Footer.module.css';
import { setLanguage } from '../../redux/slices/languageSlice';

function Footer() {
    const languages = ['ENG', 'IT', 'RU'];
    const dispatch = useDispatch();
    const activeLanguege = useSelector((state) => state.language.language);
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__left}>
                <h2 className={styles.footer__title}>Contact us</h2>
                <div className={styles.footer__nav}>
                    <a className={styles.footer__text} href="">
                        instagram
                    </a>
                    <div className={styles.footer__langueges}>
                        {languages.map((item) => {
                            return (
                                <div key={item}>
                                    <button
                                        onClick={() =>
                                            dispatch(setLanguage(item))
                                        }
                                        className={
                                            activeLanguege === item
                                                ? styles.footer__text_underline
                                                : styles.footer__text
                                        }
                                    >
                                        {item}
                                    </button>
                                    <span className={styles.footer__span}>
                                        {' / '}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.footer__right}>
                <div className={styles.footer__contacts}>
                    <p className={styles.footer__contacts_title}>
                        Post address
                    </p>
                    <p className={styles.footer__contacts_text}>
                        Via Dante Alighieri <br />
                        Treia, 62010 Italy <br />
                        Province of Macerata
                    </p>
                </div>
                <div className={styles.footer__contacts}>
                    <p className={styles.footer__contacts_title}>
                        Opening hours
                    </p>
                    <p className={styles.footer__contacts_text}>
                        Tuesday – Saturday <br />
                        10:00 – 19:00
                    </p>
                </div>
                <div className={styles.footer__contacts}>
                    <p className={styles.footer__contacts_title}>Contact us</p>
                    <a
                        className={styles.footer__contacts_link}
                        href="tel:+390733215797"
                    >
                        +390-73-3215797
                    </a>
                    <a
                        className={styles.footer__contacts_link}
                        href="mailto:gardinidilumache@farm.it"
                    >
                        gardinidilumache@farm.it
                    </a>
                </div>
            </div>
            <div className={styles.footer__nav_mobile}>
                <a className={styles.footer__text} href="">
                    instagram
                </a>
                <div className={styles.footer__langueges}>
                    {languages.map((item) => {
                        return (
                            <div key={item}>
                                <button
                                    onClick={() => dispatch(setLanguage(item))}
                                    className={
                                        activeLanguege === item
                                            ? styles.footer__text_underline
                                            : styles.footer__text
                                    }
                                >
                                    {item}
                                </button>
                                <span className={styles.footer__span}>
                                    {' / '}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
