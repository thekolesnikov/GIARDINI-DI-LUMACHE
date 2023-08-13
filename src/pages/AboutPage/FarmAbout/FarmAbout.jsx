import { useSelector } from 'react-redux';
import styles from './FarmAbout.module.css';
import farmImgSmall from './img/farmSmall.jpg';
import farmImgBig from './img/farmBig.jpg';

function FarmAbout() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'Ферма',
        IT: 'Azienda agricola',
        ENG: 'Farm',
    };
    const text = {
        RU: 'Наша улиточная ферма, расположенная в очаровательной итальянской деревне Sambucheto  недалеко от Мачераты в регионе Марке, приглашает вас насладиться воплощением кулинарных изысков традиционной итальянской кухни. Наша приверженность к поддержанию высокого качества и натурального вкуса итальянских продуктов обеспечивается строгим соблюдением санитарных и экологических норм при выращивании улитки и предпродажном хранении. ',
        IT: "Il nostro allevamento di lumache, situato nel suggestivo villaggio italiano di Sambucheto vicino a Macerata nelle Marche, vi invita a gustare le prelibatezze culinarie della cucina tradizionale italiana. Il nostro impegno nel preservare l'alta qualità e il gusto naturale dei prodotti italiani è garantito dal rigoroso rispetto degli standard sanitari e ambientali durante la coltivazione delle lumache e la fase di stoccaggio prima della vendita. ",
        ENG: 'Our snail farm, located in the charming Italian village of Sambucheto near Macerata in the Marche region, invites you to enjoy the culinary delights of traditional Italian cuisine. Our commitment to maintaining the high quality and natural taste of Italian products is ensured by strict adherence to sanitary and environmental standards in the cultivation of snails and pre-sale storage. ',
    };
    const subText = {
        RU: 'Наши улитки растут в благоприятной природной среде в окружении полей с кормовыми травами и  подсолнечником, реки и небольшого леса. Наслаждайтесь экологически чистыми улитками, прямо с нашей фермы, на вашей тарелке.',
        IT: 'Le nostre lumache crescono in un ambiente naturale favorevole, circondate da erba da pascolo, campi di girasoli, un fiume e un piccolo bosco. Approfitta delle lumache biologiche, direttamente dalla nostra fattoria, nel tuo piatto.',
        ENG: 'Our snails grow in a favorable natural environment surrounded by forage grass and sunflower fields, a river and a small forest. Enjoy organic snails, straight from our farm, on your plate.',
    };

    const bigText = {
        RU: 'Побалуйте себя лучшими улитками, выращенными на нашей эко-ферме.',
        IT: 'Goditi le migliori lumache coltivate nella nostra fattoria ecologica.',
        ENG: 'Treat yourself to the best snails grown on our eco-farm.',
    };
    return (
        <div className={styles.farm}>
            <div className={styles.farm__info}>
                <div className={styles.farm__info_title}>
                    {title[activeLanguege]}
                </div>
                <div className={styles.farm__info_text}>
                    <p>{text[activeLanguege]}</p>
                    <p>{subText[activeLanguege]}</p>
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
                    {bigText[activeLanguege]}
                </p>
            </div>
            <div className={styles.farm__content_img_mobile}>
                <img src={farmImgSmall} alt="farm" />
            </div>
        </div>
    );
}

export default FarmAbout;
