import React, { useState } from 'react';

export default function SideBar(params) {
    let [sidebarClassName, setSidebarClassName] = useState("fixed-sidebar");

    function showSideBar(className) {
        if (className.includes('open')) {
            className = className.replace(' open', '');
        } else {
            className = className + ' open';
        }
        setSidebarClassName(className);
    }

    return (
        <div className={sidebarClassName}>
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

                <a href="02-ProfilePage.html" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus" />
                    </div>
                </a>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="left-menu">
                        <li>
                            <a onClick={() => showSideBar(sidebarClassName)} className="js-sidebar-open">
                                <svg className="olymp-menu-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="OPEN MENU"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-menu-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="16-FavPagesFeed.html">
                                <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="17-FriendGroups.html">
                                <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="18-MusicAndPlaylists.html">
                                <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="19-WeatherWidget.html">
                                <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                                <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="25-FriendsBirthday.html">
                                <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="26-Statistics.html">
                                <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
                            </a>
                        </li>
                        <li>
                            <a href="27-ManageWidgets.html">
                                <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
                <a href="02-ProfilePage.html" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus" />
                    </div>
                    <div className="title-block">
                        <h6 className="logo-title">olympus</h6>
                    </div>
                </a>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="left-menu">
                        <li>
                            <a onClick={() => showSideBar(sidebarClassName)}  className="js-sidebar-open">
                                <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                                <span className="left-menu-title">Collapse Menu</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
                                <span className="left-menu-title">Newsfeed</span>
                            </a>
                        </li>
                        <li>
                            <a href="16-FavPagesFeed.html">
                                <svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
                                <span className="left-menu-title">Fav Pages Feed</span>
                            </a>
                        </li>
                        <li>
                            <a href="17-FriendGroups.html">
                                <svg className="olymp-happy-faces-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FRIEND GROUPS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use></svg>
                                <span className="left-menu-title">Friend Groups</span>
                            </a>
                        </li>
                        <li>
                            <a href="18-MusicAndPlaylists.html">
                                <svg className="olymp-headphones-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-headphones-icon"></use></svg>
                                <span className="left-menu-title">Music & Playlists</span>
                            </a>
                        </li>
                        <li>
                            <a href="19-WeatherWidget.html">
                                <svg className="olymp-weather-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="WEATHER APP"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-weather-icon"></use></svg>
                                <span className="left-menu-title">Weather App</span>
                            </a>
                        </li>
                        <li>
                            <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                                <svg className="olymp-calendar-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="CALENDAR AND EVENTS"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
                                <span className="left-menu-title">Calendar and Events</span>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <svg className="olymp-badge-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Community Badges"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-badge-icon"></use></svg>
                                <span className="left-menu-title">Community Badges</span>
                            </a>
                        </li>
                        <li>
                            <a href="25-FriendsBirthday.html">
                                <svg className="olymp-cupcake-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Friends Birthdays"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
                                <span className="left-menu-title">Friends Birthdays</span>
                            </a>
                        </li>
                        <li>
                            <a href="26-Statistics.html">
                                <svg className="olymp-stats-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Account Stats"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-stats-icon"></use></svg>
                                <span className="left-menu-title">Account Stats</span>
                            </a>
                        </li>
                        <li>
                            <a href="27-ManageWidgets.html">
                                <svg className="olymp-manage-widgets-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="Manage Widgets"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-manage-widgets-icon"></use></svg>
                                <span className="left-menu-title">Manage Widgets</span>
                            </a>
                        </li>
                    </ul>

                    <div className="profile-completion">

                        <div className="skills-item">
                            <div className="skills-item-info">
                                <span className="skills-item-title">Profile Completion</span>
                                <span className="skills-item-count"><span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span><span className="units">76%</span></span>
                            </div>
                            <div className="skills-item-meter">
                                <span className="skills-item-meter-active bg-primary" style={{ width: '76%' }}></span>
                            </div>
                        </div>

                        <span>Complete <a href="#">your profile</a> so people can know more about you!</span>

                    </div>
                </div>
            </div>
        </div>
    )
}