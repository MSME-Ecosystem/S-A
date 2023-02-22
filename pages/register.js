import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import * as Yup from "yup";
import axios from "axios";
import useUser from "../lib/useUser";
import HomeLayout from "../components/HomeLayouts/HomeLayout";

import { DisabledBtnLoader } from "../components/utils/loader";

export default function SignUp({ BASE_URL }) {
  const [Info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);

  let isAddMode = true;
  useEffect(() => {
    localStorage.removeItem("menu");
  }, []);
  // form validation rules
  const validationSchema = Yup.object().shape({
    userid: Yup.string().required("Email is required"),
    email: Yup.string().required("First Name is required"),
    password: Yup.string()
      .transform((x) => (x === "" ? undefined : x))
      .concat(isAddMode ? Yup.string().required("Password is required") : null),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get(
        BASE_URL + "/api.php",
        {
          params: {
            regid: "jsonprereg",
            app: "truss",
            companyemail: data.companyemail,
            companyname: data.companyname,
            companytype: data.companytype,
            companytype: data.companytype,
            companytype: data.companytype,
            status: "0",
            subbtn: "subbtn",
          },
        },
        customConfig
      )
      .then((resp) => {
        setInfo(resp.data.message);
        setLoading(false);
        if (resp.data.status === 200) {
          setLoading(false);
        }
      })
      .catch(function (error) {
        setLoading(false);
        setInfo(error.message);        
      });
  };

  return (
    <div className="main">
      <section
        className="hero-section ptb-100 background-img full-screen"
        style={{
          background:
            'url("img/Smart-agric-bg.png") no-repeat center center / cover',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
            <div className="col-md-7 col-lg-6">
              <div className="hero-content-left text-white">
                <h1 className="text-white">Create Your Account</h1>
                <p className="lead">
                      With MSMEs Ecosystem you are one step ahead.
                    </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="card login-signup-card shadow-lg mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-5">
                    <h6 className="h3">Create account</h6>
                    <p className="text-muted mb-0">
                      Made with love by developers for developers.
                    </p>
                  </div>
                  <form
                    className="login-signup-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {Info !== "" && (
                    <div
                      className="alert alert-info fade show text-center"  
                      role="alert"
                    >
                      <strong >{Info}</strong> 
                    </div>
                  )} <div className="form-group mb-3">
                      {/* Label */}
                      <label htmlFor="companyname" className="pb-1">
                        Organization Name
                      </label>
                      {errors.companyname && (
                        <p className="text-danger" role="alert">
                          {" "}
                          {errors.companyname?.message}
                        </p>
                      )}
                      {/* Input group */}
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-user color-primary" />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Organization Name"
                          {...register("companyname", {
                            required: "Please provide this detail",
                          })}
                          name="companyname"
                          id="companyname"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      {/* Label */}
                      <label htmlFor="companyemail" className="pb-1">
                        Email Address
                      </label>
                      {/* Input group */}
                      {errors.companyemail && (
                        <p className="text-danger" role="alert">
                          {" "}
                          {errors.companyemail?.message}
                        </p>
                      )}
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-email color-primary" />
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          {...register("companyemail", {
                            required:
                              "Please provide your company email address",
                          })}
                          name="companyemail"
                          id="companyemail"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      {/* Label */}
                      <label htmlFor="companytype" className="pb-1">
                        Manager Type
                      </label>
                      {/* Input group */}
                      {errors.companytype && (
                        <p className="text-danger" role="alert">
                          {" "}
                          {errors.companytype?.message}
                        </p>
                      )}

                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-user color-primary" />
                        </div>
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
                </div>
                <div className="card-footer px-md-5 bg-transparent border-top text-center">
                  <small>Already have an account?</small>
                  <Link href="/dashboard" className="small">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img-absolute">
          <img src="img/wave-shap.svg" alt="wave shape" className="img-fluid" />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const userId = ""; //params.userId;
  const BASE_URL = process.env.BASE_URL;
  return {
    props: {
      BASE_URL,
    },
  };
}

SignUp.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
