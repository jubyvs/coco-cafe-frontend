import * as Bootstrap from 'react-bootstrap';
import React from 'react';

import NavigationTop from '../Header/NavigationTop';
import Footer from '../Footer/footer';
import Mission from './mission';

const Delivery = () => {
    return(
    <React.Fragment>
        <NavigationTop />
        <Bootstrap.Container className="text-center text-dark main-container" fluid>
            <Bootstrap.Row >
                <Bootstrap.Col className="py-5 my-5">
                    Column 1
                </Bootstrap.Col>
                <Bootstrap.Col md={{ span: 6 }}>
                    <div className="border py-5 my-5 h-100"><Mission /></div>
                </Bootstrap.Col>
                <Bootstrap.Col className="py-5 my-5">
                    Column 3
                </Bootstrap.Col>
            </Bootstrap.Row>
        </Bootstrap.Container>
        <Footer />
    </React.Fragment>
    );
}

export default Delivery;