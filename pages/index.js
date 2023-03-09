import Link from "next/link";
import HomeLayout from "../components/HomeLayouts/HomeLayout";
import styles from "../styles/Home.module.css";
import { withSessionSsr } from "./api/auth/withSession";

export default function Home() {
  return (
    <div className="main">
      {/*hero section start*/}
      <section
        className="hero-section pt-100 background-img"
        style={{
          background: 'url("img/bg-img.png") no-repeat center center / cover',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between py-5">
            <div className="col-md-7 col-lg-6 col-xl-67">
              <div className="hero-content-left text-white">
                <h1 className="text-white fw-bold">Agricultural Business with convenience</h1>
                <p className="lead mb-0"> 
                  Improve traceability, transparency, and efficiency  

                </p>
                <p className="lead"> 
               in the
                agriculture   business industry
               

                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="hero-animation-img">
                <img src="img/prod_phone.png" alt="app" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img-absolute">
          <img src="img/hero-img.png" alt="wave shape" className="img-fluid" />
        </div>
      </section>
      {/*hero section end*/}
      {/*download section start*/}
      <section
        className="download-section pt-100  "
        style={{
          background:
            'url("img/smart_chain.png") no-repeat center center / cover',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="download-content text-white pb-100">
                <h2 className="">
                  Start Managing your Apps Business, more Faster
                </h2>
                <p className="lead text-dark">
                  Objectively deliver professional value with diverse
                  web-readiness. Collaboratively transition wireless customer
                  service without goal-oriented catalysts for change.
                  Collaboratively.
                </p>
                <div className="download-btn">
                  <Link href="/register" className={`btn ${styles.solidbtn}`}>
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="download-img d-flex align-items-end">
                <img
                  src="img/qwe.png"
                  alt="download"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*download section end*/}
      {/*promo section start*/}
      <section className="promo-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>KEY FEATURES</h2>
                <p className="lead">
                  Following reasons show advantages of adding Smart Agriculture
                  to your lead pages, demos and checkouts evisculate
                  interoperable imperatives rather.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center equal">
            <div className="col-md-6 col-xl-3">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                <img
                  src="img/image-icon-2.png"
                  alt="icon"
                  className="img-fluid"
                />
                </div>
                <h5>Loan</h5>
                <p>Get a farming loan based on your terms and condition.</p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                <img
                  src="img/image-icon-5.png"
                  alt="icon"
                  className="img-fluid"
                />
                </div>
                <h5>Buy/Sell</h5>
                <p>
                  Reach your target market and get everything you want in one
                  place
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                <img
                  src="img/image-icon-6.png"
                  alt="icon"
                  className="img-fluid"
                />
                </div>
                <h5>Lease</h5>
                <p>Lease farm tools &amp; equipment.</p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                <img
                  src="img/image-icon-7.png"
                  alt="icon"
                  className="img-fluid"
                />
                </div>
                <h5>Advertise</h5>
                <p>Help people know more about your products</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*promo section end*/}
 
      {/*overflow block start*/}
      <div className="overflow-hidden">
        {/*about us section start  package-section background-shape-right ptb-100*/}
        {/* <section id="about" className="about-us ptb-100 background-shape-img"> */}
        <section
          id="about"
          className="package-section background-shape-right ptb-100 gray-light-bg"
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7 col-xl-6">
                <div className="about-content-left section-heading">
                  <h2>TRANSACTIONS WITH SMARTAGRIC</h2>
                  <div className="single-feature mb-4 mt-5">
                    <div className="icon-box-wrap d-flex align-items-center mb-2">
                      <div className="me-3 icon-box">
                        <img
                          src="img/image-icon-1.png"
                          alt="icon image"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                    Invest in Farmers Cooperative.
                      </p>
                    </div>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="me-3 icon-box">
                        <img
                          src="img/image-icon-2.png"
                          alt="icon image"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Track the journey of your food from farm to table
                      </p>
                    </div>
                    <p />
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="me-3 icon-box">
                        <img
                          src="img/image-icon-3.png"
                          alt="icon image"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Improve efficiency and reduce costs by streamlining supply chain management
                      </p>
                    </div>
                    <p />
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="me-3 icon-box">
                        <img
                          src="img/image-icon-4.png"
                          alt="icon image"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Connect with other farmers and growers around the world and share knowledge and resources.
                      </p>
                    </div>
                    <p />
                  </div>
                  <div className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="me-3 icon-box">
                        <img
                          src="img/image-icon-4.png"
                          alt="icon image"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">
                      Invest in sustainable farming practices and support local communities.
                      </p>
                    </div>
                    <p />
                  </div>
                 
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-content-right">
                  <img
                    src="img/image-11.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*about us section end*/}
      </div>
      {/*overflow block end*/}
      {/*feature section start*/}
      <section id="features" className="feature-section ptb-100">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-md-4">
              <div className="download-img">
                <img
                  src="img/image-14.png"
                  alt="download"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="feature-contents section-heading">
                <h2>
                  PAY A BILL WITH <br />
                  SMARTAGRIC
                </h2>
                <p>Bill Payments made easy with Smart Agric.</p>
                <div className="single-feature mb-4">
                  <div className="icon-box-wrap mb-2">
                    <div className="me-3 icon-box">
                      <i className="fas fa-mobile h1"></i>
                    </div>
                    <div>
                      <h3 className="mb-0">Phone</h3>

                      <p className="mb-0">
                        {" "}
                        Purchase Airtime directly from your purse.
                      </p>
                    </div>
                  </div>
                  <p />
                </div>
                <div className="single-feature mb-4">
                  <div className="icon-box-wrap mb-2">
                    <div className="me-3 icon-box">
                      <i className="fas fa-tv-alt h2"></i>
                    </div>

                    <div>
                      <h3 className="mb-0">TV</h3>

                      <p className="mb-0"> Buy a TV subscription.</p>
                    </div>
                  </div>
                  <p />
                </div>
                <div className="single-feature mb-4">
                  <div className="icon-box-wrap mb-2">
                    <div className="me-3 icon-box">
                      <i className="fas fa-bolt h2"></i>
                    </div>

                    <div>
                      <h3 className="mb-0">Power</h3>

                      <p className="mb-0"> Pay Power Bills.</p>
                    </div>
                  </div>
                  <p />
                </div>
                <div className="single-feature mb-4">
                  <div className="icon-box-wrap mb-2">
                    <div className="me-3 icon-box">
                      <i className="fas fa-gas-pump h2"></i>
                    </div>

                    <div>
                      <h3 className="mb-0">Gas</h3>

                      <p className="mb-0"> Buy Cooking Gas.</p>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*feature section end*/}
     
      {/*our video promo section start*/}
      <section
        className="video-promo ptb-100 background-img bg-transparent"
        
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="video-promo-content mt-4 text-center">
                <h5 className="mt-4 text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem sequi deserunt perspiciatis consequuntur blanditiis
                  earum neque minus? Saepe, neque quae! Quasi unde enim rem
                  molestiae aliquid tempora quis, reiciendis placeat!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our video promo section end*/}
      {/*our team section start*/}
      <section id="team" className="team-member-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Our Team Members</h2>
                <p className="lead">
                  Following reasons show advantages of adding Smart Agriculture
                  to your lead pages, foster market positioning products without
                  demos and checkouts.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src="img/team-4.jpg"
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">Edna Mason</h5>
                  <h6>Senior Designer</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-facebook" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-twitter" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-github" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-dribbble" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src="img/team-1.jpg"
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">Edna Mason</h5>
                  <h6>Senior Designer</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-facebook" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-twitter" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-github" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-dribbble" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src="img/team-2.jpg"
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">Edna Mason</h5>
                  <h6>Senior Designer</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-facebook" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-twitter" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-github" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-dribbble" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src="img/team-3.jpg"
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">Edna Mason</h5>
                  <h6>Senior Designer</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-facebook" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-twitter" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-github" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <span className="ti-dribbble" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our team section end*/}
      {/*our blog section start*/}
      <section id="blog" className="our-blog-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-heading mb-5">
                <h2>OTHER SERVICES </h2>
                <p className="lead">
                  SmartAgric is a complete convenience package with several
                  benefits for those in the agricultural sector.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="single-blog-card card border-0 shadow-sm">
                <span className="category position-absolute badge badge-pill text-bg-primary">
                  Lifestyle
                </span>
                <img
                  src="img/blog/1.jpg"
                  className="card-img-top position-relative"
                  alt="blog"
                />
                <div className="card-body">
                  <div className="post-meta mb-2">
                    <ul className="list-inline meta-list">
                      <li className="list-inline-item">Jan 21, 2019</li>
                      <li className="list-inline-item">
                        <span>45</span> Comments
                      </li>
                      <li className="list-inline-item">
                        <span>10</span> Share
                      </li>
                    </ul>
                  </div>
                  <h3 className="h5 card-title">
                    <Link href="#">Appropriately productize fully</Link>
                  </h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk.
                  </p>
                  <Link href="#" className="detail-link">
                    Read more <span className="ti-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="single-blog-card card border-0 shadow-sm">
                <span className="category position-absolute badge badge-pill text-bg-danger">
                  Technology
                </span>
                <img
                  src="img/blog/2.jpg"
                  className="card-img-top position-relative"
                  alt="blog"
                />
                <div className="card-body">
                  <div className="post-meta mb-2">
                    <ul className="list-inline meta-list">
                      <li className="list-inline-item">May 26, 2019</li>
                      <li className="list-inline-item">
                        <span>30</span> Comments
                      </li>
                      <li className="list-inline-item">
                        <span>5</span> Share
                      </li>
                    </ul>
                  </div>
                  <h3 className="h5 card-title">
                    <Link href="#">Quickly formulate backend</Link>
                  </h3>
                  <p className="card-text">
                    Synergistically engage effective ROI after customer directed
                    partnerships.
                  </p>
                  <Link href="#" className="detail-link">
                    Read more <span className="ti-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="single-blog-card card border-0 shadow-sm">
                <span className="category position-absolute badge badge-pill text-white bg-info">
                  Science
                </span>
                <img src="img/blog/3.jpg" className="card-img-top" alt="blog" />
                <div className="card-body">
                  <div className="post-meta mb-2">
                    <ul className="list-inline meta-list">
                      <li className="list-inline-item">Apr 25, 2019</li>
                      <li className="list-inline-item">
                        <span>41</span> Comments
                      </li>
                      <li className="list-inline-item">
                        <span>30</span> Share
                      </li>
                    </ul>
                  </div>
                  <h3 className="h5 card-title">
                    <Link href="#">Objectively extend extensive</Link>
                  </h3>
                  <p className="card-text">
                    Holisticly mesh open-source leadership rather than proactive
                    users.
                  </p>
                  <Link href="#" className="detail-link">
                    Read more <span className="ti-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our blog section end*/}
      {/*contact us section start*/}
      <section id="contact" className="contact-us ptb-100 gray-light-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3 message-box d-none">
              <div className="alert alert-danger" />
            </div>
            <div className="col-md-5">
              <div className="section-heading">
                <h2>Contact With Us</h2>
                <p>
                  It&apos;s very easy to get in touch with us. Just use the
                  contact form or pay us Link visit for Link coffee at the
                  office. Dynamically innovate competitive technology after an
                  expanded array of leadership.
                </p>
              </div>
              <div className="footer-address">
                <h6>
                  <strong>Head Office</strong>
                </h6>
                <p>121 King St, Melbourne VIC 3000, Australia</p>
                <ul>
                  <li>
                    <span>Phone: +61 2 8376 6284</span>
                  </li>
                  <li>
                    <span>
                      Email :
                      <Link href="mailto:hello@yourdomain.com">
                        hello@yourdomain.com
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <form
                action="#"
                method="POST"
                id="contactForm"
                className="contact-us-form"
                noValidate="novalidate"
              >
                <h5>Reach us quickly</h5>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="phone"
                        defaultValue
                        className="form-control"
                        id="phone"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="company"
                        defaultValue
                        size={40}
                        className="form-control"
                        id="company"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group mb-3">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control h-100"
                        rows={7}
                        cols={25}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className={`btn ${styles.solidbtn} `}
                      id="btnContactUs"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </section>
      {/*contact us section end*/}
      {/*client section start*/}
      <section className="client-section ptb-100">
        <div className="container">
          {/*clients logo start*/}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Trusted by Companies</h2>
                <p className="lead">
                  Rapidiously morph transparent internal or &quot;organic&quot;
                  sources whereas resource sucking e-business. Conveniently
                  innovate compelling internal.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                <div className="item single-client">
                  <img
                    src="img/client-5-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-1-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-6-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-3-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-4-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-5-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-7-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-2-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-1-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="img/client-3-color.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*clients logo end*/}
        </div>
      </section>
      {/*client section start*/}
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
 

