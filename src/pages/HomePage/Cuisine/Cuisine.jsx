import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Cuisine.module.css';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';
import backgroungImg from './img/background.jpg';

function Cuisine() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'Кухня',
        IT: 'Cucina',
        ENG: 'Cuisine',
    };

    const text = {
        RU: 'Зайдите в наш он-лайн магазин и отправляйтесь в кулинарное путешествие, наполненное богатыми традициями и вкусами итальянской кухни. В нашем меню представлена большая коллекция  рецептов блюд из улиток, которые  помогут сделать ваш ужин незабываемым. От классических итальянских улиток, деликатно приправленных травами и чесноком, рецептов французской кухни со сливочными соусами и нотками белого вина до инновационных блюд, расширяющих границы гастрономии, мы предлагаем соблазнительный выбор на любой вкус. Также будем благодарны , если вы поделитесь с нами вашими семейными рецептами или оригинальными рецептами приготовления улиток из других стран и континентов.',
        IT: "Visita il nostro negozio online e intraprendi un viaggio culinario attraverso le ricche tradizioni e i sapori della cucina italiana. Il nostro menù presenta un'ampia raccolta di ricette a base di lumache che renderanno la tua cena indimenticabile. Dalle classiche lumache italiane, delicatamente condite con erbe e aglio, alle versioni francesi con salse cremose e note di vino bianco, fino ai piatti innovativi che spingono i confini della gastronomia, offriamo una selezione allettante per soddisfare ogni gusto. Sarà un piacere anche se vorrai condividere con noi le tue ricette di famiglia o le originali preparazioni di lumache provenienti da altri paesi e continenti.",
        ENG: 'Visit our online store and embark on a culinary journey filled with the rich traditions and flavors of Italian cuisine. Our menu features a large collection of snail recipes that will help make your dinner unforgettable. From classic Italian snails delicately seasoned with herbs and garlic, French recipes with creamy sauces and hints of white wine, to innovative dishes that push the boundaries of gastronomy, we offer a tempting selection to suit all tastes. We will also be grateful if you share with us your family recipes or original snail recipes from other countries and continents.',
    };

    const bigText = {
        RU: 'Наша цель- развитие традиций употребления блюд из улитки и ответственный подход к выращиванию улитки на натуральных качественных кормах нашего региона Италии.',
        IT: "Il nostro obiettivo è quello di preservare le tradizioni legate al consumo di piatti a base di lumache e promuovere un approccio responsabile alla coltivazione di lumache, utilizzando mangimi naturali di alta qualità provenienti dalla nostra regione d'Italia.",
        ENG: 'Our goal is to develop the traditions of eating snail dishes and a responsible approach to growing snails on natural high-quality feed from our region of Italy.',
    };

    const link = {
        RU: 'УЗНАТЬ БОЛЬШЕ',
        IT: 'SAPERNE DI PIÙ',
        ENG: 'LEARN MORE',
    };

    return (
        <>
            <div className={styles.cuisine}>
                <div className={styles.cuisine__info}>
                    <h2 className={styles.cuisine__title}>
                        {title[activeLanguege]}
                    </h2>
                    <div className={styles.cuisine__text}>
                        {text[activeLanguege]}
                    </div>
                </div>
                <div className={styles.cuisine__content}>
                    <div className={styles.cuisine__img}>
                        <img src={backgroungImg} alt="cuisine" />
                    </div>
                    <div className={styles.cuisine__textcontent}>
                        {bigText[activeLanguege]}
                    </div>
                </div>
                <Link className={styles.cuisine__link}>
                    {link[activeLanguege]}
                </Link>
                <div className={styles.cuisine__content_mobile}>
                    <div className={styles.cuisine__img}>
                        <img src={backgroungImg} alt="cuisine" />
                    </div>
                    <div className={styles.cuisine__textcontent}>
                        {bigText[activeLanguege]}
                    </div>
                </div>
            </div>
            <HorizontalLine />
        </>
    );
}

export default Cuisine;
