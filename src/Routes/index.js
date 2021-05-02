import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './../Pages/Home';
import ProfilePage from './../Pages/Profile';

export default function Routes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/user/:userLogin" component={ProfilePage} />
            </Switch>
        </Router>
    )
}

