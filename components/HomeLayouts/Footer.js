import React from "react";
import Script from "next/script";
import Link from "next/link";
function Footer() {
  return (
    <>    

      <footer className="footer-section bg-transparent affix">
        <div
          className="  pt-100 bg-transparent"
       
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <div className="footer-nav-wrap text-white">
                  <img
                    src="img/smart-agric-logo.png"
                    alt="footer logo"
                    width={120}
                    className="img-fluid mb-3"
                  />
                  <p>
                    Holisticly empower premium architectures without value-added
                    ideas. Seamlessly evolve cross-platform experiences.
                  </p>
                  <div className="social-list-wrap">
                    <ul className="social-list list-inline list-unstyled">
                      <li className="list-inline-item">
                        <Link href="#" target="_blank" title="Facebook">
                          <span className="ti-facebook" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="#" target="_blank" title="Twitter">
                          <span className="ti-twitter" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="#" target="_blank" title="Instagram">
                          <span className="ti-instagram" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="#" target="_blank" title="printerst">
                          <span className="ti-pinterest" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Resources</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <Link href="#">Help</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Events</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Live Support</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Open Sources</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Documentation</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Company</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2">
                          <Link href="#">About Us</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Careers</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Customers</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Community</Link>
                        </li>
                        <li className="mb-2">
                          <Link href="#">Our Team</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="footer-nav-wrap text-white">
                      <h5 className="mb-3 text-white">Location</h5>
                      <ul className="list-unstyled support-list">
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-location-pin me-2" />
                          121 King Melbourne
                          <br />
                          Australia 3000
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-mobile me-2" />
                          <Link href="tel:+61283766284"> +61 2 8376 6284</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-email me-2" />
                          <Link href="mailto:mail@example.com">
                            {" "}
                            mail@example.com
                          </Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                          <span className="ti-world me-2" />
                          <Link href="#"> www.yourdomain.com</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*footer bottom copyright start*/}
          <div className="footer-bottom border-gray-light mt-5 py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-7">
                  <div className="copyright-wrap small-text">
                    <p className="mb-0 text-white">
                      © Smart Agriculture, All rights reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="terms-policy-wrap text-md-end text-start">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link className="small-text" href="#">
                          Terms
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="small-text" href="#">
                          Security
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className="small-text" href="#">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*footer bottom copyright end*/}
        </div>
      </footer>

      <Script
        id="jquery"
        dangerouslySetInnerHTML={{ __html: process.env.jquery }}
      ></Script>
      <Script
        id="popper"
        dangerouslySetInnerHTML={{ __html: process.env.popper }}
      ></Script>
      <Script
        id="bootstrap"
        dangerouslySetInnerHTML={{ __html: process.env.bootstrap }}
      ></Script>
      <Script
        id="magnific"
        dangerouslySetInnerHTML={{ __html: process.env.magnific }}
      ></Script>
      <Script
        id="easing"
        dangerouslySetInnerHTML={{ __html: process.env.easing }}
      ></Script>
      <Script
        id="wow"
        dangerouslySetInnerHTML={{ __html: process.env.wow }}
      ></Script>
      <Script
        id="owlarousel"
        dangerouslySetInnerHTML={{ __html: process.env.owlarousel }}
      ></Script>
      <Script
        id="jqueryCountdown"
        dangerouslySetInnerHTML={{ __html: process.env.jqueryCountdown }}
      ></Script>
      <Script
        id="validator"
        dangerouslySetInnerHTML={{ __html: process.env.validator }}
      ></Script>
      <Script
        id="scripts"
        dangerouslySetInnerHTML={{ __html: process.env.scripts }}
      ></Script>
    </>
  );
}

export default Footer;
