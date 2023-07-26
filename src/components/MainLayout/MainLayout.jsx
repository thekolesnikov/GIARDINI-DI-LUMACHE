import { Outlet } from 'react-router';
import NavMenu from '../NavMenu/NavMenu';

function MainLayout() {
    return (
        <>
            <NavMenu />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
