import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import { DisabledBtnLoader } from "../components/utils/loader";

import { useForm } from "react-hook-form";
import axios from "axios";
export default function ChangePassword() {
  
  const [Info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match")
  });

const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });
  const onSubmit = (data) => {
    setLoading(true);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
    .get(
      BASE_URL + "api.php",
      {
        params: {
          regid: "post_forgot_password",
          email: data.email,
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
      <section className="hero-section full-screen gray-light-bg">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
              <div
                className="bg-cover vh-100 ml-n3 background-img"
                style={{ backgroundImage: "url(img/hero-bg-3.jpg)" }}
              >
                <div className="position-absolute login-signup-content">
                  <div className="position-relative text-white col-md-12 col-lg-7">
                    <h2 className="text-white">Change Your Password</h2>
                    <p className="lead">
                      Keep your face always toward the sunshine - and shadows
                      will fall behind you. Continually pursue fully researched
                      niches whereas timely platforms. Credibly parallel task
                      optimal catalysts for change after focused catalysts for
                      change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6">
              <div className="login-signup-wrap px-4 px-lg-5 my-5">
                <h1 className="text-center mb-1">Change Password</h1>

                <p className="text-muted text-center mb-5">
                  Enter your new password
                </p>

                <form
                  className="login-signup-form"
                  onSubmit={handleSubmit(onSubmit)}
                > <div className="form-group mb-3">
                    <label htmlFor="password" className="pb-1">New Password</label>
                    {errors?.email && <p className="text-danger" role="alert"> {errors.userid?.message}</p> } 
                   
                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <span className="ti-lock color-primary" />
                      </div>
                      <input
                      {...register("password")}
                        type="password"
                        className="form-control"
                        placeholder="New password"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="cpassword" className="pb-1">Confirm Password</label>
                    {errors.cpassword && <p className="text-danger" role="alert"> {errors.cpassword?.message}</p> } 
                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <span className="ti-lock color-primary" />
                      </div>
                      <input
                       {...register("cpassword")}
                       name="cpassword"
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                      />
                      
                    </div>
                  </div>

                  {isLoading === true ? (
                         <DisabledBtnLoader />
                         ) : (
                   <button className={`btn ${styles.solidbtn}  btn btn-lg d-block w-100 border-radius mt-4 mb-3`}  >
                      Sign in
                    </button>  
                    )}
                  <div className="text-center">
                    <small className="text-muted text-center">
                      Remember your password? <Link href="/login">Log in</Link>.
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}
