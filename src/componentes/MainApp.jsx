import { Routes, Route, useLocation } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Menu from '../pages/Menu';
import WhatsNew from '../pages/WhatsNew';
import Contact from '../pages/Contact';
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import Container from '../componentes/Container';

function MainApp() {
    const location = useLocation();

    // Rotas onde o Footer será exibido
    const showFooterOn = ['/', '/menu', '/whatsnew', '/contact'];

    return (
        <>
            <NavBar />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/whatsnew" element={<WhatsNew />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Container>
            {showFooterOn.includes(location.pathname) && <Footer />}
        </>
    );
}

export default MainApp;

