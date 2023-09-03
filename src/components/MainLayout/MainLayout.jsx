import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../utils/scrollToTop';
import { addToCart } from '../../redux/slices/itemsSlice';

function MainLayout() {
    ScrollToTop();
    const [badgeVisible, setBadgeVisible] = useState(false);

    const itemsFromLS = JSON.parse(localStorage.getItem('items'));

    const dispatch = useDispatch();

    useEffect(() => {
        itemsFromLS?.map((item) => dispatch(addToCart(item)));
    }, []);

    return (
        <>
            <div className="container">
                <NavMenu badgeVisible={badgeVisible} />
                <main>
                    <Outlet context={setBadgeVisible} />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;
