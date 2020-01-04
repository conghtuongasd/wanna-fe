import React from 'react';

export default function Home(params) {
    return (
        <div>
            <div className="row">
                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="ui-block responsive-flex1200">
                        <div className="ui-block-title">

                            <div className="w-select">
                                <div className="title">Filter By:</div>
                                <fieldset className="form-group">
                                    <select className="selectpicker form-control">
                                        <option value="NU">All Categories</option>
                                        <option value="NU">Favourite</option>
                                        <option value="NU">Likes</option>
                                    </select>
                                </fieldset>
                            </div>

                            <div className="w-select">
                                <fieldset className="form-group">
                                    <select className="selectpicker form-control">
                                        <option value="NU">Date (Descending)</option>
                                        <option value="NU">Date (Ascending)</option>
                                    </select>
                                </fieldset>
                            </div>

                            <div className="w-select">
                                <fieldset className="form-group">
                                    <select className="selectpicker form-control">
                                        <option value="AL">All Colors</option>
                                        <option value="RE">Red</option>
                                        <option value="GR">Green</option>
                                        <option value="BL">Blue</option>
                                    </select>
                                </fieldset>
                            </div>

                            <a href="#" className="btn btn-blue btn-md-2">Search</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row sorting-container" id="posts-grid-1" data-layout="masonry">
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post1.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                                    <a href="#" className="h4 post-title">Here’s the Featured Urban photo of August! </a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 7 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat27.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat2.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    26
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>0</span>
                                    </a>
                                </div>

                            </div>

                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post10.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-primary">OLYMPUS NEWS</a>
                                    <a href="#" className="h4 post-title">Olympus Network added new photo filters!</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">JACK SCORPIO</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 12 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat7.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat12.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat21.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    82
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>14</span>
                                    </a>
                                </div>

                            </div>

                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post3.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-purple">INSPIRATION</a>
                                    <a href="#" className="h4 post-title">Take a look at these truly awesome worspaces</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 20 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat28.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    0
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>22</span>
                                    </a>
                                </div>

                            </div>

                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post11.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-purple">INSPIRATION</a>
                                    <a href="#" className="h4 post-title">Take a look at these truly awesome worspaces</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 20 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat2.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat18.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat8.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    0
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>22</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post6.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                                    <a href="#" className="h4 post-title">Olympians: Journal of my backpacking days</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 20 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat22.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat1.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat7.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    54
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>22</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post5.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                                    <a href="#" className="h4 post-title">Olympus’s family picnic was a success!</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 20 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat9.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat6.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat20.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    108
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>22</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post12.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-purple">INSPIRATION</a>
                                    <a href="#" className="h4 post-title">Check out this 10 yummy breakfast recipes</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 20 hours ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat4.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat11.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat19.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    12
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>22</span>
                                    </a>
                                </div>

                            </div>
                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post7.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                                    <a href="#" className="h4 post-title">Here are the best tattoos of our community</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">JACK SCORPIO </a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 2 months ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat13.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat11.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat12.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    33
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>22</span>
                                    </a>
                                </div>

                            </div>

                        </article>
                    </div>
                </div>
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12  sorting-item">
                    <div className="ui-block">
                        <article className="hentry blog-post blog-post-v1">

                            <div className="post-thumb">
                                <img src="img/post8.jpg" alt="photo" />

                                <div className="post-content">
                                    <a href="#" className="post-category bg-purple">INSPIRATION</a>
                                    <a href="#" className="h4 post-title">Take a look to the coolest beaches of the world</a>

                                    <div className="author-date">
                                        by
								<a className="h6 post__author-name fn" href="#">MADDY SIMMONS</a>
                                        <div className="post__date">
                                            <time className="published" dateTime="2017-03-24T18:18">
                                                - 3 months ago
									</time>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat10.png" alt="icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon-chat14.png" alt="icon" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    31
						</div>

                                <div className="comments-shared">
                                    <a href="#" className="post-add-icon inline-items">
                                        <svg className="olymp-speech-balloon-icon"><use xlinkHref="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                        <span>18</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}