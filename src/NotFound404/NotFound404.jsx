
import React from "react";
import * as Bootstrap from 'react-bootstrap';


const NotFound404 = () => {
    return (
        <Bootstrap.Container className="not-found-wrapper" style={{height: "100vh",overflow:"hidden"}} fluid>
            <Bootstrap.Container fluid>
                <h1 className="header-text mt-5 pt-5">404 error <br /><span className="subtext">page not found</span></h1>
            </Bootstrap.Container>
            <Bootstrap.Button className="mt-5 button-class">Contact Us</Bootstrap.Button>
        </Bootstrap.Container>
    );
};

export default NotFound404;

