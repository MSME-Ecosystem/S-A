import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import { DisabledBtnLoader } from "../../../components/utils/loader";
import Link from "next/link";

import QRCodeGenerator from "../../../components/utils/QRCode";
import { withSessionSsr } from "@/pages/api/auth/withSession";
export default function Transfer() {
  const [isLoading, setLoading] = useState(false);

  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [activeTab, setActiveTab] = useState("banktransfer");
  const banktransfer = () => {
    console.log("111111111111111111111")
    setActiveTab("banktransfer");
  };
  const qrcode = () => {
    console.log("2222222222222222222222222222")
    setActiveTab("qrcode");
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const bankDetails = {
    accountNumber: "012345678909876",
    bankName: "Miracle Bank",
    beneficiary: "MSME Co-operative",
    referenceNum: "jserlk23343p4mvefopkp3TLMLER4IP3MFF",
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4>Fund Account</h4>
                <p className="mb-0">
                  Use any of these channels to fund your account
                </p>
              </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <button
                onClick={banktransfer}
                className="fs-20 btn btn-xs btn-primary light me-1"
              >
                <i className="fa fa-bank" />
              </button>
              <button
                onClick={qrcode}
                className="fs-20 btn btn-xs btn-primary light me-1"
              >
                <i className="fa fa-qrcode" />
              </button>
            </div>
          </div>
          {activeTab === "banktransfer" ? (
            <div className="row">
              <div className="col-xl-6 col-xxl-12">
                <div className="row justify-content-center">
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header d-sm-flex justify-content-between align-items-center">
                        <div className="welcome-text">
                          <h4>Fund Account</h4>
                          <p className="mb-0">Bank Transfer</p>
                        </div>
                        <h4 className="fs-20   btn btn-xs btn-primary light me-1">
                          <i className="fa fa-bank" />
                        </h4>
                      </div>
                      <div className="card-body">
                        <p>
                          To add funds to your VoucherPay Wallet, make a bank
                          transfer to the account below. Funds reflect instantly
                        </p>
                        <div className="d-flex gap-3 justify-content-start ">
                          <div className=" p-1 ">
                            <h4 className="fs-20   btn btn-xs btn-primary light">
                              {" "}
                              <i className="fa fa-university" />
                            </h4>
                          </div>
                          <div className="p-1">
                            <h4 className="card-title card-intro-title m-0">
                              Bank Name
                            </h4>
                            <p>{bankDetails.bankName}</p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-start ">
                          <div className="p-1 ">
                            <h4 className="fs-20   btn btn-xs btn-primary light">
                              {" "}
                              <i className="fa fa-hashtag" />
                            </h4>
                          </div>
                          <div className="p-1">
                            <h4 className="card-title card-intro-title m-0">
                              Account Number
                            </h4>
                            <p>{bankDetails.accountNumber}</p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-start ">
                          <div className="p-1 ">
                            <h4 className="fs-20   btn btn-xs btn-primary light">
                              {" "}
                              <i className="fa fa-user" />
                            </h4>
                          </div>
                          <div className="p-1">
                            <h4 className="card-title card-intro-title m-0">
                              Beneficiary
                            </h4>
                            <p>{bankDetails.beneficiary}</p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-start ">
                          <div className="p-1 ">
                            <h4 className="fs-20   btn btn-xs btn-primary light">
                              {" "}
                              <i className="fa fa-asterisk" />
                            </h4>
                          </div>
                          <div className="p-1">
                            <h4 className="card-title card-intro-title m-0">
                              Reference Number / Summary
                            </h4>
                            <p>{bankDetails.referenceNum}</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-sm-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-primary"
                          onClick={handleCopyClick}
                        >
                          {isCopied ? "Copied" : <i className="fa fa-copy" />}
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={handleCopyClick}
                        >
                          <i className="fa fa-share-nodes" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === "qrcode" ? (
            <div className="row">
              <div className="col-xl-6 col-xxl-12">
                <div className="row justify-content-center">
                  <div className="col-xl-6">
                    <div className="card">
                      <div className="card-header d-sm-flex justify-content-between align-items-center">
                        <div className="welcome-text">
                          <h4>Fund Account</h4>
                          <p className="mb-0">QR Code</p>
                        </div>
                        <h4 className="fs-20   btn btn-xs btn-primary light me-1">
                          <i className="fa fa-bank" />
                        </h4>
                      </div>
                      <div className="card-body justify-content-center align-items-center">
                        <p>
                          To add funds to your VoucherPay Wallet, Scan the Qr Code below. Funds reflect instantly
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                          <QRCodeGenerator />
                        </div>
                      </div>
                      <div className="card-footer d-sm-flex justify-content-center align-items-center">
                      
                        <button
                          className="btn btn-primary"
                          onClick={downloadQRCode}
                        >
                          Download QR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

 


Transfer.getLayout = function getLayout(page) { 
  return (
    <>
      <DashboardLayout user={page.props.user} >{page}</DashboardLayout>
      <Script src="/dashboard/vendor/global/global.min.js"></Script>
      <Script src="/dashboard/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></Script>
      <Script src="/dashboard/vendor/chart.js/Chart.bundle.min.js"></Script>
      <Script src="/dashboard/vendor/peity/jquery.peity.min.js"></Script>
      <Script src="/dashboard/vendor/apexchart/apexchart.js"></Script>
      <Script src="/dashboard/js/dashboard/dashboard-1.js"></Script>
      <Script src="/dashboard/vendor/owl-carousel/owl.carousel.js"></Script>
      <Script src="/dashboard/js/custom.js"></Script>
    </>
  );
};
 
export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;
  
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: user,
    },
  };
});
