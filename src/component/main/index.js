import React from 'react';
import SideBar from '../FixedSidebar';
import RightBar from '../RightBar';
import Header from '../Header';
import Home from '../../pages/home';
import { Route, Switch } from 'react-router-dom';
import Profile from '../../pages/profile';


export default function Main() {
    return (
        <div>
            <SideBar />
            <RightBar />
            <Header />
            <div className="header-spacer"></div>
            <div className="container">
                <Switch>
                    <Route exact path='/' children={<Home />} />
                    <Route exact path='/user' children={<Profile />} />
                </Switch>
            </div>
        </div>
    )
}