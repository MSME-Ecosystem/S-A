import Link from "next/link";
import HomeLayout from "../components/HomeLayouts/HomeLayout";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className="main">
      {/*hero section start*/}

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

Contact.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
