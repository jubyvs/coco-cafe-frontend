import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

/*
-------------
404 NOT FOUND
-------------
*/
import NotFound404 from './NotFound404/NotFound404';

/*
----
HOME
----
*/
import Home from './Home/home';

/*
----
MENU
----
*/
import Menu from './Menu/menu';

/*
--------
DELIVERY
--------
*/
import Delivery from './Delivery/delivery';

/*
--------
ABOUT US
--------
*/
import AboutUs from './AboutUs/aboutUs';

/*
----------
CONTACT US
----------
*/
import ContactUs from './ContactUs/contactUs';

const App = () => {
  return (
    <React.Fragment>
        <ScrollUpButton
            ContainerClassName="ScrollUpButtonCustomContainer"
            TransitionClassName="ScrollUpButtonCustomToggled">
        </ScrollUpButton>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
