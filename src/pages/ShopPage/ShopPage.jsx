import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ShopPage.module.css';
import Banner from '../../components/Banner/Banner';
import { fetchItems } from '../../utils/fetchItems';
import ItemCard from '../../components/ItemCard/ItemCard';

function ShopPage() {
    const [items, setItems] = useState([]);
    const activeLanguege = useSelector((state) => state.language.language);

    useEffect(() => {
        fetchItems(setItems);
    }, []);

    const categoryNames = [
        {
            IT: 'Vivo',
            ENG: 'Alive',
        },
        {
            IT: 'Surgelati',
            ENG: 'Frozen',
        },
    ];

    return (
        <>
            <Banner />
            <div className={styles.shop}>
                <div className={styles.shop__title}>
                    {categoryNames[0][activeLanguege]}
                </div>
                <div className={styles.shop__items}>
                    {items.map((item) => {
                        if (item.category === 'fresh') {
                            return (
                                <ItemCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    nameEng={item.nameEng}
                                    nameIt={item.nameIt}
                                    price={item.price}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <div className={styles.shop2}>
                <div className={styles.shop__title}>
                    {categoryNames[1][activeLanguege]}
                </div>
                <div className={styles.shop__items}>
                    {items.map((item) => {
                        if (item.category === 'cooked') {
                            return (
                                <ItemCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    nameEng={item.nameEng}
                                    nameIt={item.nameIt}
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
