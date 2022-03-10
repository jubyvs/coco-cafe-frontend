import * as Bootstrap from 'react-bootstrap';
import React from 'react';

import NavigationTop from '../Header/NavigationTop';
import Footer from '../Footer/footer';
import ResponsiveCarousel from './carousal';
import Menu from './menu';

const Home = () => {
    return(
        <React.Fragment>
            <NavigationTop />
            <Bootstrap.Container className="pt-5 mt-5 text-center text-dark main-container" fluid>
                <ResponsiveCarousel />
                <Menu />
            </Bootstrap.Container>
            <Footer />
        </React.Fragment>
    );
}

export default Home;