import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";

import { Response } from "@/components/utils/Response";

import { withSessionSsr } from "@/pages/api/auth/withSession";
import Link from "next/link";
export default function Sell({ balance }) {
  const [voucherBalance, setvoucherBalance] = useState(balance);
  const [isLoading, setLoading] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [Resp, setResp] = useState("");
  const [d, setD] = useState("");

  function Balance() {
    if (showBalance == false) {
      setShowBalance(true);
    } else {
      setShowBalance(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        let menu = localStorage.getItem("asgard");
        if (menu != null) {
          let obj = JSON.parse(menu);
          setD(obj);
          let d = obj.vID;
          const data = {
            customer_id: d,
          };
          try {
            const response = await fetch("/api/voucherpay/getBalance", {
              method: "POST",
              headers: {
                token: process.env.VOUCHER_PAY_PK_LIVE,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ data }),
            });

            const resp = await response.json();

            setvoucherBalance(resp?.current_balance);
          } catch (error) {
            console.error(error.response);
          }
        } else {
          Router.push("../login");
        }
      }
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    /*  setLoading(true); */
    const response = await fetch("/api/voucherpay/sellToBank", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, d }),
    });
    const resp = await response.json();
    console.log(resp);
    if(resp.statuscode == '202' ) {
      setResp({
        respType: "Success",
        message: resp.message,
      });
    } else  {
      setResp({
        respType: "Error",
        message: resp.message,
      });
    } /*  else if (!resp.length){
      setResp({
        respType: "Error",
        message: "Undefined Error",
      });
    } */
    setLoading(false);
  };
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-xxl-12">
              <div className="row justify-content-center">
                <div className="col-xl-10 mt-2 ">
                  <div className="card">
                    <div className="card-header d-sm-flex d-block pb-0 border-0">
                      <div>
                        <h4 className="fs-20 text-black">
                        Withdraw Voucher to Bank Account
                        </h4>
                        <p className="mb-0 fs-12">
                          Please provide the Bank details you want to send money
                          to below
                        </p>
                      </div>
                    </div>
                    <div className="card-body  ">
                      <div className="basic-form">
                        <form
                          className="form-wrapper"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {Resp.respType === "Error" ? (
                            <div className="alert alert-danger   fade show">
                              <strong>Error!</strong> {Resp.message}
                            </div>
                          ) : (
                            ""
                          )}
                          {Resp.respType === "Success" ? (
                            <>                            
                            <Response
                              resp={{
                                respType: "success",
                                message: "Voucher transferred successfully",
                                application: "Voucher Sale",
                              }}
                            />
                            <div className="d-flex justify-content-center align-items-center">
                            <Link
                              href="/dashboard"
                              className="fs-20 btn btn-xs btn-primary light me-1"
                            >
                              Go Home
                            </Link>
                          </div>
                          </>
                          ) : (
                            <>
                              <div className="form-group">
                                <div className="input-group input-group-lg">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text ">
                                      Bank Account
                                    </span>
                                  </div>
                                  <input
                                    {...register("account_number", {
                                      required: "To which Bank Account Number?",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="1234567890"
                                    name="account_number"
                                    id="account_number"
                                  />
                                </div>
                              </div>

                              <div className="form-group">
                                <div className="input-group input-group-lg">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      Bank Name
                                    </span>
                                  </div>
                                  <input
                                    {...register("bank_name", {
                                      required: "Please enter your Last Name",
                                    })}
                                    type="text"
                                    className="form-control"
                                    name="bank_name"
                                    id="bank_name"
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group input-group-lg">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      Account Name
                                    </span>
                                  </div>
                                  <input
                                    {...register("account_name", {
                                      required: "Please enter your Last Name",
                                    })}
                                    type="text"
                                    className="form-control"
                                    name="account_name"
                                    id="account_name"
                                  />
                                </div>
                              </div>
                              {/*   <h6 className="text-end">Alao Miracle Olaoluwa</h6>
                               */}
                              <div className="form-group">
                                <div className="input-group input-group-lg">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      Amount
                                    </span>
                                  </div>
                                  <input
                                    {...register("amount", {
                                      required: "Please enter your Last Name",
                                    })}
                                    type="text"
                                    className="form-control"
                                    placeholder="0.000000"
                                  />
                                  <button
                                    className="fs-20 btn btn-xs btn-primary light me-1"
                                    type="button"
                                  >
                                    NGN
                                  </button>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group input-group-lg">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      Description
                                    </span>
                                  </div>
                                  <input
                                    {...register("transaction_desc", {
                                      required: "Please enter your Last Name",
                                    })}
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="row mt-4 align-items-center">
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6">
                                  <div className="d-flex justify-content-end">
                                    {isLoading === true ? (
                                      <button
                                        className="fs-20 btn btn-xs btn-primary light me-1"
                                        type="button"
                                        disabled
                                      >
                                        <span
                                          className="spinner-border spinner-border-sm mx-2"
                                          role="status"
                                          aria-hidden="true"
                                        >
                                          {" "}
                                        </span>{" "}
                                        Send
                                      </button>
                                    ) : (
                                      <button
                                        href="javascript:void(0);"
                                        className="fs-20 btn btn-xs btn-primary light me-1"
                                      >
                                        Send
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Sell.getLayout = function getLayout(page) {
  return (
    <>
      <DashboardLayout>{page}</DashboardLayout>
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

// export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
//   const user = req.session.user;

//   if (!user) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       user: user,
//     },
//   };
// });
