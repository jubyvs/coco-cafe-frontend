import * as Bootstrap from 'react-bootstrap';
import React from 'react';

import NavigationTop from '../Header/NavigationTop';
import Footer from '../Footer/footer';

const AboutUs = () => {
    return(
<React.Fragment>
    <NavigationTop />
    <Bootstrap.Container className="pt-5 mt-5 text-center text-dark main-container" fluid>
        <Bootstrap.Row>
            <Bootstrap.Col>
                Column 1
            </Bootstrap.Col>
            <Bootstrap.Col>
                Column 2
            </Bootstrap.Col>
            <Bootstrap.Col>
                Column 3
            </Bootstrap.Col>
        </Bootstrap.Row>
    </Bootstrap.Container>
    <Footer />
</React.Fragment>
    );
}

export default AboutUs;