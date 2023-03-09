import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../components/DashboardLayout/DashboardLayout";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { withSessionSsr } from "@/pages/api/auth/withSession";
function CreateAccount() {
  const [isLoading, setLoading] = useState(false);
  const [Resp, setResp] = useState("");
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await fetch("/api/voucherpay/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const resp = await response.json();
   
    if (resp.status === '200') {
      setResp({
        respType: "Success",
        message: resp.message,
      });
    } else if (resp.status >= 400) {
      setResp({
        respType: "Error",
        message: resp.message,
      });
    }  else if (!resp){
      setResp({
        respType: "Error",
        message: "Undefined Error",
      });
    }
    setLoading(false);
  };

 

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-xxl-12">
            <div className="row justify-content-center">
              <div className="col-xl-10 mt-2 ">
                <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                    <div>
                      <h4 className="fs-20 text-black">Create User</h4>
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
                            {errors.fName && (
                              <p className="text-danger" role="alert">
                                {" "}
                                {errors.first_name?.message}
                              </p>
                            )}

                            <div className="input-group-prepend">
                              <span className="input-group-text ">
                                First Name
                              </span>
                            </div>
                            <input
                              {...register("first_name", {
                                required: "Please enter your first Name",
                              })}
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Last Name
                              </span>
                            </div>
                            <input
                              {...register("last_name", {
                                required: "Please enter your Last Name",
                              })}
                              type="text"
                              placeholder="Last Name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Email Address
                              </span>
                            </div>
                            <input
                              {...register("email", {
                                required: "Email is required",
                              })}                               
                              type="email"
                              placeholder="Voucher@voucherpay.io"
                              className="form-control"
                            /> 
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Mobile Number
                              </span>
                            </div>
                            <input
                              {...register("mobile_number", {
                                required: "Please input your phone Number",
                              })}
                              type="text"
                              className="form-control"
                              placeholder="234 XXX XXXX XXXX"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">NIN</span>
                            </div>
                            <input
                              {...register("nin", {
                                required:
                                  "Please input your National Identity Number",
                              })}
                              type="number"
                              className="form-control"
                              placeholder="1234567890"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">BVN</span>
                            </div>
                            <input
                              {...register("bvn", {
                                required:
                                  "Please input yout Bank Verification Number",
                              })}
                              type="text"
                              className="form-control"
                              placeholder="1234567890"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Address</span>
                            </div>
                            <input
                              {...register("address", {
                                required: "Please input your address",
                              })}
                              type="text-area"
                              className="form-control"
                              placeholder="Address"
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
                                 > </span> Create User
                               </button>
                              ) : (
                                <button
                                
                                  className="fs-20 btn btn-xs btn-primary light me-1"
                                >
                                  Create User
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
  );
}
 

CreateAccount.getLayout = function getLayout(page) { 
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


export default CreateAccount;
