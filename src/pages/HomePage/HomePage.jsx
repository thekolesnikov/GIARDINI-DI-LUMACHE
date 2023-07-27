import BigLogo from './BigLogo/BigLogo';
import ProductInfo from './ProductInfo/ProductInfo';
import ShopOnline from './ShopOnline/ShopOnline';
import AboutUs from './AboutUs/AboutUs';
import Cuisine from './Cuisine/Cuisine';
import Footer from '../../components/Footer/Footer';

function HomePage() {
    return (
        <div>
            <BigLogo />
            <ProductInfo />
            <ShopOnline />
            <AboutUs />
            <Cuisine />
        </div>
    );
}

export default HomePage;
