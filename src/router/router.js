/* Modules */
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

/* Components */
import Home from '../containers/Home/Home';

class MyRouter extends Component {
    state = {}

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        )
    }
}

export default withRouter(connect()(MyRouter));