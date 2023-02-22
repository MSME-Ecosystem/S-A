import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import { DisabledBtnLoader } from "../components/utils/loader";
import Link from "next/link";
export default function Transfer() {
  const [isLoading, setLoading] = useState(false);
  const resp = {
    respType: "Error",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);

    /*   const customConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      }; */

    /*  axios
        .get(
          BASE_URL + "/api.php",
          {
            params: {
              regid: "checklogin",
              app: "truss",
              email: data.userid,
              password: data.password,
            },
          },
          customConfig
        )
        .then((resp) => {
          setInfo(resp.data.message);
  
          if (resp.data.status === "300") {
            setLoading(false);
          }
          if (resp.data.status === 200) {
            try {
              var lData = resp.data.data;
  
              lData = JSON.stringify(lData);
              localStorage.setItem("JSONdata", lData);
  
              mutateUser(
                fetchJson("/api/user/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: data.userid,
                    role: resp.data.role,
                    rc: resp.data.rc,
                    isLoggedIn: true,
                  }),
                }),
                false
              );
  
              // router.push('/apphome')
            } catch (error) {
              if (error instanceof FetchError) {
                console.log("Error", error);
                //   setErrorMsg(error.data.message)
              } else {
                console.log("An Unexpected Error Occured: ", error);
              }
            }
          }
        })
        .catch(function (error) {
          setLoading(false);
          setInfo(error.message);        
        }); */
  };
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-xxl-12">
              <div className="row">
                <div className="col-xl-12 mt-2">
                  <div className="card">
                    <div className="card-header d-sm-flex d-block pb-0 border-0">
                      <div>
                        <h4 className="fs-20 text-black">Quick Transfer</h4>
                        <p className="mb-0 fs-12">Current Balance: ***</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="basic-form">
                        <form className="form-wrapper">
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  Bank Name
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="*********"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text ">
                                  Account Number
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="1234567890"
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
                                type="text"
                                className="form-control"
                                disabled="true"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">Amount</span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="0.000000"
                              />
                            </div>
                          </div>
                          <div className="row mt-4 align-items-center">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6">
                              <div className="d-flex justify-content-end">
                                {isLoading === true ? (
                                  <DisabledBtnLoader />
                                ) : (
                                  <button
                                    href="javascript:void(0);"
                                    className="btn  btn-primary text-white text-nowrap"
                                  >
                                    Send
                                    <svg
                                      className="ms-3 scale3"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 21 21"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z"
                                        fill="white"
                                        stroke="white"
                                      />
                                    </svg>
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

                <div className="col-xl-12 mt-2">
                  <div className="card text-center">
                    
                    <div className="card-body">
                      {" "}
                      {resp.respType === "success" ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="250"
                            height="120"
                            fill="#adf802"
                            className="bi bi-check-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                          </svg>
                          <p>Success</p>
                        
                          <p className="text-center">{resp.message}</p>
                     
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="250"
                            height="150"
                            fill="#D06079"
                            className="bi bi-exclamation-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                          </svg>
                          <p className="error">Unknown Error!!</p>
                        </>
                      )}
                       <Link href="javascript:void(0);" class="btn btn-primary">Home</Link>
       
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
      <DashboardLayout>{page}</DashboardLayout>
      <Script src="/dashboard/vendor/global/global.min.js"></Script>
      <Script src="/dashboard/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></Script>
      <Script src="/dashboard/vendor/chart.js/Chart.bundle.min.js"></Script>
      <Script src="/dashboard/vendor/peity/jquery.peity.min.js"></Script>
      <Script src="/dashboard/vendor/apexchart/apexchart.js"></Script>
      <Script src="/dashboard/js/dashboard/dashboard-1.js"></Script>
      <Script src="/dashboard/vendor/owl-carousel/owl.carousel.js"></Script>
      <Script src="/dashboard/js/custom.js"></Script>
      <Script src="/dashboard/js/deznav-init.js"></Script>
      <Script src="/dashboard/js/demo.js"></Script>
      <Script src="/dashboard/js/styleSwitcher.js"></Script>
    </>
  );
};
