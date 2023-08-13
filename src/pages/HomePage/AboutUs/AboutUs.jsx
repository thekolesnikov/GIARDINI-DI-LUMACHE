import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';
import aboutImg from './img/aboutImg.jpg';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';

function AboutUs() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'О нас',
        IT: 'Chi siamo',
        ENG: 'About Us',
    };
    const text = {
        RU: 'Наша улиточная ферма, расположенная в очаровательной итальянской деревне Sambucheto  недалеко от Мачераты в регионе Марке, приглашает вас насладиться воплощением кулинарных изысков традиционной итальянской кухни. Наша приверженность к поддержанию высокого качества и натурального вкуса итальянских продуктов обеспечивается строгим соблюдением санитарных и экологических норм при выращивании улитки и предпродажном хранении. Наши улитки растут в благоприятной природной среде в окружении полей с кормовыми травами и  подсолнечником, реки и небольшого леса. Наслаждайтесь экологически чистыми улитками, прямо с нашей фермы, на вашей тарелке.',
        IT: "L'allevamento delle lumache, ubicato nell'incantevole villaggio italiano di Sambucheto, nelle vicinanze di Macerata nelle Marche, vi invita a gustare le delizie culinarie della cucina tradizionale italiana. Il nostro impegno nel preservare l'alta qualità e il gusto naturale dei prodotti italiani è garantito dal rigoroso rispetto degli standard sanitari e ambientali durante la coltivazione delle lumache e lo stoccaggio pre-vendita. Le nostre lumache crescono in un ambiente naturale e favorevole, circondate da erba, foraggera, campi di girasoli, un fiume e un piccolo bosco. Godetevi le lumache biologiche, direttamente dalla nostra fattoria, nel tuo piatto.",
        ENG: 'Our snail farm, located in the charming Italian village of Sambucheto near Macerata in the Marche region, invites you to enjoy the culinary delights of traditional Italian cuisine. Our commitment to maintaining the high quality and natural taste of Italian products is ensured by strict adherence to sanitary and environmental standards in the cultivation of snails and pre-sale storage. Our snails grow in a favorable natural environment surrounded by forage grass and sunflower fields, a river and a small forest. Enjoy organic snails, straight from our farm, on your plate.',
    };

    const link = {
        RU: 'УЗНАТЬ БОЛЬШЕ',
        IT: 'SAPERNE DI PIÙ',
        ENG: 'LEARN MORE',
    };
    return (
        <>
            <div className={styles.about}>
                <div className={styles.about__left}>
                    <h2 className={styles.about__title}>
                        {title[activeLanguege]}
                    </h2>
                    <img src={aboutImg} alt="about" />
                </div>
                <div className={styles.about__right}>
                    <h2 className={styles.about__text}>
                        {text[activeLanguege]}
                    </h2>
                    <Link className={styles.about__link} to="/about">
                        {link[activeLanguege]}
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
