import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainTemplate() {
    return (
        <div className="main-template">
            <Header />

            <main className="main-template__content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}