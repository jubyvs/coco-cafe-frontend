import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faUser, faChartLine, faVial, faFileMedicalAlt, faArrowAltCircleRight, faArrowAltCircleLeft, faStore, faSignOutAlt, faCartArrowDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SecondaryMenu = () => {
    return(
        <React.Fragment>
                <Bootstrap.Nav.Link href="#sign-in-or-sign-up"><FontAwesomeIcon icon={faUser}  className="icon" />&nbsp;Sign In / Join Now</Bootstrap.Nav.Link>
                <Bootstrap.Nav.Link eventKey={2} href="#add-to-cart">
                    <FontAwesomeIcon icon={faShoppingCart}  className="icon" />
                </Bootstrap.Nav.Link>
        </React.Fragment> 
    );
}

export default SecondaryMenu;