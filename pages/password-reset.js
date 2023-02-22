import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

import { DisabledBtnLoader } from "../components/utils/loader";
import axios from "axios";


export default function PasswordReset({ BASE_URL }) { 
  const [Info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);
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
      {/*hero section start*/}
      <section className="hero-section full-screen gray-light-bg">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
              {/* Image */}
              <div
                className="bg-cover vh-100 ml-n3 background-img"
                style={{ backgroundImage: "url(img/hero-bg-3.jpg)" }}
              >
                <div className="position-absolute login-signup-content">
                  <div className="position-relative text-white col-md-12 col-lg-7">
                    <h2 className="text-white">
                      Forgot Password ? <br /> Don&apos;t Worry You Can Reset
                    </h2>
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
                {/* Heading */}
                <h1 className="text-center mb-1">Password Reset</h1>
                {/* Subheading */}
                <p className="text-muted text-center mb-5">
                  Enter your email to get a password reset link.
                </p>
                {/* Form */}
                <form
                  className="login-signup-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {Info !== "" && (
                    <div
                      className="alert alert-info fade show text-center"
                      role="alert"
                    >
                      <strong>{Info}</strong>
                    </div>
                  )}
                  <div className="form-group">
                  {errors?.email && <p className="text-danger" role="alert"> {errors.userid?.message}</p> } 
                    
                    <div className="input-group input-group-merge">
                      <div className="input-icon">
                        <span className="ti-email color-primary" />
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@msmes.io"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        name="email"
                      />{" "}
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
          {/* / .row */}
        </div>
      </section>
      {/*hero section end*/}
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


 