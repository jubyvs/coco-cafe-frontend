import * as Bootstrap from 'react-bootstrap';
import React from 'react';

import NavigationTop from '../Header/NavigationTop';
import Footer from '../Footer/footer';

const Home = () => {
    return(
<React.Fragment>
    <NavigationTop />
    <Bootstrap.Container className="pt-5 mt-5" fluid>
        <h1>Hello</h1>
    </Bootstrap.Container>
    <Footer />
</React.Fragment>
    );
}

export default Home;