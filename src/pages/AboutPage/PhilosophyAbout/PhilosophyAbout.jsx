import { useSelector } from 'react-redux';
import styles from './PhilosophyAbout.module.css';
import philosophyImg from './img/philosophy.jpg';

function PhilosophyAbout() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'Философия',
        IT: 'filosofia',
        ENG: 'philosophy',
    };
    const text = {
        RU: ' Мы гордимся тем, что производим высококачественных улиток для эскарго и множество других натуральных продуктов. Наша ферма придерживается строгих экологических стандартов. Наши улитки растут в естественной и благоприятной среде, что приводит к исключительному вкусу и текстуре блюд.',
        IT: 'Siamo orgogliosi di produrre lumache di alta qualità e molti altri prodotti naturali. La nostra fattoria aderisce a rigorosi standard ambientali. Le nostre lumache crescono in un ambiente naturale e favorevole, conferendo un gusto e una consistenza eccezionali ai nostri piatti.',
        ENG: 'We are proud to produce high quality escargot snails and many other natural products. Our farm adheres to strict environmental standards. Our snails grow in a natural and supportive environment, resulting in exceptional taste and texture in our dishes.',
    };
    return (
        <div className={styles.philosophy}>
            <div className={styles.philosophy__header}>
                <div className={styles.philosophy__title}>
                    {title[activeLanguege]}
                </div>
                <img
                    className={styles.philosophy__mobile}
                    src={philosophyImg}
                    alt="philosophyImg"
                />
            </div>
            <div className={styles.philosophy__content}>
                <p className={styles.philosophy__text}>
                    {text[activeLanguege]}
                </p>
                <img src={philosophyImg} alt="philosophyImg" />
            </div>
        </div>
    );
}

export default PhilosophyAbout;
