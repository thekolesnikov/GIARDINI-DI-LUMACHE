import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ItemPage from './pages/ItemPage/ItemPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="shop/:id" element={<ItemPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
