
const VuePost = window.Vue;

let myPost = {
    props: {
        links: Array,
        credits: Array
    },
    template: `<div class="wrapper">
		


    <header>
        <div class="container">
            <div class="header-data">
                <div class="logo pd-btm">
                    <a href="index.html" title=""><img src="images/logo.png" alt=""></a>
                </div><!--logo end-->
                <div class="forum-bar">
                    <h2>Forum</h2>
                    <ul>
                        <li><a href="#" title="">Tags</a></li>
                        <li><a href="#" title="">Users</a></li>
                        <li><a href="#" title="" class="ask-question">Ask a question</a></li>
                    </ul>
                </div><!--search-bar end-->
                <div class="login_register">
                    <ul>
                        <li><a href="sign-in.html" title="">Login</a></li>
                        <li><a href="sign-in.html" title="">Register</a></li>
                    </ul>
                </div><!--login_register end-->
                <div class="search-bar st2">
                    <form>
                        <input type="text" name="search" placeholder="Search...">
                        <button type="submit"><i class="la la-search"></i></button>
                    </form>
                </div><!--search-bar end-->
            </div><!--header-data end-->
        </div>
    </header>	


    <section class="forum-sec">
        <div class="container">
            <div class="forum-links">
                <ul>
                    <li class="active"><a href="#" title="">Latest</a></li>
                    <li><a href="#" title="">Unanswered</a></li>
                    <li><a href="#" title="">Treading</a></li>
                    <li><a href="#" title="">Popular This Week</a></li>
                    <li><a href="#" title="">Popular of Month</a></li>
                </ul>
            </div><!--forum-links end-->
            <div class="forum-links-btn">
                <a href="#" title=""><i class="fa fa-bars"></i></a>
            </div>
        </div>
    </section>

    <section class="forum-page">
        <div class="container">
            <div class="forum-questions-sec">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="forum-post-view">
                            <div class="usr-question">
                                <div class="usr_img">
                                    <img src="http://via.placeholder.com/60x60" alt="">
                                </div>
                                <div class="usr_quest">
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                    <span><i class="fa fa-clock-o"></i>3 min ago</span>
                                    <ul class="react-links">
                                        <li><a href="#" title=""><i class="fa fa-heart"></i> Vote 150</a></li>
                                        <li><a href="#" title=""><i class="fa fa-share-alt"></i> Share</a></li>
                                    </ul>
                                    <ul class="quest-tags">
                                        <li><a href="#" title="">Work</a></li>
                                        <li><a href="#" title="">Php</a></li>
                                        <li><a href="#" title="">Design</a></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at libero elit. Mauris ultrices sed lorem nec efficitur. Donec sit amet facilisis lorem, quis facilisis tellus. Nullam mollis dignissim nisi sit amet tempor. Nullam sollicitudin neque a felis commodo gravida at sed nunc. In justo nunc, sagittis sed venenatis at, dictum vel erat. Curabitur at quam ipsum. Quisque eget nibh aliquet, imperdiet diam pharetra, dapibus lacus. Sed tincidunt sapien in dui imperdiet eleifend. Ut ut sagittis purus, non tristique elit. Quisque tincidunt metus eget ligula sodales luctus. Donec convallis ex at dui convallis malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut pretium euismod mollis. Pellentesque convallis gravida ante eu pretium. Integer rutrum mi nec purus tincidunt, nec rhoncus mauris porttitor. Donec id tellus at leo gravida egestas. Suspendisse consequat mi vel euismod efficitur. Donec sed elementum libero.</p>
                                    <p> Etiam rutrum ut urna eu tempus. Curabitur suscipit quis lorem vel dictum. Aliquam erat volutpat. Pellentesque volutpat viverra pulvinar. Mauris ac sapien ac metus tincidunt volutpat eu eu purus. Suspendisse pharetra quis quam id auctor. Pellentesque feugiat venenatis urna, vitae suscipit enim volutpat vitae. Nunc egestas tortor est, at sodales ligula auctor efficitur.</p>
                                    <div class="comment-section">
                                        <h3>03 Comments</h3>
                                        <div class="comment-sec">
                                            <ul>
                                                <li>
                                                    <div class="comment-list">
                                                        <div class="bg-img">
                                                            <img src="http://via.placeholder.com/40x40" alt="">
                                                        </div>
                                                        <div class="comment">
                                                            <h3>John Smith</h3>
                                                            <span><img src="images/clock.png" alt=""> 3 min ago</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at libero elit. Mauris ultrices sed lorem nec efficitur.</p>
                                                        </div>
                                                    </div><!--comment-list end-->
                                                </li>
                                                <li>
                                                    <div class="comment-list">
                                                        <div class="bg-img">
                                                            <img src="http://via.placeholder.com/40x40" alt="">
                                                        </div>
                                                        <div class="comment">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png" alt=""> 3 min ago</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                                                        </div>
                                                    </div><!--comment-list end-->
                                                </li>
                                                <li>
                                                    <div class="comment-list">
                                                        <div class="bg-img">
                                                            <img src="http://via.placeholder.com/40x40" alt="">
                                                        </div>
                                                        <div class="comment">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png" alt=""> 3 min ago</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                                                        </div>
                                                    </div><!--comment-list end-->
                                                </li>
                                            </ul>
                                        </div><!--comment-sec end-->
                                    </div>
                                </div><!--usr_quest end-->
                            </div><!--usr-question end-->
                        </div><!--forum-post-view end-->
                        <div class="post-comment-box">
                            <h3>03 Comments</h3>
                            <div class="user-poster">
                                <div class="usr-post-img">
                                    <img src="http://via.placeholder.com/40x40" alt="">
                                </div>
                                <div class="post_comment_sec">
                                    <form>
                                        <textarea placeholder="Your Answer"></textarea>
                                        <button type="submit">Post Answer</button>
                                    </form>
                                </div><!--post_comment_sec end-->
                            </div><!--user-poster end-->
                        </div><!--post-comment-box end-->
                        <div class="next-prev">
                            <a href="#" title="" class="fl-left">Preview</a>
                            <a href="#" title="" class="fl-right">Next</a>
                        </div><!--next-prev end-->
                    </div>
                    <div class="col-lg-4">
                        <div class="widget widget-feat">
                            <ul>
                                <li>
                                    <i class="fa fa-heart"></i>
                                    <span>1185</span>
                                </li>
                                <li>
                                    <i class="fa fa-comment"></i>
                                    <span>1165</span>
                                </li>
                                <li>
                                    <i class="fa fa-share-alt"></i>
                                    <span>1120</span>
                                </li>
                                <li>
                                    <i class="fa fa-eye"></i>
                                    <span>1009</span>
                                </li>
                            </ul>
                        </div><!--widget-feat end-->
                        

                    </div>
                </div>
            </div><!--forum-questions-sec end-->
        </div>
    </section><!--forum-page end-->
    
    <div class="overview-box" id="question-box">
        <div class="overview-edit">
            <h3>Ask a Question</h3>
            <form>
                <input type="text" name="question" placeholder="Type Question Here">
                <input type="text" name="tags" placeholder="Tags">
                <textarea placeholder="Description"></textarea>
                <button type="submit" class="save">Submit</button>
                <button type="submit" class="cancel">Cancel</button>
            </form>
            <a href="#" title="" class="close-box"><i class="la la-close"></i></a>
        </div><!--overview-edit end-->
    </div><!--overview-box end-->

</div><!--theme-layout end-->`
};

let post = new VuePost({
    el: "#post",
    components: { myPost },
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
