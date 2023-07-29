import Banner from '../../components/Banner/Banner';
import PhilosophyAbout from './PhilosophyAbout/PhilosophyAbout';
import CuisineAbout from './CuisineAbout/CuisineAbout';
import FarmAbout from './FarmAbout/FarmAbout';

function AboutPage() {
    return (
        <div>
            <Banner />
            <PhilosophyAbout />
            <CuisineAbout />
            <FarmAbout />
        </div>
    );
}

export default AboutPage;
