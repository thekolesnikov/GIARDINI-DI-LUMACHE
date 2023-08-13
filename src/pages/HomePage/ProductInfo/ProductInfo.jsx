import { useSelector } from 'react-redux';
import styles from './ProductInfo.module.css';
import productleft from './img/productleft.jpg';
import productright from './img/productright.jpg';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';

function ProductInfo() {
    const activeLanguege = useSelector((state) => state.language.language);
    const title = {
        RU: 'ПРОДУКТ',
        IT: 'Prodotto',
        ENG: 'Product',
    };
    const text = {
        RU: 'Побалуйте себя вкуснейшими средиземноморскими улитками HELIX ASPERA MAXIMA, выращенными на нашей ферме в солнечной провинции Мачерата. Наша ферма Societa Agricola Gardini di Lumache,придерживается в своей работе строгих экологических стандартов. Наши улитки растут в естественной и благоприятной среде на натуральном корме и воде из реки, текущей с соседних гор.Зелень и овощи для кормов мы выращиваем на своих полях. Мы гордимся тем, что производим высококачественных улиток и поддерживаем  высокую планку качества итальянских улиток.',
        IT: "Godetevi delle deliziose lumache coltivate nella nostra azienda agricola situata nella soleggiata provincia di Macerata. La nostra azienda, la Società Agricola Giardini di Lumache, aderisce a rigorosi standard ambientali nel suo operato. Le nostre lumache crescono in un ambiente naturale e favorevole, alimentate con cibo naturale e arricchite dall'acqua del fiume che scorre dalle vicine montagne. Siamo fieri di produrre lumache di alta qualità e di mantenere gli elevati standard qualitativi delle lumache italiane.",
        ENG: 'Treat yourself to delicious snails grown on our farm in the sunny province of Macerata. Our farm Societa Agricola Gardini di Lumache, adheres to strict environmental standards in its work. Our snails grow in a natural and favorable environment on natural food and water from the river flowing from the neighboring mountains. We pride ourselves on producing high quality snails and maintaining the high quality standard of Italian snails.',
    };
    return (
        <div className={styles.product}>
            <div className={styles.product__info}>
                <h2 className={styles.product__info_title}>
                    {title[activeLanguege]}
                </h2>
                <div className={styles.product__info_text}>
                    {text[activeLanguege]}
                </div>
                <div className={styles.product__images_small_mobile}>
                    <img src={productleft} alt="product" />
                </div>
            </div>
            <div className={styles.product__images}>
                <div className={styles.product__images_small}>
                    <img src={productleft} alt="product" />
                </div>
                <div className={styles.product__images_big}>
                    <img src={productright} alt="product" />
                </div>
            </div>
            <HorizontalLine />
        </div>
    );
}

export default ProductInfo;
