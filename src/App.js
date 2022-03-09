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
import Home from './Home/Home';

const App = () => {
  return (
    <React.Fragment>
        <ScrollUpButton
            ContainerClassName="ScrollUpButtonCustomContainer"
            TransitionClassName="ScrollUpButtonCustomToggled">
        </ScrollUpButton>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
