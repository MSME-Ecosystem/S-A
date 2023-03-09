import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import axios from "axios";

import { withSessionSsr } from "@/pages/api/auth/withSession";
import { Response } from "@/components/utils/Response";
export default function Transfer({ balance }) {
  const [voucherBalance, setvoucherBalance] = useState(balance);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [searchLoading, isSearchLoading] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [Resp, setResp] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length === 0) {
        setResults("");
      } else {
        isSearchLoading(true);
        axios
          .get(`/api/voucherpay/search?q=${query}`)
          .then((response) => {
            console.log(response?.data.result.name);
            setResults(response?.data.result.name);
            isSearchLoading(false);
          })
          .catch((error) => {
            setResults("Invalid user");
            isSearchLoading(false);
          });
      }
    }, 2000);    
    // Cleanup function to cancel timer if user types again
    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  function Balance() {
    if (showBalance == false) {
      setShowBalance(true);
    } else {
      setShowBalance(false);
    }
  }
  const resp = {
    respType: "Error",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await fetch("/api/voucherpay/tx", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const resp = await response.json();
    console.log(resp);
    if (resp.status === true) {
      setResp({
        respType: "Success",
        message: resp.message,
      });
    } else if (resp.status === false) {
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
                        <h4 className="fs-20 text-black">Quick Transfer</h4>
                        <p className="mb-0 fs-12">
                          Current Balance: &#x20A6;
                          {showBalance ? voucherBalance : "******"}
                          <i
                            className={`fa ${
                              showBalance ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={Balance}
                          ></i>
                        </p>
                      </div>
                    </div>
                    <div className="card-body  ">
                      <div className="basic-form">
                        <form
                          className="form-wrapper"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          {Resp.respType === "Success" ? (
                            <div className="alert alert-primary   fade show">
                              <strong>Success!</strong> {Resp.message}
                            </div>
                          ) : Resp.respType === "Error" ? (
                            <div className="alert alert-danger   fade show">
                              <strong>Error!</strong> {Resp.message}
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  Receiver Email
                                </span>
                              </div>
                              <input
                                {...register("to_id", {
                                  required: "Please enter your Last Name",
                                })}
                                value={query}
                                onChange={handleSearch}
                                type="text"
                                className="form-control"
                              />
                            </div>
                            {results ? (
                              <p className="pt-1 text-end">{results}</p>
                            ) : (
                             ""
                            )}
                          </div>

                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">Amount</span>
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
                                    type="submit"
                                    className="fs-20 btn btn-xs btn-primary light me-1"
                                  >
                                    Send
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
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

Transfer.getLayout = function getLayout(page) {
  return (
    <>
      <DashboardLayout user={page.props.user}>{page}</DashboardLayout>
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
  try {
    const { vid, user } = req.session;
    const data = {
      customer_id: vid.vID,
    };
    console.log(data);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/getbalance",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
      data,
    };
    const response = await axios(config);
    const balance = response.data.current_balance;

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
        user,
        balance,
      },
    };
  } catch (error) {
    console.error(error.response?.data ?? error.message);
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
});
