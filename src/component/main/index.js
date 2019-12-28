import React from 'react';
import SideBar from '../FixedSidebar';
import SideBarResponsive from '../FixedSidebar/SideBarResponsive';
import RightBar from '../RightBar';
import RightBarResponsive from '../RightBar/RightBarResponsive';
import Header from '../Header';
import HeaderResponsive from '../Header/HeaderResponsive';

export default function Main() {
    return (
        <div>
            <SideBar />
            <SideBarResponsive />
            <RightBar />
            <RightBarResponsive />
            <Header />
            <HeaderResponsive />
            <div className="header-spacer"></div>
            <div class="container">
                
            </div>
        </div>

    )
}