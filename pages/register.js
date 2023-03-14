import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import * as Yup from "yup";
import axios from "axios";
import useUser from "../lib/useUser";
import HomeLayout from "../components/HomeLayouts/HomeLayout";

import { DisabledBtnLoader } from "../components/utils/loader";
import { Response } from "@/components/utils/Response";

export default function SignUp() {
  const [isLoading, setLoading] = useState(false);
  const [resp, setResp] = useState({ respType: "", message: "" });
  console.log("respp", resp);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      const responseData = await response.json();
      console.log("111111111111111111");
      console.log("responseData", responseData);

      if (responseData.statuscode === "206") {
        setResp({
          respType: responseData.success,
          message: responseData.message,
        });
      } else {
        setResp({
          respType: responseData.success,
          message: responseData.message,
        });
      }
    } catch (error) {
      console.log("Error", error);
      console.log("222222222222222");
      setResp({
        success: false,
        message: error.message,
      });
    } finally {
      /*   reset(); */
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <section
        className="hero-section  background-img full-screen"
        style={{
          background:
            'url("img/Smart-agric-bg.png") no-repeat center center / cover',
        }}
      >
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center pt-5 pt-sm-5 pt-md-5 pt-lg-0">
            <div className="col-md-6 col-lg-6">
              <div className="card login-signup-card shadow-lg mb-0">
                {resp.respType === false ? (
                  <div className="alert alert-danger   fade show">
                    <strong>Error!</strong> {resp.message}
                  </div>
                ) : (
                  ""
                )}
                {resp.respType === true ? (
                  <>
                    <Response
                      resp={{
                        respType: "success",
                        message: "User successfully Created",
                        application: "Sign Up",
                      }}
                    />
                    <div className="d-flex justify-content-center align-items-center">
                      <Link
                        href="/login"
                        className="fs-20 btn btn-xs btn-primary light me-1 mb-5"
                      >
                        Login
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-body px-md-5 py-5">
                      <div className="mb-3">
                        <h6 className="h3">Create account</h6>
                        <p className="text-muted mb-0">
                          Made with love for Farmers by Farmers.
                        </p>
                      </div>
                      <form
                        className="login-signup-form"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        {resp.respType == "Success" ? (
                          <div className="alert alert-primary   fade show">
                            <strong>Success!</strong> {resp.message}
                          </div>
                        ) : resp.respType == "Error" ? (
                          <div className="alert alert-danger   fade show">
                            <strong>Error!</strong> {resp.message}
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="first_name" className="mb-0">
                            Business Name
                          </label>
                          {errors.business_name && (
                            <p className="text-danger" role="alert">
                              {" "}
                              {errors.business_name?.message}
                            </p>
                          )}
                          {/* Input group */}
                          <div className="input-group ">
                            <input
                              type="text"
                              className="form-control"
                              {...register("business_name", {
                                required: "Please provide this detail",
                              })}
                              id="business_name"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="first_name" className="mb-0">
                            First Name
                          </label>
                          {errors.first_name && (
                            <p className="text-danger" role="alert">
                              {" "}
                              {errors.first_name?.message}
                            </p>
                          )}
                          {/* Input group */}
                          <div className="input-group  ">
                            <input
                              type="text"
                              className="form-control"
                              {...register("first_name", {
                                required: "Please provide this detail",
                              })}
                              name="first_name"
                              id="first_name"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="last_name" className="mb-0">
                            Last Name
                          </label>
                          {errors.last_name && (
                            <p className="text-danger" role="alert">
                              {" "}
                              {errors.last_name?.message}
                            </p>
                          )}
                          {/* Input group */}
                          <div className="input-group ">
                            <input
                              type="text"
                              className="form-control"
                              {...register("last_name", {
                                required: "Please provide this detail",
                              })}
                              name="last_name"
                              id="last_name"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="last_name" className="mb-0">
                            Phone Number
                          </label>
                          {errors.phone_number && (
                            <p className="text-danger" role="alert">
                              {" "}
                              {errors.phone_number?.message}
                            </p>
                          )}
                          {/* Input group */}
                          <div className="input-group  ">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="XXX-XXXX-XXXX"
                              {...register("phone_number", {
                                required: "Please provide this detail",
                              })}
                              name="phone_number"
                              id="phone_number"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="email" className="mb-0">
                            Email Address
                          </label>
                          {/* Input group */}
                          {errors.email && (
                            <p className="text-danger" role="alert">
                              {" "}
                              {errors.email?.message}
                            </p>
                          )}
                          <div className="input-group  ">
                            <input
                              type="email"
                              className="form-control"
                              {...register("email", {
                                required: "Please provide your email address",
                              })}
                              name="email"
                              id="email"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="companytype" className="mb-0">
                            Manager Type
                          </label>
                          {/* Input group */}
                          {errors.companytype && (
                            <p className="text-danger" role="alert">
                              {" "}
                              {errors.companytype?.message}
                            </p>
                          )}

                          <div className="input-group  ">
                            <select
                              className="form-control"
                              name="companytype"
                              {...register("companytype", {
                                required:
                                  "Select the type of manager you are registering as.",
                              })}
                              id="companytype"
                            >
                              <option value="">Select a category</option>
                              <option value={1}>Cluster Manager</option>
                              <option value={2}>Group Manager</option>
                              <option value={3}>Area Manager</option>
                              <option value={4}>Mobile Manager</option>
                              <option value={5}>Enterprise Managers</option>
                              <option value={6}>Enterprises</option>
                              <option value={7}>BDSP</option>
                              <option value={8}>Validator</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group mb-3">
                          {/* Label */}
                          <label htmlFor="password" className="mb-0">
                            Password
                          </label>
                          {/* Input group */}

                          <div className="input-group ">
                            <input
                              type="password"
                              className="form-control"
                              {...register("password", {
                                required: "Please provide a secured password",
                              })}
                              name="password"
                              id="password"
                            />
                          </div>
                        </div>
                        {/* Submit */}
                        {isLoading === true ? (
                          <DisabledBtnLoader />
                        ) : (
                          <button
                            className={`btn btn-lg d-block w-100 ${styles.solidbtn} border-radius mt-4 mb-3`}
                          >
                            Sign Up
                          </button>
                        )}
                      </form>
                    </div>{" "}
                    <div className="card-footer px-md-5 bg-transparent border-top text-center">
                      <small>Already have an account?</small>
                      <Link href="/login" className="small">
                        Sign in
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*    <div className="bottom-img-absolute">
          <img src="img/wave-shap.svg" alt="wave shape" className="img-fluid" />
        </div> */}
      </section>
    </div>
  );
}

// SignUp.getLayout = function getLayout(page) {
//   return <HomeLayout>{page}</HomeLayout>;
// };
