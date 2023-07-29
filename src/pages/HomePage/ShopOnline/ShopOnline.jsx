import { useEffect, useState } from 'react';
import styles from './ShopOnline.module.css';
import ItemCard from '../../../components/ItemCard/ItemCard';
import HorizontalLine from '../../../components/HorizontalLine/HorizontalLine';
import { fetchItems } from '../../../utils/fetchItems';

function ShopOnline() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems(setItems);
    }, []);
    return (
        <div className={styles.shop}>
            <div className={styles.shop__info}>
                <h2 className={styles.shop__info_title}>Shop online</h2>
                <div className={styles.shop__info_text}>
                    Experience the taste of Italian excellence from our online
                    shop. Indulge in our high-quality, eco-certified snails and
                    exquisite products, supporting sustainable farming practices
                    with every delicious bite.
                </div>
            </div>
            <div className={styles.shop__items}>
                {items.splice(0, 4).map((item) => {
                    return (
                        <ItemCard
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    );
                })}
            </div>
            <HorizontalLine />
        </div>
    );
}

export default ShopOnline;
