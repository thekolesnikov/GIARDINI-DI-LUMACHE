import { Outlet } from 'react-router';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';

function MainLayout() {
    return (
        <div className="container">
            <NavMenu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;
