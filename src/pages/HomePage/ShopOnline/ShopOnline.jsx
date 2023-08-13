import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ShopOnline.module.css';
import ItemCard from '../../../components/ItemCard/ItemCard';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';
import { fetchItems } from '../../../utils/fetchItems';

function ShopOnline() {
    const [items, setItems] = useState([]);
    const activeLanguege = useSelector((state) => state.language.language);

    const title = {
        RU: 'КУПИТЬ  ОНЛАЙН',
        IT: 'COMPRARE ON LINE ',
        ENG: 'Shop online',
    };
    const text = {
        RU: 'Почувствуйте вкус традиционной итальянской еды в нашем интернет-магазине. Побалуйте себя нашими высококачественными экологически чистыми продуктами. Свежие улитки и продукты из них вы можете заказать и  приобрести онлайн и получить доставку курьером.',
        IT: 'Assapora il gusto autentico del cibo tradizionale italiano attraverso il nostro negozio online. Regalati i nostri prodotti biologici di elevata qualità. Puoi ordinare e acquistare lumache fresche e i loro derivati online, ricevendo la consegna tramite corriere.',
        ENG: 'Feel the taste of traditional Italian food in our online store. Treat yourself to our high quality organic products. You can order and purchase fresh snails and products from them online and receive delivery by courier.',
    };

    useEffect(() => {
        fetchItems(setItems);
    }, []);
    return (
        <div className={styles.shop}>
            <div className={styles.shop__info}>
                <h2 className={styles.shop__info_title}>
                    {title[activeLanguege]}
                </h2>
                <div className={styles.shop__info_text}>
                    {text[activeLanguege]}
                </div>
            </div>
            <div className={styles.shop__items}>
                {items.slice(0, 4).map((item) => {
                    return (
                        <div key={item.id} className={styles.shop__item}>
                            <ItemCard
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    );
                })}
            </div>
            <HorizontalLine />
        </div>
    );
}

export default ShopOnline;
