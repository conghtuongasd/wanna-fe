import React from 'react';
import SideBar from '../FixedSidebar';
import RightBar from '../RightBar';
import Header from '../Header';
import Home from '../../pages/home';
import { Route, Switch, withRouter, useRouteMatch } from 'react-router-dom';
import Profile from '../../pages/profile';

function Main() {
    let { path } = useRouteMatch();
    return (
        <div>
            <SideBar />
            <RightBar />
            <Header />
            <div className="header-spacer"></div>
            <div className="container">
                <Switch>
                    <Route path={`${path}`} component={Home} />
                    <Route path={`${path}/user`} component={Profile} />
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(Main);