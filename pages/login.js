import React, { useState, useEffect } from "react";
import Link from "next/link";
import HomeLayout from "../components/HomeLayouts/HomeLayout";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

import useUser from "../lib/useUser";
import fetchJson, { FetchError } from "../lib/fetchJson";
import { DisabledBtnLoader } from "../components/utils/loader";

export default function Login() {
  const { mutateUser } = useUser({
    redirectTo: "/dashboard",
    redirectIfFound: true,
  });
  const [isLoading, setLoading] = useState(false);
  const [resp, setResp] = useState({ type: "", message: "" });

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      mutateUser(
        await fetchJson("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data }),
        })
      );

      setLoading(false);
    } catch (error) {
      if (error instanceof FetchError) {
        setResp({
          type: "error",
          message: "Username or Password does not exist",
        });
      } else {
        console.error("An unexpected error happened:", error);
      }

      setLoading(false);
    }
  };
  return (
    <div className="main">
      <section
        className="hero-section ptb-100 background-img full-screen"
        style={{
          background:
            'url("img/Smart-agric-bg.png")no-repeat center center / cover',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
            <div className="col-md-7 col-lg-6">
              <div className="position-relative text-white col-md-12 col-lg-7">
                <h2 className="text-white">Welcome Back!</h2>
                <p className="lead">
                  MSMEs Ecosystem brings you closer to achieving your business
                  dreams
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="card login-signup-card shadow-lg mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-5">
                    <h5 className="h3">Login</h5>
                    <p className="text-muted mb-0">
                      Free access to our dashboard.
                    </p>
                  </div>

                  <form
                    className="login-signup-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {resp.type && (
                      <div className={`alert alert-${resp.type}`} role="alert">
                        {resp.message}
                      </div>
                    )}
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="pb-1">
                        Email Address
                      </label>

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
                          id="email"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-danger text-end">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label htmlFor="password" className="pb-1">
                            Password
                          </label>
                        </div>
                        <div className="col-auto">
                          <Link
                            href="/password-reset"
                            className="form-text small text-muted"
                          >
                            Forgot password?
                          </Link>
                        </div>
                      </div>

                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-lock color-primary" />
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          id="password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                      </div>
                      {errors.password && (
                        <p className="text-danger text-end">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    {isLoading ? (
                      <button
                        className="btn ${styles.solidbtn}  btn btn-lg d-block w-100 border-radius mt-4 mb-3"
                        type="button"
                        disabled={isLoading}
                      >
                        <span
                          className="spinner-border spinner-border-sm mx-2"
                          role="status"
                          aria-hidden="true"
                        >
                          {" "}
                        </span>{" "}
                        Sign in
                      </button>
                    ) : (
                      <button
                        className={`btn ${styles.solidbtn}  btn btn-lg d-block w-100 border-radius mt-4 mb-3`}
                      >
                        Sign in
                      </button>
                    )}
                  </form>
                </div>
                <div className="card-footer bg-transparent border-top px-md-5 align-items-center text-center">
                  <small>Not registered?</small>
                  <Link href="/register" className="small">
                    {" "}
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img-absolute">
          <img
            src="img/hero-bg-shape-1.svg"
            alt="wave shape"
            className="img-fluid"
          />
        </div>
      </section>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
