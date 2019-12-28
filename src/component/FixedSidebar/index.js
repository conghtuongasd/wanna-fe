import React from 'react';

export default function SideBar(params) {
    return (
        <div className="fixed-sidebar">
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

                <a href="02-ProfilePage.html" className="logo">
                    <div className="img-wrap">
                        <img src="img/logo.png" alt="Olympus" />
                    </div>
                </a>

                <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="left-menu">
                        <li>
                            <a href="#" className="js-sidebar-open">
                                a
					</a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                b
					</a>
                        </li>
                        <li>
                            <a href="16-FavPagesFeed.html">
                                c
					</a>
                        </li>
                        <li>
                            <a href="17-FriendGroups.html">
                                a
					</a>
                        </li>
                        <li>
                            <a href="18-MusicAndPlaylists.html">
                                d
					</a>
                        </li>
                        <li>
                            <a href="19-WeatherWidget.html">
                                d
					</a>
                        </li>
                        <li>
                            <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                                f
					</a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                d
					</a>
                        </li>
                        <li>
                            <a href="25-FriendsBirthday.html">
                                d
					</a>
                        </li>
                        <li>
                            <a href="26-Statistics.html">
                            </a>
                        </li>
                        <li>
                            <a href="27-ManageWidgets.html">
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
                            <a href="#" className="js-sidebar-open">
                                <span className="left-menu-title">Collapse Menu</span>
                            </a>
                        </li>
                        <li>
                            <a href="03-Newsfeed.html">
                                <span className="left-menu-title">Newsfeed</span>
                            </a>
                        </li>
                        <li>
                            <a href="16-FavPagesFeed.html">
                                <span className="left-menu-title">Fav Pages Feed</span>
                            </a>
                        </li>
                        <li>
                            <a href="17-FriendGroups.html">
                                <span className="left-menu-title">Friend Groups</span>
                            </a>
                        </li>
                        <li>
                            <a href="18-MusicAndPlaylists.html">
                                <span className="left-menu-title">Music & Playlists</span>
                            </a>
                        </li>
                        <li>
                            <a href="19-WeatherWidget.html">
                                <span className="left-menu-title">Weather App</span>
                            </a>
                        </li>
                        <li>
                            <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                                <span className="left-menu-title">Calendar and Events</span>
                            </a>
                        </li>
                        <li>
                            <a href="24-CommunityBadges.html">
                                <span className="left-menu-title">Community Badges</span>
                            </a>
                        </li>
                        <li>
                            <a href="25-FriendsBirthday.html">
                                <span className="left-menu-title">Friends Birthdays</span>
                            </a>
                        </li>
                        <li>
                            <a href="26-Statistics.html">
                                <span className="left-menu-title">Account Stats</span>
                            </a>
                        </li>
                        <li>
                            <a href="27-ManageWidgets.html">
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