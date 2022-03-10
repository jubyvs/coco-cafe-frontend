import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Section3 = () => {
    return(
        <React.Fragment>
            <span>
                <h1 className="header-text">Connect with us!</h1>
                 <FontAwesomeIcon icon={faFacebookF} className="social-icon" />&nbsp;&nbsp;
                 <FontAwesomeIcon icon={faYoutube} className="social-icon" />&nbsp;&nbsp;
                 <FontAwesomeIcon icon={faInstagram} className="social-icon" />&nbsp;&nbsp;
                 <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </span>
        </React.Fragment>
    );
}

export default Section3;