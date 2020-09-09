import React from 'react';
import {Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import Auth from './components/Auth/Auth';
import Home from './components/Home/home';
import Homefile from './components/Homefile/homeFile';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/auth' component={Auth}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/homefile' component={Homefile}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);