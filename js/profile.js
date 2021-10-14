
const VueProfile = window.Vue;

let myProfile = {
    props: {
        links: Array,
        credits: Array
    },
    template: `	<div class="wrapper">


    <section class="cover-sec">
        <img src="http://via.placeholder.com/1600x400" alt="">
    </section>


    <main>
        <div class="main-section">
            <div class="container">
                <div class="main-section-data">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="main-left-sidebar">
                                <div class="user_profile">
                                    <div class="user-pro-img">
                                        <img src="http://via.placeholder.com/170x170" alt="">
                                    </div><!--user-pro-img end-->
                                    <div class="user_pro_status">
                                        <ul class="flw-hr">
                                            <li><a href="#" title="" class="flww"><i class="la la-plus"></i> Follow</a></li>
                                            <li><a href="#" title="" class="hre">Hire</a></li>
                                        </ul>
                                        <ul class="flw-status">
                                            <li>
                                                <span>Following</span>
                                                <b>34</b>
                                            </li>
                                            <li>
                                                <span>Followers</span>
                                                <b>155</b>
                                            </li>
                                        </ul>
                                    </div><!--user_pro_status end-->
                                </div><!--user_profile end-->
                            </div><!--main-left-sidebar end-->
                        </div>
                        <div class="col-lg-6">
                            <div class="main-ws-sec">
                                <div class="user-tab-sec">
                                    <h3>John Doe</h3>
                                    <div class="star-descp">
                                        <span>Graphic Designer at Self Employed</span>
                                        <ul>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star-half-o"></i></li>
                                        </ul>
                                    </div><!--star-descp end-->
                                    <div class="tab-feed">
                                        <ul>
                                            <li data-tab="feed-dd" class="active">
                                                <a href="#" title="">
                                                    <img src="images/ic1.png" alt="">
                                                    <span>Feed</span>
                                                </a>
                                            </li>
                                            <li data-tab="info-dd">
                                                <a href="#" title="">
                                                    <img src="images/ic2.png" alt="">
                                                    <span>Info</span>
                                                </a>
                                            </li>
                                            <li data-tab="portfolio-dd">
                                                <a href="#" title="">
                                                    <img src="images/ic3.png" alt="">
                                                    <span>Portfolio</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div><!-- tab-feed end-->
                                </div><!--user-tab-sec end-->
                                <div class="product-feed-tab current" id="feed-dd">
                                    <div class="posts-section">
                                        <div class="post-bar">
                                            <div class="post_topbar">
                                                <div class="usy-dt">
                                                    <img src="http://via.placeholder.com/50x50" alt="">
                                                    <div class="usy-name">
                                                        <h3>John Doe</h3>
                                                        <span><img src="images/clock.png" alt="">3 min ago</span>
                                                    </div>
                                                </div>
                                                <div class="ed-opts">
                                                    <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                    <ul class="ed-options">
                                                        <li><a href="#" title="">Edit Post</a></li>
                                                        <li><a href="#" title="">Unsaved</a></li>
                                                        <li><a href="#" title="">Unbid</a></li>
                                                        <li><a href="#" title="">Close</a></li>
                                                        <li><a href="#" title="">Hide</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="epi-sec">
                                                <ul class="descp">
                                                    <li><img src="images/icon8.png" alt=""><span>Epic Coder</span></li>
                                                    <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                                </ul>
                                                <ul class="bk-links">
                                                    <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                    <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="job_descp">
                                                <h3>Senior Wordpress Developer</h3>
                                                <ul class="job-dt">
                                                    <li><a href="#" title="">Full Time</a></li>
                                                    <li><span>$30 / hr</span></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                <ul class="skill-tags">
                                                    <li><a href="#" title="">HTML</a></li>
                                                    <li><a href="#" title="">PHP</a></li>
                                                    <li><a href="#" title="">CSS</a></li>
                                                    <li><a href="#" title="">Javascript</a></li>
                                                    <li><a href="#" title="">Wordpress</a></li> 	
                                                </ul>
                                            </div>
                                            <div class="job-status-bar">
                                                <ul class="like-com">
                                                    <li>
                                                        <a href="#"><i class="la la-heart"></i> Like</a>
                                                        <img src="images/liked-img.png" alt="">
                                                        <span>25</span>
                                                    </li> 
                                                    <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                                </ul>
                                                <a><i class="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div><!--post-bar end-->
                                        <div class="post-bar">
                                            <div class="post_topbar">
                                                <div class="usy-dt">
                                                    <img src="http://via.placeholder.com/50x50" alt="">
                                                    <div class="usy-name">
                                                        <h3>John Doe</h3>
                                                        <span><img src="images/clock.png" alt="">3 min ago</span>
                                                    </div>
                                                </div>
                                                <div class="ed-opts">
                                                    <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                    <ul class="ed-options">
                                                        <li><a href="#" title="">Edit Post</a></li>
                                                        <li><a href="#" title="">Unsaved</a></li>
                                                        <li><a href="#" title="">Unbid</a></li>
                                                        <li><a href="#" title="">Close</a></li>
                                                        <li><a href="#" title="">Hide</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="epi-sec">
                                                <ul class="descp">
                                                    <li><img src="images/icon8.png" alt=""><span>Front End Developer</span></li>
                                                    <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                                </ul>
                                                <ul class="bk-links">
                                                    <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                    <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                    <li><a href="#" title="" class="bid_now">Bid Now</a></li>
                                                </ul>
                                            </div>
                                            <div class="job_descp">
                                                <h3>Simple Classified Site</h3>
                                                <ul class="job-dt">
                                                    <li><span>$300 - $350</span></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                <ul class="skill-tags">
                                                    <li><a href="#" title="">HTML</a></li>
                                                    <li><a href="#" title="">PHP</a></li>
                                                    <li><a href="#" title="">CSS</a></li>
                                                    <li><a href="#" title="">Javascript</a></li>
                                                    <li><a href="#" title="">Wordpress</a></li> 	
                                                </ul>
                                            </div>
                                            <div class="job-status-bar">
                                                <ul class="like-com">
                                                    <li>
                                                        <a href="#"><i class="la la-heart"></i> Like</a>
                                                        <img src="images/liked-img.png" alt="">
                                                        <span>25</span>
                                                    </li> 
                                                    <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                                </ul>
                                                <a><i class="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div><!--post-bar end-->
                                        <div class="post-bar">
                                            <div class="post_topbar">
                                                <div class="usy-dt">
                                                    <img src="http://via.placeholder.com/50x50" alt="">
                                                    <div class="usy-name">
                                                        <h3>John Doe</h3>
                                                        <span><img src="images/clock.png" alt="">3 min ago</span>
                                                    </div>
                                                </div>
                                                <div class="ed-opts">
                                                    <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                    <ul class="ed-options">
                                                        <li><a href="#" title="">Edit Post</a></li>
                                                        <li><a href="#" title="">Unsaved</a></li>
                                                        <li><a href="#" title="">Unbid</a></li>
                                                        <li><a href="#" title="">Close</a></li>
                                                        <li><a href="#" title="">Hide</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="epi-sec">
                                                <ul class="descp">
                                                    <li><img src="images/icon8.png" alt=""><span>Epic Coder</span></li>
                                                    <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                                </ul>
                                                <ul class="bk-links">
                                                    <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                    <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="job_descp">
                                                <h3>Senior UI / UX designer</h3>
                                                <ul class="job-dt">
                                                    <li><a href="#" title="">Par Time</a></li>
                                                    <li><span>$10 / hr</span></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                <ul class="skill-tags">
                                                    <li><a href="#" title="">HTML</a></li>
                                                    <li><a href="#" title="">PHP</a></li>
                                                    <li><a href="#" title="">CSS</a></li>
                                                    <li><a href="#" title="">Javascript</a></li>
                                                    <li><a href="#" title="">Wordpress</a></li> 	
                                                </ul>
                                            </div>
                                            <div class="job-status-bar">
                                                <ul class="like-com">
                                                    <li>
                                                        <a href="#"><i class="la la-heart"></i> Like</a>
                                                        <img src="images/liked-img.png" alt="">
                                                        <span>25</span>
                                                    </li> 
                                                    <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                                </ul>
                                                <a><i class="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div><!--post-bar end-->
                                        <div class="post-bar">
                                            <div class="post_topbar">
                                                <div class="usy-dt">
                                                    <img src="http://via.placeholder.com/50x50" alt="">
                                                    <div class="usy-name">
                                                        <h3>John Doe</h3>
                                                        <span><img src="images/clock.png" alt="">3 min ago</span>
                                                    </div>
                                                </div>
                                                <div class="ed-opts">
                                                    <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                    <ul class="ed-options">
                                                        <li><a href="#" title="">Edit Post</a></li>
                                                        <li><a href="#" title="">Unsaved</a></li>
                                                        <li><a href="#" title="">Unbid</a></li>
                                                        <li><a href="#" title="">Close</a></li>
                                                        <li><a href="#" title="">Hide</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="epi-sec">
                                                <ul class="descp">
                                                    <li><img src="images/icon8.png" alt=""><span>Epic Coder</span></li>
                                                    <li><img src="images/icon9.png" alt=""><span>India</span></li>
                                                </ul>
                                                <ul class="bk-links">
                                                    <li><a href="#" title=""><i class="la la-bookmark"></i></a></li>
                                                    <li><a href="#" title=""><i class="la la-envelope"></i></a></li>
                                                    <li><a href="#" title="" class="bid_now">Bid Now</a></li>
                                                </ul>
                                            </div>
                                            <div class="job_descp">
                                                <h3>Ios Shopping mobile app</h3>
                                                <ul class="job-dt">
                                                    <li><span>$300 - $350</span></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                <ul class="skill-tags">
                                                    <li><a href="#" title="">HTML</a></li>
                                                    <li><a href="#" title="">PHP</a></li>
                                                    <li><a href="#" title="">CSS</a></li>
                                                    <li><a href="#" title="">Javascript</a></li>
                                                    <li><a href="#" title="">Wordpress</a></li> 	
                                                </ul>
                                            </div>
                                            <div class="job-status-bar">
                                                <ul class="like-com">
                                                    <li>
                                                        <a href="#"><i class="la la-heart"></i> Like</a>
                                                        <img src="images/liked-img.png" alt="">
                                                        <span>25</span>
                                                    </li> 
                                                    <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                                </ul>
                                                <a><i class="la la-eye"></i>Views 50</a>
                                            </div>
                                        </div><!--post-bar end-->
                                    </div><!--posts-section end-->
                                </div><!--product-feed-tab end-->
                                <div class="product-feed-tab" id="info-dd">
                                    <div class="user-profile-ov">
                                        <h3>Overview</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
                                    </div><!--user-profile-ov end-->
                                    <div class="user-profile-ov st2">
                                        <h3>Experience</h3>
                                        <h4>Web designer</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                        <h4>UI / UX Designer</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.</p>
                                        <h4>PHP developer</h4>
                                        <p class="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                    </div><!--user-profile-ov end-->
                                    <div class="user-profile-ov">
                                        <h3>Education</h3>
                                        <h4>Master of Computer Science</h4>
                                        <span>2015 - 2018</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
                                    </div><!--user-profile-ov end-->
                                    <div class="user-profile-ov">
                                        <h3>Location</h3>
                                        <h4>India</h4>
                                        <p>151/4 BT Chownk, Delhi </p>
                                    </div><!--user-profile-ov end-->
                                    <div class="user-profile-ov">
                                        <h3>Skills</h3>
                                        <ul>
                                            <li><a href="#" title="">HTML</a></li>
                                            <li><a href="#" title="">PHP</a></li>
                                            <li><a href="#" title="">CSS</a></li>
                                            <li><a href="#" title="">Javascript</a></li>
                                            <li><a href="#" title="">Wordpress</a></li>
                                            <li><a href="#" title="">Photoshop</a></li>
                                            <li><a href="#" title="">Illustrator</a></li>
                                            <li><a href="#" title="">Corel Draw</a></li>
                                        </ul>
                                    </div><!--user-profile-ov end-->
                                </div><!--product-feed-tab end-->
                            </div><!--main-ws-sec end-->
                        </div>
                        <div class="col-lg-3">
                            <div class="right-sidebar">
                                <div class="message-btn">
                                    <a href="#" title=""><i class="fa fa-envelope"></i> Message</a>
                                </div>
                            </div><!--right-sidebar end-->
                        </div>
                    </div>
                </div><!-- main-section-data end-->
            </div> 
        </div>
    </main>


    <div class="overview-box" id="create-portfolio">
        <div class="overview-edit">
            <h3>Create Portfolio</h3>
            <form>
                <input type="text" name="pf-name" placeholder="Portfolio Name">
                <div class="file-submit">
                    <input type="file" name="file">
                </div>
                <div class="pf-img">
                    <img src="http://via.placeholder.com/60x60" alt="">
                </div>
                <input type="text" name="website-url" placeholder="htp://www.example.com">
                <button type="submit" class="save">Save</button>
                <button type="submit" class="cancel">Cancel</button>
            </form>
            <a href="#" title="" class="close-box"><i class="la la-close"></i></a>
        </div><!--overview-edit end-->
    </div><!--overview-box end-->



</div><!--theme-layout end-->`
};

let profile = new VueProfile({
    el: "#profile",
    components: { myProfile },
    data: function () {
        return {
            links: [{
                linkname: "contact",
                link: "mailto:me@mycompany.org"
            },{
                linkname: "about",
                link: "about.html"
            }],
            credits:['Vue','Grafikart']
        };
    }});
