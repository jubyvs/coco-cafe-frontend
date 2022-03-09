import * as Bootstrap from 'react-bootstrap';
import React from 'react';

import NavigationTop from '../Header/NavigationTop';
import Footer from '../Footer/footer';
import ResponsiveCarousel from '../Home/carousal';

const Home = () => {
    return(
<React.Fragment>
    <NavigationTop />
    <Bootstrap.Container className="pt-5 mt-5 text-center text-dark main-container" fluid>
        <ResponsiveCarousel />
        <Bootstrap.Row>
            
        </Bootstrap.Row>
    </Bootstrap.Container>
    <Footer />
</React.Fragment>
    );
}

export default Home;