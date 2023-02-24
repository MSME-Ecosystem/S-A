import React from "react";
import Script from "next/script";
import Link from "next/link";

function Sidebar() {
  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label first">Main Menu</li>
            <li>
              <Link
                className="  ai-icon"
                href="/dashboard"
                aria-expanded="false"
              >
                <i className="flaticon-144-layout" />
                <span className="nav-text"> Dashboard </span>
              </Link>
            </li>
            <li className="nav-label">Transactions</li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-003-diamond" />
                <span className="nav-text">Voucher Pay</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/dashboard/transfer">Transfer</Link>
                </li>
                <li>
                  <a href="/dashboard/fund-account">Fund Account</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="transaction-summary">History</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-003-diamond" />
                <span className="nav-text">Crypto Pay</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/transfer">Transfer</Link>
                </li>
                <li>
                  <a href="#">Sell</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">Convert</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-003-diamond" />
                <span className="nav-text">Fiat</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/transfer">Transfer</Link>
                </li>
                <li>
                  <a href="#">Fund</a>
                </li>
                <li>
                  <a href="#">Convert</a>
                </li>
                <li>
                  <a href="#">History</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-077-menu-1" />
                <span className="nav-text">Services</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">Sell</a>
                </li>
                <li>
                  <a href="#">Lease</a>
                </li>
                <li>
                  <a href="#">
                    Buy
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-077-menu-1" />
                <span className="nav-text">Purchase</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">Airtime</a>
                </li>
                <li>
                  <a href="#">Buy Power</a>
                </li>
                <li>
                  <a href="#">
                    Buy Gas
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Buy Petrol
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Book Flights
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Insurance
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Health Care
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    AceMove
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Government
                    <span className="badge badge-xs badge-danger">
                      Coming Soon
                    </span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-061-puzzle" />
                <span className="nav-text">Tier 2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">GPS FARM MAP</a>
                </li>
                <li>
                  <a href="#">WEIGHT CAPTURE</a>
                </li>
                <li>
                  <a href="#">LABOUR</a>
                </li>
                <li>
                  <a href="#">FARMING BUSINESS PLANS</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-061-puzzle" />
                <span className="nav-text">Academy</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Training</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-061-puzzle" />
                <span className="nav-text">Esusu</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">Personal Esusu</a>
                </li>
                <li>
                  <a href="#">Community Esusu</a>
                </li>
                <li>
                  <a href="#">Cooperative Membership</a>
                </li>
                <li>
                  <a href="#">Cooperative Dues</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Transactions</li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-003-diamond" />
                <span className="nav-text">Fiat</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">Deposit</a>
                </li>
                <li>
                  <a href="#">Withdraw</a>
                </li>
                <li>
                  <a href="#">Send Money</a>
                </li>
                <li>
                  <a href="#">Int&apos;l Payments</a>
                </li>
                <li>
                  <a href="#">Crypto Payments</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-053-heart" />
                <span className="nav-text"> ADVERTISE</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#">Donate</a>
                </li>
                <li>
                  <a href="#">Request Grant</a>
                </li>
                <li>
                  <a href="#">Loan</a>
                </li>
                <li>
                  <a href="#">Equity Incestment</a>
                </li>
                <li>
                  <a href="#">Request a Truss</a>
                </li>
                <li>
                  <a href="#">Manage a Truss</a>
                </li>
                <li>
                  <a href="#">Buy Shares</a>
                </li>
                <li>
                  <a href="#">Buy Stock</a>
                </li>
                <li>
                  <a href="#">Instrument</a>
                </li>
                <li>
                  <a href="#">Invoice Discounting</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">My Account</li>
            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-077-menu-1" />
                <span className="nav-text">Settings</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">KYC</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">History</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Update Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Notifications</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Team</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Bank</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Crypto</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Security</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Self Help</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">About</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="ai-icon" aria-expanded="false">
                    <span className="nav-text">Contact Support</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="has-arrow ai-icon"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="flaticon-049-copy" />
                <span className="nav-text">Security</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/">Lock Screen</Link>
                </li>
                <li>
                  <Link href="/login">Log Out</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
