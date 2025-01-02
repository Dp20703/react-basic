import Footer from "../Common/Footer";
import Header from "../Common/Header";
import SubService from "../Common/SubService";

export default function Home() {
    return (
        <>
            <Header />
            <HomeBanner />
            <HomeGrid />
            <HomeGallery />
            <SubService />
            <HomeServiceBlock />
            <HomeNews />
            <HomeAbout />
            <HomeFAQ />
            <NewsLetter />
            <Footer />
        </>
    );
}
function HomeBanner() {
    return (
        <>
            <section id="home" class="w3l-banner py-5">
                <div class="container py-lg-5 mt-lg-5">
                    <div class="py-lg-4 my-2">
                        <div class="banner-info-grid mt-lg-5">
                            <h3 class="mb-4">Stylish Creative Designs.</h3>
                            <section id="bottom" class="demo">
                                <a href="#bottom"><span></span>Scroll</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function HomeGrid() {
    return (
        <>
            <section class="w3l-bottom-grids-6 py-5" id="bottom">
                <div class="container py-lg-5 py-md-4 py-2">
                    <div class="grids-area-hny main-cont-wthree-fea row">
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span class="title-small mb-2">01. Video productions</span>
                                <h4><a href="#feature" class="title-head">Stunning video sequence and impressing ideas are all here.</a></h4>
                                <p class="">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                            <div class="area-box">
                                <span class="title-small mb-2">02. Branding Design</span>
                                <h4><a href="#feature" class="title-head">Great reflection of your brand be achieved by top designers.</a></h4>
                                <p class="">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                            <div class="area-box">
                                <span class="title-small mb-2">03. Graphic Design</span>
                                <h4><a href="#feature" class="title-head">Creating gorgeous graphic design meeting clients needs.</a></h4>
                                <p class="">Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function HomeGallery() {
    return (
        <>
            <section class="w3l-portfolio-8 py-5">
                <div class="portfolio-main py-lg-5 py-md-4 py-2">
                    <div class="container">
                        <div class="row galler-top">
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p1.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">UI experience</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p2.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Wordpress</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p3.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Ecommerce</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p4.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Headphones</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p5.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Mobile app</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p6.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Modern Ideas</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p8.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Creativity</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                            <div class="col-lg-3 col-sm-6 protfolio-item hover14">
                                <figure>
                                    <img src="assets/images/p7.jpg" alt="product" class="img-fluid" />
                                    <div class="img-info">
                                        <a href="#url" class="img-title">Fashion design</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.</p>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function HomeServiceBlock() {
    return (
        <>
            <section class="w3l-servicesblock py-5" id="services">
                <div class="container py-lg-5 py-md-4 py-2">
                    <div class="row">
                        <div class="col-lg-6 about-right-faq align-self">
                            <h3 class="title-big"> Importance of Skills</h3>
                            <p class="mt-lg-4 mt-3 mb-lg-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae, ad.</p>
                            <div class="progress-info info1">
                                <h6 class="progress-tittle">Figma illustrations <span class="">80%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "80%" }}
                                        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info2">
                                <h6 class="progress-tittle">PHP programming <span class="">95%</span>
                                </h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "95%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info3">
                                <h6 class="progress-tittle">Web design & development <span class="">90%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "90%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-info info4 mb-0">
                                <h6 class="progress-tittle">Adobe Photoshop <span class="">75%</span></h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 left-wthree-img mt-lg-0 mt-5">
                            <img src="assets/images/progress.jpg" alt="" class="img-fluid radius-image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function HomeNews() {
    return (
        <>
            <div class="w3l-news" id="news">
                <section id="grids5-block" class="py-5">
                    <div class="container py-lg-5 py-md-4 py-2">
                        <h3 class="title-big text-center">See what’s going on</h3>
                        <div class="row mt-lg-5 mt-4">
                            <div class="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
                                <div class="grids5-info">
                                    <a href="#blog-single" class="d-block zoom"><img src="assets/images/blog1.jpg" alt="" class="img-fluid news-image" /></a>
                                    <div class="blog-info">
                                        <h4><a href="#blog-single">Best free Web templates</a></h4>
                                        <p class="date"><span class="fa fa-calendar mr-2"></span> September 17, 2020</p>
                                        <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                        <a href="#blog-single" class="btn btn-news mt-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                                <div class="grids5-info">
                                    <a href="#blog-single" class="d-block zoom"><img src="assets/images/blog2.jpg" alt="" class="img-fluid news-image" /></a>
                                    <div class="blog-info">
                                        <h4><a href="#blog-single">Skills to become a Designer</a></h4>
                                        <p class="date"><span class="fa fa-calendar mr-2"></span> September 17, 2020</p>
                                        <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                        <a href="#blog-single" class="btn btn-news mt-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mt-lg-0 mt-5">
                                <div class="grids5-info">
                                    <a href="#blog-single" class="d-block zoom"><img src="assets/images/blog3.jpg" alt="" class="img-fluid news-image" /></a>
                                    <div class="blog-info">
                                        <h4><a href="#blog-single">How to make 404 error page?</a></h4>
                                        <p class="date"><span class="fa fa-calendar mr-2"></span> September 17, 2020</p>
                                        <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                                        <a href="#blog-single" class="btn btn-news mt-4">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

function HomeAbout() {
    return (
        <>
            <section class="w3l-testimonials" id="testimonials">
                <div class="midd-w3 py-5">
                    <div class="container py-lg-5 py-md-3">
                        <div id="owl-demo1" class="owl-carousel owl-theme mt-4 py-2 mb-4">
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p class="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p class="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p class="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p class="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>They have responded immediately whenever we have had a question or problem and have
                                                been an amazing business partner. I Will recommend their services to
                                                many of our clients and have been thrilled with the work that they have done.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Scarlett jack</h3>
                                                <p class="identity">Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <q>The service was excellent! I was very impressed with their work. These guys are
                                                incredibly talented, easy to work with, easy to get a hold of – true professionals.
                                                My project has been completed in time and on the highest level.</q>
                                        </blockquote>
                                        <div class="testi-des">
                                            <div class="peopl align-self">
                                                <h3>Grayson lily</h3>
                                                <p class="identity">Digital Marketer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function HomeFAQ() {
    return (
        <>
            <div class="w3l-faq-block py-5" id="faq">
                <div class="container py-lg-5">
                    <div class="row">
                        <div class="col-lg-6 pr-lg-5">
                            <div class="accordion">
                                <div class="accordion-item">
                                    <button id="accordion-button-1" aria-expanded="true"><span class="accordion-title">How much does
                                        a static website cost?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-2" aria-expanded="false"><span class="accordion-title">How to
                                        choose a best web template?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut pretium.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">How to download a template?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Why should i choose a free website?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut potenti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
                            <img src="assets/images/faq.jpg" alt="" class="img-fluid radius-image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function NewsLetter() {
    return (
        <>
            <section class="w3l-bottom py-5" id="newsletter">
                <div class="container py-md-5 py-md-4 text-center">
                    <div class="row">
                        <div class="col-lg-9 col-md-10 mx-auto">
                            <div class="subscribe mx-auto">
                                <div class="header-section text-center mx-auto">
                                    <h3 class="title-big">Subscribe Newsletter </h3>
                                    <p class="mt-2"> Enter your email & receive the latest news, updates & special offers from us.</p>
                                </div>
                                <form action="#" method="post" class="subscribe-wthree pt-2 mt-md-5 mt-3">
                                    <div class="d-md-flex flex-wrap subscribe-wthree-field">
                                        <input class="form-control" type="email" placeholder="Enter your email..." name="email" required="" />
                                        <button class="btn btn-style btn-primary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}