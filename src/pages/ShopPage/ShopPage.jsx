import { useEffect, useState } from 'react';
import styles from './ShopPage.module.css';
import Banner from '../../components/Banner/Banner';
import { fetchItems } from '../../utils/fetchItems';
import ItemCard from '../../components/ItemCard/ItemCard';

function ShopPage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems(setItems);
    }, []);

    return (
        <>
            <Banner />
            <div className={styles.shop}>
                <div className={styles.shop__title}>Fresh</div>
                <div className={styles.shop__items}>
                    {items.map((item) => {
                        if (item.category === 'fresh') {
                            return (
                                <ItemCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <div className={styles.shop2}>
                <div className={styles.shop__title}>Cooked</div>
                <div className={styles.shop__items}>
                    {items.map((item) => {
                        if (item.category === 'cooked') {
                            return (
                                <ItemCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default ShopPage;
