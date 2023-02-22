import { useForm } from "react-hook-form";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import HomeLayout from "../components/HomeLayouts/HomeLayout";
import styles from '../styles/Home.module.css'
import * as Yup from "yup"; 
import useUser from "../lib/useUser";
import fetchJson, { FetchError } from "../lib/fetchJson"; 
import { DisabledBtnLoader } from "../components/utils/loader";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login({ BASE_URL }) {
  const [Info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const [Status, setStatus] = useState("Login");
  const { mutateUser } = useUser({
    redirectTo: "/dashboard",
    redirectIfFound: true,
  });
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
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {  
    setLoading(true);

    router.push("/dashboard")
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
                        MSMEs Ecosystem brings you closer to achieving your
                        business dreams
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
                  
                  <form className="login-signup-form"
                     onSubmit={handleSubmit(onSubmit)}
                  >
                  {Info !== "" && (
                    <div
                      className="alert alert-info fade show text-center"  
                      role="alert"
                    >
                      <strong >{Info}</strong> 
                    </div>
                  )}
                    <div className="form-group mb-3">
                    <label htmlFor="userid" className="pb-1">Email Address</label>
                     
                     {errors.userid && <p className="text-danger" role="alert"> {errors.userid?.message}</p> } 
                     <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-email color-primary" />
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="name@msmes.io"
                          {...register("userid", {
                            required: "Email is required",
                          })}
                          name="userid"
                        />
                      </div>
                    </div>
                     
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label htmlFor="password" className="pb-1">Password</label>
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
                      {errors.password && <p className="text-danger" role="alert"> {errors.password?.message}</p> } 
                     
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-lock color-primary" />
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                          name="password"
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

export async function getServerSideProps({ params }) {
  const userId = ""; //params.userId;
  const BASE_URL = process.env.BASE_URL;

  return {
    props: {
      BASE_URL,
    },
  };
}


Login.getLayout = function getLayout(page) {
    return (
      <HomeLayout>
        {page} 
      </HomeLayout>
    )
  }
  
