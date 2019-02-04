/* Modules */
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

/* Components */
import Home from '../containers/Home/Home';
import Game from '../containers/Game/Game';
import Ranking from '../containers/Ranking/Ranking';

class MyRouter extends Component {
    state = {}

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/game" component={Game} />
                <Route exact path="/ranking" component={Ranking} />
            </Switch>
        )
    }
}

export default withRouter(connect()(MyRouter));