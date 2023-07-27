import { Outlet } from 'react-router';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';

function MainLayout() {
    return (
        <>
            <NavMenu />
            <main className="container">
                <Outlet />
            </main>
            <footer className="container">
                <Footer />
            </footer>
        </>
    );
}

export default MainLayout;
