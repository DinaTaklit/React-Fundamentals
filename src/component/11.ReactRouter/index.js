import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

export default function ReactRouterSetup() {
    return (
        <Router>
            <h2 style={{marginBottom:"3rem"}}> React Router </h2>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/people">
                    <People/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    )
}
